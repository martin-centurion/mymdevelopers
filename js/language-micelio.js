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
        descMicelio: "Micelio Marketing Digital | Agencia",
        introduccionMicelio: "Introducción",
        textMicelio: "Desarrollamos un sitio web moderno y funcional que refleja la identidad de la agencia y sus servicios. El objetivo principal fue crear una plataforma intuitiva y visualmente atractiva que mejore la experiencia del usuario y aumente las conversiones.",
        clienteMicelio: "Cliente",
        fechaMicelio: "Fecha",
        fechaMicelio2: "Junio 2024",
        categoriaMicelio: "Categoría",
        categoriaMicelio2: "SITIO WEB, REACT JS & JAVASCRIPT",
        tagsMicelio: "Diseño, Minimalista, Moderno",
        herramientasMicelio: "Herramientas.",
        herramientasTextMicelio: "Para este proyecto, utilizamos Figma para el diseño y WordPress para el desarrollo, asegurando un rendimiento óptimo y una experiencia de usuario fluida. También implementamos herramientas de SEO para mejorar la visibilidad del sitio en los motores de búsqueda.",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titleMicelio: "Website",
        descMicelio: "Micelio Marketing Digital | Agency",
        introduccionMicelio: "Introduction",
        textMicelio: "We develop a modern and functional website that reflects the identity of the agency and its services. The main goal was to create an intuitive and visually appealing platform that improves user experience and increases conversions.",
        clienteMicelio: "Client",
        fechaMicelio: "Date",
        fechaMicelio2: "June 2024",
        categoriaMicelio: "Category",
        categoriaMicelio2: "WEB DESIGN, REACT JS & JAVASCRIPT",
        tagsMicelio: "Design, Minimalist, Modern",
        herramientasMicelio: "Tools.",
        herramientasTextMicelio: "For this project, we used Figma for design and WordPress for development, ensuring optimal performance and a smooth user experience. We also implement SEO tools to improve the site's visibility in search engines.",
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
