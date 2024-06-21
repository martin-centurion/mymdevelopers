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

const pipa = {
    es: {
        titlePipa: "Sitio Web",
        descPipa: "Pipa Producciones | Productora",
        introduccionPipa: "Introducción",
        textPipa: "El resultado es un sitio web que no solo es una vitrina de los servicios y proyectos de Pipa Producciones, sino también una extensión de su pasión por la producción audiovisual. Cada elemento del diseño ha sido pensado para inspirar, atraer y convertir visitantes en clientes satisfechos. Este proyecto ha sido una excelente oportunidad para mostrar nuestra capacidad de crear soluciones web que combinan estética y funcionalidad.",
        clientePipa: "Cliente",
        fechaPipa: "Fecha",
        fechaPipa2: "Mayo 2024",
        categoriaPipa: "Categoría",
        categoriaPipa2: "SITIO WEB, REACT JS & JAVASCRIPT",
        tagsPipa: "Diseño, Minimalista, Moderno",
        herramientasPipa: "Herramientas.",
        herramientasTextPipa: "El uso de React JS y JavaScript permitió desarrollar un sitio web moderno y eficiente para Pipa Producciones. La combinación de estas tecnologías aseguró una experiencia de usuario fluida, rápida y visualmente atractiva, cumpliendo con las expectativas del cliente y ofreciendo una plataforma sólida para la promoción de sus servicios audiovisuales.",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titlePipa: "Website",
        descPipa: "Pipa Productions | Producer",
        introduccionPipa: "Introduction",
        textPipa: "The result is a website that is not only a showcase of Pipa Producciones' services and projects, but also an extension of its passion for audiovisual production. Every element of the design has been designed to inspire, attract and convert visitors into satisfied customers. This project has been an excellent opportunity to show our ability to create web solutions that combine aesthetics and functionality.",
        clientePipa: "Client",
        fechaPipa: "Date",
        fechaPipa2: "May 2024",
        categoriaPipa: "Category",
        categoriaPipa2: "WEB DESIGN, REACT JS & JAVASCRIPT",
        tagsPipa: "Design, Minimalist, Modern",
        herramientasPipa: "Tools.",
        herramientasTextPipa: "The use of React JS and JavaScript allowed us to develop a modern and efficient website for Pipa Producciones. The combination of these technologies ensured a fluid, fast and visually attractive user experience, meeting customer expectations and offering a solid platform for the promotion of their audiovisual services.",
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
    document.getElementById('titlePipa').innerText = pipa[lang].titlePipa;
    document.getElementById('descPipa').innerText = pipa[lang].descPipa;
    document.getElementById('introduccionPipa').innerText = pipa[lang].introduccionPipa;
    document.getElementById('textPipa').innerText = pipa[lang].textPipa;
    document.getElementById('clientePipa').innerText = pipa[lang].clientePipa;
    document.getElementById('fechaPipa').innerText = pipa[lang].fechaPipa;
    document.getElementById('fechaPipa2').innerText = pipa[lang].fechaPipa2;
    document.getElementById('categoriaPipa').innerText = pipa[lang].categoriaPipa;
    document.getElementById('categoriaPipa2').innerText = pipa[lang].categoriaPipa2;
    document.getElementById('tagsPipa').innerText = pipa[lang].tagsPipa;
    document.getElementById('herramientasPipa').innerText = pipa[lang].herramientasPipa;
    document.getElementById('herramientasTextPipa').innerText = pipa[lang].herramientasTextPipa;
    document.getElementById('siguienteProyecto').innerText = pipa[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
