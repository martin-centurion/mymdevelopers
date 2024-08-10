const navbar = {
    es: {
        sobrenosotros: "Sobre Nosotros",
        contacto: "Contacto",
        es: "ES 🇪🇸",
        in: "EN 🇬🇧"
    },
    en: {
        sobrenosotros: "About Us",
        contacto: "Contact",
        es: "SP 🇪🇸",
        in: "EN 🇬🇧"
    }
}

const micelio = {
    es: {
        titleMicelio: "Sitio Web",
        descMicelio: "Scr Consulting | Consultora",
        introduccionMicelio: "Introducción",
        textMicelio: "SCR Consulting es una firma especializada en la implementación de soluciones tecnológicas avanzadas para empresas que buscan optimizar sus operaciones y mejorar su competitividad en un entorno empresarial en constante evolución. Nuestro enfoque está basado en la integración de sistemas de vanguardia, la automatización de procesos y la gestión eficiente de recursos tecnológicos.",
        clienteMicelio: "Cliente",
        fechaMicelio: "Fecha",
        fechaMicelio2: "Agosto 2024",
        categoriaMicelio: "Categoría",
        categoriaMicelio2: "WORDPRESS",
        tagsMicelio: "Diseño, Minimalista, Moderno",
        herramientasMicelio: "Herramientas.",
        herramientasTextMicelio: "El sitio web de SCR Consulting fue desarrollado en WordPress e integra funcionalidades como newsletter, bolsa de trabajo y calendario de eventos para optimizar la interacción y gestión de usuarios.",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titleMicelio: "Website",
        descMicelio: "Scr Consulting | Consulting",
        introduccionMicelio: "Introduction",
        textMicelio: "SCR Consulting is a firm specialized in the implementation of advanced technological solutions for companies seeking to optimize their operations and improve their competitiveness in a constantly evolving business environment. Our approach is based on the integration of cutting-edge systems, process automation and efficient management of technological resources.",
        clienteMicelio: "Client",
        fechaMicelio: "Date",
        fechaMicelio2: "August 2024",
        categoriaMicelio: "Category",
        categoriaMicelio2: "WORDPRESS",
        tagsMicelio: "Design, Minimalist, Modern",
        herramientasMicelio: "Tools.",
        herramientasTextMicelio: "The SCR Consulting website was developed in WordPress and integrates functionalities such as newsletter, job board and events calendar to optimize user interaction and management.",
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
    document.getElementById('introduccionMicelio').innerText = micelio[lang].introduccionMicelio;
    document.getElementById('textMicelio').innerText = micelio[lang].textMicelio;
    document.getElementById('clienteMicelio').innerText = micelio[lang].clienteMicelio;
    document.getElementById('fechaMicelio').innerText = micelio[lang].fechaMicelio;
    document.getElementById('fechaMicelio2').innerText = micelio[lang].fechaMicelio2;
    document.getElementById('categoriaMicelio').innerText = micelio[lang].categoriaMicelio;
    document.getElementById('categoriaMicelio2').innerText = micelio[lang].categoriaMicelio2;
    document.getElementById('tagsMicelio').innerText = micelio[lang].tagsMicelio;
    document.getElementById('herramientasMicelio').innerText = micelio[lang].herramientasMicelio;
    document.getElementById('herramientasTextMicelio').innerText = micelio[lang].herramientasTextMicelio;
    document.getElementById('siguienteProyecto').innerText = micelio[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
