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

const aplicaciones = {
    es: {
        titleApp: "Aplicacion web.",
        descApp: "Administrador de turnos y servicios | Comercial.",
        introduccionA: "Introducción",
        textA: "Accedé a la gestión integral de tu negocio desde la comodidad de tu dispositivo móvil. Con nuestra aplicación web podes crear servicios, gestionar turnos y clientes de manera eficiente y cómoda, desde tu teléfono. Simplificá tus tareas diarias y llevá el control de tu negocio, estés donde estés.",
        clienteA: "Cliente",
        fechaA: "Fecha",
        fechaA2: "Mayo 2024",
        categoriaA: "Categoría",
        categoriaA2: "Aplicacion Web, Mongo DB, React Js & javascript",
        tagsA: "Diseño, Minimalista, Moderno",
        herramientasA: "Herramientas.",
        herramientasTextA: "Nuestra aplicación se desarrolló utilizando la pila MERN (MongoDB, Express, React y Node.js), una combinación poderosa que nos permitió crear una experiencia completa y dinámica para nuestros usuarios. Con MongoDB como base de datos flexible y escalable, Express para construir un backend robusto y eficiente, React para una interfaz de usuario interactiva y Node.js para un servidor rápido y receptivo, pudimos ofrecer un excepcionalmente rápido, confiable y fácil de mantener.",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titleApp: "Web Application.",
        descApp: "Shift and service administrator | Commercial.",
        introduccionA: "Introduction",
        textA: "Access the comprehensive management of your business from the comfort of your mobile device. With our web application you can create services, manage shifts and clients efficiently and comfortably, from your phone. Simplify your daily tasks and take control of your business, wherever you are.",
        clienteA: "Client",
        fechaA: "Date",
        fechaA2: "May 2024",
        categoriaA: "Category",
        categoriaA2: "Web Application, Mongo DB, React Js & javascript",
        tagsA: "Design, Minimalist, Modern",
        herramientasA: "Tools.",
        herramientasTextA: "Our application was developed using the MERN stack (MongoDB, Express, React JS and Node.js), a powerful combination that allowed us to create a complete and dynamic experience for our users. With MongoDB as a flexible and scalable database, Express to build a robust and efficient backend, React for an interactive UI, and Node.js for a fast and responsive server, we were able to deliver an exceptionally fast, reliable, and easy-to-maintain platform.",
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
    document.getElementById('titleApp').innerText = aplicaciones[lang].titleApp;
    document.getElementById('descApp').innerText = aplicaciones[lang].descApp;
    document.getElementById('introduccionA').innerText = aplicaciones[lang].introduccionA;
    document.getElementById('textA').innerText = aplicaciones[lang].textA;
    document.getElementById('clienteA').innerText = aplicaciones[lang].clienteA;
    document.getElementById('fechaA').innerText = aplicaciones[lang].fechaA;
    document.getElementById('fechaA2').innerText = aplicaciones[lang].fechaA2;
    document.getElementById('categoriaA').innerText = aplicaciones[lang].categoriaA;
    document.getElementById('categoriaA2').innerText = aplicaciones[lang].categoriaA2;
    document.getElementById('tagsA').innerText = aplicaciones[lang].tagsA;
    document.getElementById('herramientasA').innerText = aplicaciones[lang].herramientasA;
    document.getElementById('herramientasTextA').innerText = aplicaciones[lang].herramientasTextA;
    document.getElementById('siguienteProyecto').innerText = aplicaciones[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
