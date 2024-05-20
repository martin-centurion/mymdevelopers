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
        descPipa: "Próximamente",
        introduccionPipa: "Introducción",
        textPipa: "Proximamente",
        clientePipa: "Cliente",
        fechaPipa: "Fecha",
        fechaPipa2: "Próximamente",
        categoriaPipa: "Categoría",
        categoriaPipa2: "SITIO WEB, REACT JS & JAVASCRIPT",
        tagsPipa: "Diseño, Minimalista, Moderno",
        herramientasPipa: "Herramientas.",
        herramientasTextPipa: "Próximamente",
        siguienteProyecto: "Siguiente Proyecto"
    },
    en: {
        titlePipa: "Website",
        descPipa: "Coming Soon",
        introduccionPipa: "Introduction",
        textPipa: "Coming Soon",
        clientePipa: "Client",
        fechaPipa: "Date",
        fechaPipa2: "Coming Soon",
        categoriaPipa: "Category",
        categoriaPipa2: "WEB DESIGN, REACT JS & JAVASCRIPT",
        tagsPipa: "Design, Minimalist, Modern",
        herramientasPipa: "Tools.",
        herramientasTextPipa: "Coming Soon",
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
    /* document.getElementById('introduccionPipa').innerText = pipa[lang].introduccionPipa;
    document.getElementById('textPipa').innerText = pipa[lang].textPipa;
    document.getElementById('clientePipa').innerText = pipa[lang].clientePipa;
    document.getElementById('fechaPipa').innerText = pipa[lang].fechaPipa;
    document.getElementById('fechaPipa2').innerText = pipa[lang].fechaPipa2;
    document.getElementById('categoriaPipa').innerText = pipa[lang].categoriaPipa;
    document.getElementById('categoriaPipa2').innerText = pipa[lang].categoriaPipa2;
    document.getElementById('tagsPipa').innerText = pipa[lang].tagsPipa;
    document.getElementById('herramientasPipa').innerText = pipa[lang].herramientasPipa;
    document.getElementById('herramientasTextPipa').innerText = pipa[lang].herramientasTextPipa; */
    document.getElementById('siguienteProyecto').innerText = pipa[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
