from pathlib import Path
from bs4 import BeautifulSoup, Comment
from deep_translator import GoogleTranslator

DOMAIN = "https://mymdevelopers.com.ar"
SKIP_FILES = {"index.html"}
TRANSLATOR = GoogleTranslator(source="auto", target="en")
CACHE = {}

PROPER_NOUNS = {
    "Fondo Muebles y Diseño",
    "MyM Developers",
}

MENU_TEXT_OVERRIDES = {
    "index.html": "Home",
    "portfolio.html": "Portfolio",
    "nosotros.html": "About Us",
    "contacto.html": "Contact",
}
MENU_TEXT_OVERRIDES.update(
    {name.replace(".html", "-en.html"): value for name, value in list(MENU_TEXT_OVERRIDES.items())}
)

SKIP_TEXT_TAGS = {"script", "style", "noscript", "code", "pre", "svg"}
ATTRIBUTE_TARGETS = [
    "title",
    "alt",
    "placeholder",
    "aria-label",
    "data-title",
    "data-content",
]
META_TARGETS = {
    "description",
    "keywords",
    "og:title",
    "og:description",
    "twitter:title",
    "twitter:description",
}


def translate_string(text: str) -> str:
    stripped = text.strip()
    if not stripped:
        return text
    if stripped in PROPER_NOUNS:
        return text
    if stripped in CACHE:
        translated = CACHE[stripped]
    else:
        translated = TRANSLATOR.translate(stripped)
        CACHE[stripped] = translated
    leading = text[: len(text) - len(text.lstrip(" \t\n\r"))]
    trailing = text[len(text.rstrip(" \t\n\r")) :]
    return f"{leading}{translated}{trailing}"


def translate_attributes(tag):
    for attr in ATTRIBUTE_TARGETS:
        if attr in tag.attrs and isinstance(tag[attr], str) and tag[attr].strip():
            tag[attr] = translate_string(tag[attr])
    if tag.name == "meta":
        key = (tag.get("name") or tag.get("property") or "").lower()
        if key in META_TARGETS and "content" in tag.attrs:
            tag["content"] = translate_string(tag["content"])


def add_language_link(soup: BeautifulSoup, href: str, label: str):
    for nav in soup.find_all("nav", class_="main-menu"):
        ul = nav.find("ul")
        if ul and not ul.find("li", class_="lang-btn"):
            li = soup.new_tag("li", **{"class": "lang-btn"})
            a = soup.new_tag("a", href=href)
            a.string = label
            li.append(a)
            ul.append(li)
    for mobile in soup.find_all("div", class_="quanto-mobile-menu"):
        ul = mobile.find("ul")
        if ul and not ul.find("li", class_="lang-btn"):
            li = soup.new_tag("li", **{"class": "lang-btn"})
            a = soup.new_tag("a", href=href)
            a.string = label
            li.append(a)
            ul.append(li)


def ensure_alternate_links(soup: BeautifulSoup, es_name: str, en_name: str):
    head = soup.head
    if not head:
        return
    pairs = [
        ("es", f"{DOMAIN}/{es_name}"),
        ("en", f"{DOMAIN}/{en_name}"),
    ]
    for hreflang, href in pairs:
        existing = head.find("link", rel="alternate", hreflang=hreflang)
        if existing:
            existing["href"] = href
        else:
            tag = soup.new_tag("link", rel="alternate", hreflang=hreflang, href=href)
            head.append(tag)


def ensure_canonical(soup: BeautifulSoup, href: str):
    if not soup.head:
        return
    canonical = soup.head.find("link", rel="canonical")
    if canonical:
        canonical["href"] = href
    else:
        tag = soup.new_tag("link", rel="canonical", href=href)
        soup.head.append(tag)


def translate_html(path: Path, english_path: Path):
    original = path.read_text(encoding="utf-8")
    soup = BeautifulSoup(original, "html.parser")
    if soup.html:
        soup.html["lang"] = "es"
    ensure_alternate_links(soup, path.name, english_path.name)
    add_language_link(soup, english_path.name, "EN")
    path.write_text(str(soup), encoding="utf-8")

    english_soup = BeautifulSoup(original, "html.parser")
    if english_soup.html:
        english_soup.html["lang"] = "en"
    for tag in english_soup.find_all(True):
        translate_attributes(tag)
    for text_node in english_soup.find_all(string=True):
        if isinstance(text_node, Comment):
            continue
        parent_name = text_node.parent.name if text_node.parent else ""
        if parent_name in SKIP_TEXT_TAGS:
            continue
        cleaned = text_node.strip()
        if not cleaned:
            continue
        translated = translate_string(str(text_node))
        text_node.replace_with(translated)
    ensure_alternate_links(english_soup, path.name, english_path.name)
    ensure_canonical(english_soup, f"{DOMAIN}/{english_path.name}")
    adjust_english_links(english_soup, english_path.name)
    add_language_link(english_soup, path.name, "ES")
    english_path.write_text(str(english_soup), encoding="utf-8")


def main():
    html_files = sorted(
        p for p in Path(".").glob("*.html") if not p.name.endswith("-en.html")
    )
    for path in html_files:
        if path.name in SKIP_FILES:
            continue
        english_path = path.with_name(f"{path.stem}-en.html")
        if english_path.exists():
            continue
        print(f"Translating {path.name} → {english_path.name}")
        translate_html(path, english_path)


if __name__ == "__main__":
    main()
