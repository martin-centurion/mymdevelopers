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

const tekoha = {
    es: {
        titleTekoha: "Sitio Web.",
        descTekoha: "Tekohá Eco | Organización Ambiental.",
        introduccionT: "Introducción",
        textT: "Nuestra labor fue traducir la esencia de Tekoha en una experiencia digital que refleje su compromiso con el medio ambiente. A través de un diseño intuitivo y accesible, creamos una plataforma donde se puede explorár cada aspecto de la organización: desde sus programas y proyectos hasta sus eventos y recursos educativos. Implementamos secciones interactivas que permiten a los visitantes sumergirse en la misión de Tekoha, mostrando de manera clara y atractiva todo lo que la organización tiene para ofrecer. Con una estructura sólida y una navegación fluida, nuestra página web para Tekoha es una ventana al corazón de la conservación ambiental.",
        clienteT: "Cliente",
        fechaT: "Fecha",
        fechaT2: "Mayo 2024",
        categoriaT: "Categoría",
        categoriaT2: "Sitio web, WordPress",
        tagsT: "Diseño, WordPress, Moderno",
        herramientasT: "Herramientas.",
        herramientasTextT: "Utilizamos WordPress para crear un sitio web flexible y fácil de gestionar, permitiendo una administración eficiente del contenido. Por otro lado, Figma nos brindó la capacidad de diseñar prototipos y maquetas de manera colaborativa, asegurando una experiencia visualmente impactante y coherente.",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titleTekoha: "Website.",
        descTekoha: "Tekohá Eco | Environmental Organization.",
        introduccionT: "Introduction",
        textT: "Our job was to translate the essence of Tekoha into a digital experience that reflects its commitment to the environment. Through an intuitive and accessible design, we created a platform where you can explore every aspect of the organization: from its programs and projects to its events and educational resources. We implemented interactive sections that allow visitors to immerse themselves in Tekoha's mission, clearly and attractively displaying everything the organization has to offer. With a solid structure and smooth navigation, our website for Tekoha is a window to the heart of environmental conservation.",
        clienteT: "Client",
        fechaT: "Date",
        fechaT2: "May 2024",
        categoriaT: "Category",
        categoriaT2: "Website, WordPress",
        tagsT: "Design, WordPress, Modern",
        herramientasT: "Tools.",
        herramientasTextT: "We use WordPress to create a flexible and easy-to-manage website, allowing for efficient content management. On the other hand, Figma gave us the ability to design prototypes and mockups collaboratively, ensuring a visually impactful and coherent experience.",
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
    document.getElementById('titleTekoha').innerText = tekoha[lang].titleTekoha;
    document.getElementById('descTekoha').innerText = tekoha[lang].descTekoha;
    document.getElementById('introduccionT').innerText = tekoha[lang].introduccionT;
    document.getElementById('textT').innerText = tekoha[lang].textT;
    document.getElementById('clienteT').innerText = tekoha[lang].clienteT;
    document.getElementById('fechaT').innerText = tekoha[lang].fechaT;
    document.getElementById('fechaT2').innerText = tekoha[lang].fechaT2;
    document.getElementById('categoriaT').innerText = tekoha[lang].categoriaT;
    document.getElementById('categoriaT2').innerText = tekoha[lang].categoriaT2;
    document.getElementById('tagsT').innerText = tekoha[lang].tagsT;
    document.getElementById('herramientasT').innerText = tekoha[lang].herramientasT;
    document.getElementById('herramientasTextT').innerText = tekoha[lang].herramientasTextT;
    document.getElementById('siguienteProyecto').innerText = tekoha[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
