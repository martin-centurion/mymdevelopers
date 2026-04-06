from pathlib import Path
from bs4 import BeautifulSoup

NAV_ITEMS = [
    ("index-en.html", "Home"),
    ("portfolio-en.html", "Portfolio"),
    ("nosotros-en.html", "About Us"),
    ("contacto-en.html", "Contact"),
]

SPANISH_MAP = {
    "index-en.html": "index.html",
    "portfolio-en.html": "portfolio.html",
    "nosotros-en.html": "nosotros.html",
    "contacto-en.html": "contacto.html",
}

FLAG = {
    "en": "🇺🇸",
    "es": "🇪🇸",
}


def rebuild_nav(ul, soup):
    ul.clear()
    for href, label in NAV_ITEMS:
        li = soup.new_tag("li")
        a = soup.new_tag("a", href=href)
        a.string = label
        li.append(a)
        ul.append(li)


def make_lang_switch(soup, current, es_page):
    if soup.find("details", class_="lang-switch"):
        return None
    details = soup.new_tag("details", **{"class": "lang-switch d-none d-lg-inline-flex"})
    summary = soup.new_tag("summary")
    summary_flag = soup.new_tag("span", **{"class": "flag"})
    summary_flag.string = FLAG["en"]
    summary_label = soup.new_tag("span", **{"class": "lang-label"})
    summary_label.string = "English"
    summary_arrow = soup.new_tag("span", **{"class": "arrow"})
    summary_arrow.string = "▾"
    summary.append(summary_flag)
    summary.append(summary_label)
    summary.append(summary_arrow)
    details.append(summary)
    ul = soup.new_tag("ul")
    current_li = soup.new_tag("li")
    current_a = soup.new_tag("a", href=current)
    current_flag = soup.new_tag("span", **{"class": "flag"})
    current_flag.string = FLAG["en"]
    current_a.append(current_flag)
    current_a.append(soup.new_string(" English"))
    current_li.append(current_a)
    ul.append(current_li)
    es_li = soup.new_tag("li")
    es_a = soup.new_tag("a", href=es_page)
    es_flag = soup.new_tag("span", **{"class": "flag"})
    es_flag.string = FLAG["es"]
    es_a.append(es_flag)
    es_a.append(soup.new_string(" Spanish"))
    es_li.append(es_a)
    ul.append(es_li)
    details.append(ul)
    return details


def make_mobile_switch(soup, current, es_page):
    if soup.find("div", class_="lang-switch-mobile"):
        return None
    wrapper = soup.new_tag("div", **{"class": "lang-switch-mobile d-lg-none"})
    en_a = soup.new_tag("a", href=current)
    en_a["class"] = "active"
    en_a.append(FLAG["en"] + " English")
    es_a = soup.new_tag("a", href=es_page)
    es_a.append(FLAG["es"] + " Spanish")
    wrapper.append(en_a)
    wrapper.append(es_a)
    return wrapper


def process(path: Path):
    soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
    if soup.html:
        soup.html["lang"] = "en"
    for nav in soup.select("nav.main-menu ul"):
        rebuild_nav(nav, soup)
    mobile = soup.find("div", class_="quanto-mobile-menu")
    if mobile:
        ul = mobile.find("ul")
        if ul:
            rebuild_nav(ul, soup)
    es_page = SPANISH_MAP.get(path.name, "index.html")
    switch = make_lang_switch(soup, path.name, es_page)
    if switch:
        nav = soup.find("nav", class_="main-menu")
        if nav:
            nav.insert_after(switch)
    mobile_switch = make_mobile_switch(soup, path.name, es_page)
    if mobile and mobile_switch:
        mobile.append(mobile_switch)
    soup.head.append(soup.new_string("\n"))
    path.write_text(str(soup), encoding="utf-8")


def main():
    for path in sorted(Path(".").glob("*-en.html")):
        process(path)


if __name__ == "__main__":
    main()
