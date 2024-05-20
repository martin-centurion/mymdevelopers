const navbar = {
    es: {
        sobrenosotros: "Sobre Nosotros",
        contacto: "Contacto",
        es: "ES",
        in: "EN"
    },
    en: {
        sobrenosotros: "About Us",
        contacto: "Contact",
        es: "SP",
        in: "EN"
    }
}

const micelio = {
    es: {
        titleMicelio: "Sitio Web",
        descMicelio: "Próximamente",
        introduccionMicelio: "Introducción",
        textMicelio: "Proximamente",
        clienteMicelio: "Cliente",
        fechaMicelio: "Fecha",
        fechaMicelio2: "Próximamente",
        categoriaMicelio: "Categoría",
        categoriaMicelio2: "SITIO WEB, REACT JS & JAVASCRIPT",
        tagsMicelio: "Diseño, Minimalista, Moderno",
        herramientasMicelio: "Herramientas.",
        herramientasTextMicelio: "Próximamente",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titleMicelio: "Website",
        descMicelio: "Coming Soon",
        introduccionMicelio: "Introduction",
        textMicelio: "Coming Soon",
        clienteMicelio: "Client",
        fechaMicelio: "Date",
        fechaMicelio2: "Coming Soon",
        categoriaMicelio: "Category",
        categoriaMicelio2: "WEB DESIGN, REACT JS & JAVASCRIPT",
        tagsMicelio: "Design, Minimalist, Modern",
        herramientasMicelio: "Tools.",
        herramientasTextMicelio: "Coming Soon",
        siguienteProyecto: "Next Project"
    }
}

/* ============ language ================ */

function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.getElementById('sobrenosotros').innerText = navbar[lang].sobrenosotros;
    document.getElementById('contacto').innerText = navbar[lang].contacto;
    document.getElementById('es').innerText = navbar[lang].es;
    document.getElementById('in').innerText = navbar[lang].in;
    document.getElementById('titleMicelio').innerText = micelio[lang].titleMicelio;
    document.getElementById('descMicelio').innerText = micelio[lang].descMicelio;
    /* document.getElementById('introduccionMicelio').innerText = Micelio[lang].introduccionMicelio;
    document.getElementById('textMicelio').innerText = Micelio[lang].textMicelio;
    document.getElementById('clienteMicelio').innerText = Micelio[lang].clienteMicelio;
    document.getElementById('fechaMicelio').innerText = Micelio[lang].fechaMicelio;
    document.getElementById('fechaMicelio2').innerText = Micelio[lang].fechaMicelio2;
    document.getElementById('categoriaMicelio').innerText = Micelio[lang].categoriaMicelio;
    document.getElementById('categoriaMicelio2').innerText = Micelio[lang].categoriaMicelio2;
    document.getElementById('tagsMicelio').innerText = Micelio[lang].tagsMicelio;
    document.getElementById('herramientasMicelio').innerText = Micelio[lang].herramientasMicelio;
    document.getElementById('herramientasTextMicelio').innerText = Micelio[lang].herramientasTextMicelio; */
    document.getElementById('siguienteProyecto').innerText = Micelio[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
