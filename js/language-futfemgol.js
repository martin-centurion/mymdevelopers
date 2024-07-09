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
        descMicelio: "FutFemGol | Noticias Deportivas",
        introduccionMicelio: "Introducción",
        textMicelio: "El rediseño del sitio se centró en mejorar la navegación y la accesibilidad de la información, permitiendo a los visitantes encontrar fácilmente las noticias más recientes y relevantes. Se implementaron secciones destacadas y un flujo de contenido optimizado para mantener a los lectores informados y comprometidos. La integración de videos de entrevistas proporciona una dimensión adicional de contenido, aumentando la interacción y el tiempo de permanencia en el sitio. Además, se aplicaron técnicas de SEO para asegurar que el contenido del sitio sea fácilmente encontrado por los motores de búsqueda, incrementando así el tráfico orgánico.",
        clienteMicelio: "Cliente",
        fechaMicelio: "Fecha",
        fechaMicelio2: "Julio 2024",
        categoriaMicelio: "Categoría",
        categoriaMicelio2: "SITIO WEB, WORDPRESS & FIGMA",
        tagsMicelio: "Diseño, Minimalista, Moderno",
        herramientasMicelio: "Herramientas.",
        herramientasTextMicelio: "Para este proyecto, utilizamos Figma para el diseño y WordPress para el desarrollo, asegurando un rendimiento óptimo y una experiencia de usuario fluida. También implementamos herramientas de SEO para mejorar la visibilidad del sitio en los motores de búsqueda.",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titleMicelio: "Website",
        descMicelio: "FutFemGol | Sports News",
        introduccionMicelio: "Introduction",
        textMicelio: "The site redesign focused on improving navigation and information accessibility, allowing visitors to easily find the latest and most relevant news. Featured sections and a streamlined content flow were implemented to keep readers informed and engaged. Integrating interview videos provides an additional dimension of content, increasing engagement and time spent on site. Additionally, SEO techniques were applied to ensure that the site's content is easily found by search engines, thus increasing organic traffic.",
        clienteMicelio: "Client",
        fechaMicelio: "Date",
        fechaMicelio2: "July 2024",
        categoriaMicelio: "Category",
        categoriaMicelio2: "WEB DESIGN, WORDPRESS & FIGMA",
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
