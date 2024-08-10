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

const germanriesco = {
    es: {
        titleGermanRiesco: "Sitio Web.",
        descGermanRiesco: "Germán Riesco| Estudio de Iluminación.",
        introduccionGR: "Introducción",
        textGR: "Creamos una página web destinada a resaltar la especialidad de nuestro cliente: la arquitectura lumínica. Desde el momento en que se carga la página, los visitantes son recibidos por un diseño que pone la luz en el centro del escenario. Con un enfoque meticuloso en la iluminación y su impacto en los espacios arquitectónicos, esta página web se convierte en una galería virtual que celebra la interacción entre luz y arquitectura. Cada sección de la web está cuidadosamente diseñada para resaltar los proyectos del estudio, mostrando cómo la iluminación puede transformar y definir un espacio. Desde espectaculares diseños de interiores hasta impresionantes paisajes urbanos, nuestro objetivo fue crear una experiencia en línea que refleje la belleza y el poder de la luz en la arquitectura moderna.",
        clienteGR: "Cliente",
        fechaGR: "Fecha",
        fechaGR2: "Noviembre 2023",
        categoriaGR: "Categoría",
        categoriaGR2: "Sitio Web, React Js & JavaScript",
        tagsGR: "Diseño, Minimalista, Moderno",
        herramientasGR: "Herramientas.",
        herramientasTextGR: "Nuestro sitio web fue creada utilizando tecnologías de vanguardia como React Js y JavaScript. Con estas potentes herramientas, pudimos ofrecer una experiencia de usuario dinámica y receptiva. React nos permitió construir interfaces de usuario interactivas y escalables, mientras que JavaScript añadió funcionalidades personalizadas y un rendimiento óptimo. Además, todo el bocetado y diseño inicial se llevó a cabo en Figma, permitiéndonos visualizar y planificar cada detalle antes de comenzar el desarrollo.",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titleGermanRiesco: "Sitio Web.",
        descGermanRiesco: "Germán Riesco | Lighting Studio.",
        introduccionGR: "Introduction",
        textGR: "We created a website aimed at highlighting our client's specialty: lighting architecture. From the moment the page loads, visitors are greeted by a design that puts light center stage. With a meticulous focus on lighting and its impact on architectural spaces, this website becomes a virtual gallery celebrating the interaction between light and architecture. Each section of the website is carefully designed to highlight the studio's projects, showing how lighting can transform and define a space. From spectacular interior designs to stunning cityscapes, our goal was to create an online experience that reflects the beauty and power of light in modern architecture.",
        clienteGR: "Client",
        fechaGR: "Fecha",
        fechaGR2: "November 2023",
        categoriaGR: "Category",
        categoriaGR2: "Web Design, React Js & JavaScript",
        tagsGR: "Design, Minimalist, Modern",
        herramientasGR: "Tools.",
        herramientasTextGR: "Our website was created using cutting-edge technologies such as React Js and JavaScript. With these powerful tools, we were able to deliver a dynamic and responsive user experience. React allowed us to build interactive and scalable user interfaces, while JavaScript added custom functionality and optimal performance. Additionally, all initial sketching and design was carried out in Figma, allowing us to visualize and plan every detail before beginning development.",
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
    document.getElementById('titleGermanRiesco').innerText = germanriesco[lang].titleGermanRiesco;
    document.getElementById('descGermanRiesco').innerText = germanriesco[lang].descGermanRiesco;
    document.getElementById('introduccionGR').innerText = germanriesco[lang].introduccionGR;
    document.getElementById('textGR').innerText = germanriesco[lang].textGR;
    document.getElementById('clienteGR').innerText = germanriesco[lang].clienteGR;
    document.getElementById('fechaGR').innerText = germanriesco[lang].fechaGR;
    document.getElementById('fechaGR2').innerText = germanriesco[lang].fechaGR2;
    document.getElementById('categoriaGR').innerText = germanriesco[lang].categoriaGR;
    document.getElementById('categoriaGR2').innerText = germanriesco[lang].categoriaGR2;
    document.getElementById('tagsGR').innerText = germanriesco[lang].tagsGR;
    document.getElementById('herramientasGR').innerText = germanriesco[lang].herramientasGR;
    document.getElementById('herramientasTextGR').innerText = germanriesco[lang].herramientasTextGR;
    document.getElementById('siguienteProyecto').innerText = germanriesco[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
