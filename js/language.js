// Contenido en diferentes idiomas



// NavBar

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

// Banner

const banner = {
    es: {
        text1: "Tienda Online",
        text2: "Diseño personalizado, integración de pagos y soporte 24/7.",
        contact: "Contactanos"
    },
    en: {
        text1: "Shop Online",
        text2: "Custom design, payment integration, and 24/7 support.",
        contact: "Contact Us"
    }
}

const bannerdos = {
    es: {
        text1a: "Diseño Web",
        text2a: "Transforma tu presencia digital con diseño web profesional. Sitios web personalizados, optimización SEO y soporte continuo. ¡Haz que tu marca destaque hoy mismo!",
        contacta: "Contactanos"
    },
    en: {
        text1a: "Web Design",
        text2a: "Transform your digital presence with professional web design. Custom websites, SEO optimization, and continuous support. Make your brand stand out today!",
        contacta: "Contact Us"
    }
}

const bannertres = {
    es: {
        text1b: "Desarrollo de App",
        text2b: "Desarrollamos aplicaciones a medida para impulsar tu negocio. Innovación, funcionalidad y soporte continuo. ¡Lleva tus ideas al siguiente nivel!",
        contactb: "Contactanos"
    },
    en: {
        text1b: "app development",
        text2b: "We develop custom applications to boost your business. Innovation, functionality, and continuous support. Take your ideas to the next level!",
        contactb: "Contact Us"
    }
}

// Home titulo

const title1 = {
    es: {
        subtitle1: "Mente Creativa",
        title: "Estamos preparados para afrontar cualquier tipo de proyecto.",
        description: "Cada proyecto es único y nos involucramos en cada uno de los detalles porque los consideramos esenciales para alcanzar el objetivo final. Tenemos una actitud positiva y entusiasta para enfrentar cualquier desafío que nos propongas y siempre buscamos lograr el mejor resultado.",
        more: "Saber Más"
    },
    en: {
        subtitle1: "creative mind",
        title: "We are prepared to face any type of project.",
        description: "Each project is unique and we get involved in each of the details because we consider them essential to achieve the final objective. We have a positive and enthusiastic attitude to face any challenge you propose to us and we always seek to achieve the best result.",
        more: "Know More"
    }
}

// Home Portfolio

const portfoliohome = {
    es: {
        titlePortfolio: "Portfolio",
        subtitlePortfolio: "Nuestros trabajos.",
        todos: "Todos",
        sitioweb: "Sitio Web",
        aplicaciones: "Aplicaciones",
        proyecto1: "Aplicación Web | Gestor de turnos",
        proyecto2: "Ana Bauer | Fotógrafa & Filmmaker",
        proyecto3: "Germán Riesco | Arquitecto",
        proyecto4: "Tekohá Eco | Organización Ambiental.",
        proyecto5: "Sonder Tango | Orquesta",
        proyecto6: "Pipa Producciones | Productora",
        proyecto7: "Micelio | Agencia Digital"
    },
    en: {
        titlePortfolio: "Portfolio",
        subtitlePortfolio: "Our jobs.",
        todos: "All",
        sitioweb: "Web Design",
        aplicaciones: "Application",
        proyecto1: "Web Application | Shift Manager",
        proyecto2: "Ana Bauer | Photographer & Filmmaker",
        proyecto3: "German Riesco | Architect",
        proyecto4: "Tekohá Eco | Environmental Organization.",
        proyecto5: "Sonder Tango | Orchestra",
        proyecto6: "Pipa Producciones | Producer",
        proyecto7: "Mycelio | Digital Agency"
    }
}

// HOME CONTACTANOS

const contacthome = {
    es: {
        asolounpaso: "A solo un paso de",
        crear: "crear tu proyecto.",
        contactanos: "contactanos"
    },
    en: {
        asolounpaso: "Just one step away from",
        crear: "creating your project.",
        contactanos: "contact us"
    }
}

// HOME FOOTER

const contactfooter = {
    es: {
        ubicacion: "Ubicación : ",
        seguinos: "Seguinos",
        herramientas: "Herramientas"
    },
    en: {
        ubicacion: "Location : ",
        seguinos: "follow us",
        herramientas: "Tools"
    }
}

// Función para cambiar el idioma
/* function changeLanguage(lang) {
    document.getElementById('sobrenosotros').innerText = navbar[lang].sobrenosotros;
    document.getElementById('contacto').innerText = navbar[lang].contacto;
    document.getElementById('es').innerText = navbar[lang].es;
    document.getElementById('in').innerText = navbar[lang].in;
    document.getElementById('text1').innerText = banner[lang].text1;
    document.getElementById('text2').innerText = banner[lang].text2;
    document.getElementById('contact').innerText = banner[lang].contact;
    document.getElementById('text1a').innerText = bannerdos[lang].text1a;
    document.getElementById('text2a').innerText = bannerdos[lang].text2a;
    document.getElementById('contacta').innerText = bannerdos[lang].contacta;
    document.getElementById('text1b').innerText = bannertres[lang].text1b;
    document.getElementById('text2b').innerText = bannertres[lang].text2b;
    document.getElementById('contactb').innerText = bannertres[lang].contactb;
}

// Inicializa el contenido en español
changeLanguage('es'); */


/* ============ language ================ */


function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.getElementById('sobrenosotros').innerText = navbar[lang].sobrenosotros;
    document.getElementById('contacto').innerText = navbar[lang].contacto;
    document.getElementById('es').innerText = navbar[lang].es;
    document.getElementById('in').innerText = navbar[lang].in;
    document.getElementById('text1').innerText = banner[lang].text1;
    document.getElementById('text2').innerText = banner[lang].text2;
    document.getElementById('contact').innerText = banner[lang].contact;
    document.getElementById('text1a').innerText = bannerdos[lang].text1a;
    document.getElementById('text2a').innerText = bannerdos[lang].text2a;
    document.getElementById('contacta').innerText = bannerdos[lang].contacta;
    document.getElementById('text1b').innerText = bannertres[lang].text1b;
    document.getElementById('text2b').innerText = bannertres[lang].text2b;
    document.getElementById('contactb').innerText = bannertres[lang].contactb;
    document.getElementById('subtitle1').innerText = title1[lang].subtitle1;
    document.getElementById('title').innerText = title1[lang].title;
    document.getElementById('description').innerText = title1[lang].description;
    document.getElementById('more').innerText = title1[lang].more;
    document.getElementById('titlePortfolio').innerText = portfoliohome[lang].titlePortfolio;
    document.getElementById('subtitlePortfolio').innerText = portfoliohome[lang].subtitlePortfolio;
    document.getElementById('todos').innerText = portfoliohome[lang].todos;
    document.getElementById('sitioweb').innerText = portfoliohome[lang].sitioweb;
    document.getElementById('aplicaciones').innerText = portfoliohome[lang].aplicaciones;
    document.getElementById('proyecto1').innerText = portfoliohome[lang].proyecto1;
    document.getElementById('proyecto2').innerText = portfoliohome[lang].proyecto2;
    document.getElementById('proyecto3').innerText = portfoliohome[lang].proyecto3;
    document.getElementById('proyecto4').innerText = portfoliohome[lang].proyecto4;
    document.getElementById('proyecto5').innerText = portfoliohome[lang].proyecto5;
    document.getElementById('proyecto6').innerText = portfoliohome[lang].proyecto6;
    document.getElementById('proyecto7').innerText = portfoliohome[lang].proyecto7;
    document.getElementById('asolounpaso').innerText = contacthome[lang].asolounpaso;
    document.getElementById('crear').innerText = contacthome[lang].crear;
    document.getElementById('contactanos').innerText = contacthome[lang].contactanos;
    document.getElementById('ubicacion').innerText = contactfooter[lang].ubicacion;
    document.getElementById('seguinos').innerText = contactfooter[lang].seguinos;
    document.getElementById('herramientas').innerText = contactfooter[lang].herramientas;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
