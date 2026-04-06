from pathlib import Path
from bs4 import BeautifulSoup, Comment

EN_NAV_LABELS = {
    "index-en.html": "Home",
    "portfolio-en.html": "Portfolio",
    "nosotros-en.html": "About Us",
    "contacto-en.html": "Contact",
}

PROPER_NOUN_REPLACEMENTS = {
    "Furniture and Design Fund": "Fondo Muebles y Diseño",
}


def is_external(href: str) -> bool:
    return href.startswith(("http://", "https://", "mailto:", "tel:", "#"))


def to_english_href(href: str, english_files: set[str]) -> str:
    if is_external(href) or not href.endswith(".html"):
        return href
    if href.endswith("-en.html"):
        return href
    name = Path(href).name
    candidate = name.replace(".html", "-en.html")
    if candidate in english_files:
        return href.replace(name, candidate)
    return href


def to_spanish_href(href: str, spanish_files: set[str]) -> str:
    if is_external(href) or not href.endswith(".html"):
        return href
    name = Path(href).name
    if name.endswith("-en.html"):
        candidate = name.replace("-en.html", ".html")
        if candidate in spanish_files:
            return href.replace(name, candidate)
    return href


def build_toggle(soup: BeautifulSoup, current_href: str, other_href: str, is_english: bool, mobile: bool):
    classes = ["lang-toggle", "lang-toggle--mobile" if mobile else "lang-toggle--desktop"]
    if mobile:
        classes.append("d-inline-flex")
        classes.append("d-lg-none")
    else:
        classes.append("d-none")
        classes.append("d-lg-inline-flex")
    wrapper = soup.new_tag("div", **{"class": " ".join(classes)})

    def link(href: str, label: str, active: bool):
        a = soup.new_tag("a", href=href, **{"class": "lang-toggle__link"})
        if active:
            a["class"] = a.get("class", []) + ["active"]
        a.append(soup.new_string(label))
        return a

    if is_english:
        wrapper.append(link(other_href, "ES", False))
        wrapper.append(link(current_href, "EN", True))
    else:
        wrapper.append(link(current_href, "ES", True))
        wrapper.append(link(other_href, "EN", False))
    return wrapper


def update_menus(soup: BeautifulSoup, is_english: bool, english_files: set[str], spanish_files: set[str]):
    containers = []
    containers += soup.find_all("nav", class_="main-menu")
    containers += soup.find_all("div", class_="quanto-mobile-menu")

    for container in containers:
        for li in container.select("li.lang-btn"):
            li.decompose()
        for a in container.find_all("a", href=True):
            href = a["href"]
            if is_english:
                new_href = to_english_href(href, english_files)
                a["href"] = new_href
                label = EN_NAV_LABELS.get(Path(new_href).name)
                if label and a.string is not None:
                    a.string = label
            else:
                a["href"] = to_spanish_href(href, spanish_files)


def cleanup_old_switches(soup: BeautifulSoup):
    for node in soup.select("details.lang-switch"):
        node.decompose()
    for node in soup.select("div.lang-switch-mobile"):
        node.decompose()
    for node in soup.select("div.lang-toggle"):
        node.decompose()


def apply_proper_noun_fixes(soup: BeautifulSoup):
    for text_node in soup.find_all(string=True):
        if isinstance(text_node, Comment):
            continue
        value = str(text_node)
        for wrong, correct in PROPER_NOUN_REPLACEMENTS.items():
            if wrong in value:
                text_node.replace_with(value.replace(wrong, correct))
                value = str(text_node)


def fix_odometer_placeholders(soup: BeautifulSoup):
    for span in soup.select("span.odometer"):
        if span.string is None or span.string.strip().lower() == "none":
            span.string = "."


def process(path: Path, english_files: set[str], spanish_files: set[str]):
    soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
    is_english = path.name.endswith("-en.html")
    if soup.html:
        soup.html["lang"] = "en" if is_english else "es"

    cleanup_old_switches(soup)
    update_menus(soup, is_english, english_files, spanish_files)

    if is_english:
        apply_proper_noun_fixes(soup)
        fix_odometer_placeholders(soup)

    current_href = path.name
    if is_english:
        other_href = path.name.replace("-en.html", ".html")
    else:
        other_href = path.name.replace(".html", "-en.html")

    desktop_toggle = build_toggle(soup, current_href, other_href, is_english, mobile=False)
    mobile_toggle = build_toggle(soup, current_href, other_href, is_english, mobile=True)

    nav = soup.find("nav", class_="main-menu")
    if nav:
        nav.insert_after(desktop_toggle)

    menu_button = soup.find("button", class_="menuBar-toggle")
    if menu_button:
        menu_button.insert_before(mobile_toggle)

    path.write_text(str(soup), encoding="utf-8")


def main():
    html_files = sorted(Path(".").glob("*.html"))
    english_files = {p.name for p in html_files if p.name.endswith("-en.html")}
    spanish_files = {p.name for p in html_files if not p.name.endswith("-en.html")}
    for path in html_files:
        process(path, english_files, spanish_files)


if __name__ == "__main__":
    main()
