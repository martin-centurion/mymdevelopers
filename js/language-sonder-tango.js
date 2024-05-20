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

const sondertango = {
    es: {
        titleSonderTango: "Tienda Online.",
        descSonderTango: "Sonder Tango | Orquesta.",
        introduccionST: "Introducción",
        textST: "Explorá la magia del tango argentino en las encantadoras calles de Europa a través de nuestro sitio web. Desde la compra de tickets y merchandising hasta la descarga de música exclusiva, nuestro sitio ofrece una experiencia completa para los amantes del tango. Además, el sitio ofrece un calendario interactivo para que los usuarios puedan acceder rápidamente a las fechas y lugares de conciertos en vivo.",
        clienteST: "Cliente",
        fechaST: "Fecha",
        fechaST2: "Marzo 2024",
        categoriaST: "Categoría",
        categoriaST2: "TIENDA ONLINE, WORDPRESS",
        tagsST: "Diseño, Minimalista, Moderno",
        herramientasST: "Herramientas.",
        herramientasTextST: "Utilizamos WordPress para crear un sitio web flexible y fácil de gestionar, permitiendo una administración eficiente del contenido. Por otro lado, Figma nos brindó la capacidad de diseñar prototipos y maquetas de manera colaborativa, asegurando una experiencia visualmente impactante y coherente.",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titleSonderTango: "Online Store.",
        descSonderTango: "Sonder Tango | Orchestra.",
        introduccionST: "Introduction",
        textST: "Explore the magic of Argentine tango in the charming streets of Europe through our website. From purchasing tickets and merchandise to downloading exclusive music, our site offers a complete experience for tango lovers. Additionally, the site offers an interactive calendar so users can quickly access live concert dates and locations.",
        clienteST: "Client",
        fechaST: "Date",
        fechaST2: "March 2024",
        categoriaST: "Category",
        categoriaST2: "Online Store, WORDPRESS",
        tagsST: "Design, Minimalist, Modern",
        herramientasST: "Tools.",
        herramientasTextST: "We use WordPress to create a flexible and easy-to-manage website, allowing for efficient content management. On the other hand, Figma gave us the ability to design prototypes and mockups collaboratively, ensuring a visually impactful and coherent experience.",
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
    document.getElementById('titleSonderTango').innerText = sondertango[lang].titleSonderTango;
    document.getElementById('descSonderTango').innerText = sondertango[lang].descSonderTango;
    document.getElementById('introduccionST').innerText = sondertango[lang].introduccionST;
    document.getElementById('textST').innerText = sondertango[lang].textST;
    document.getElementById('clienteST').innerText = sondertango[lang].clienteST;
    document.getElementById('fechaST').innerText = sondertango[lang].fechaST;
    document.getElementById('fechaST2').innerText = sondertango[lang].fechaST2;
    document.getElementById('categoriaST').innerText = sondertango[lang].categoriaST;
    document.getElementById('categoriaST2').innerText = sondertango[lang].categoriaST2;
    document.getElementById('tagsST').innerText = sondertango[lang].tagsST;
    document.getElementById('herramientasST').innerText = sondertango[lang].herramientasST;
    document.getElementById('herramientasTextST').innerText = sondertango[lang].herramientasTextST;
    document.getElementById('siguienteProyecto').innerText = sondertango[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
