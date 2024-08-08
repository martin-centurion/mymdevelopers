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
        text1: "Nuestros trabajos",
        text2: "Diseños modernos con la última tendencia de desarrollo."
    },
    en: {
        text1: "Our Jobs",
        text2: "Modern designs with the latest development trend."
    }
}

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
        proyecto7: "Micelio | Agencia Digital",
        proyecto8: "FutFemGol | Portal de Noticias Deportivas",
        proyecto9: "Scr Consulting | Consultora"
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
        proyecto7: "Mycelio | Digital Agency",
        proyecto8: "FutFemGol | Sports News",
        proyecto9: "Scr Consulting | Consulting"
    }
}

// Home titulo

const title1 = {
    es: {
        title: "¿Quienes Somos?",
        description: "Somos un estudio de desarrollo que se dedica a cultivar ideas inteligentes para empresas emergentes y emprendedores experimentados. Nuestro compromiso es satisfacer y superar las expectativas de cada cliente.",
        titletienda: "Tiendas online",
        ptienda: "Explorá nuestras soluciones de tiendas online, diseñadas con precisión y personalización para satisfacer las necesidades únicas de cada cliente.",
        titleweb: "Sitios web",
        pweb: "Descubrí nuestros sitios web, construidos con dedicación y experiencia para ofrecer una presencia digital impactante y funcional.",
        titleapp: "Aplicaciones",
        papp: "Sumergite en nuestras aplicaciones, desarrolladas con un enfoque meticuloso en cada detalle para brindarte funcionalidades innovadoras y un rendimiento óptimo.",
    },
    en: {
        title: "Who We Are?.",
        description: "We are a development studio dedicated to cultivating smart ideas for startups and seasoned entrepreneurs. Our commitment is to satisfy and exceed the expectations of each client.",
        titletienda: "Online stores",
        ptienda: "Explore our online store solutions, designed with precision and customization to meet the unique needs of each customer.",
        titleweb: "Websites",
        pweb: "Discover our websites, built with dedication and experience to offer an impactful and functional digital presence.",
        titleapp: "Applications",
        papp: "Immerse yourself in our applications, developed with a meticulous focus on every detail to provide you with innovative functionalities and optimal performance.",
    }
}

// About Us Staff

const equipo = {
    es: {
        titlestaff: "Nuestro equipo",
        descriptionstaff: "Programador Full Stack",
        descriptionstaffdos: "Programador Full Stack"
    },
    en: {
        titlestaff: "Our Team",
        descriptionstaff: "Full Stack Programmer",
        descriptionstaffdos: "Full Stack Programmer"
    }
}

const aboutustitle = {
    es: {
        titleaboutus: "Sobre Nosotros.",
        textaboutus: "Nuestra estudio de desarrollado ha cumplido con cada una de las indicaciones de los clientes. Cultivamos ideas inteligentes para empresas emergentes y emprendedores experimentados.",
        misiontitle: "Misión",
        misiontext: "Guiados por la pasión por la innovación, nuestra misión es materializar las visiones de nuestros clientes mediante soluciones digitales inteligentes y estratégicas.",
        objetivostitle: "Objetivos",
        objetivostext: "Nuestros objetivos se centran en proporcionar resultados excepcionales a través de un enfoque colaborativo, fomentando la creatividad y la excelencia en cada proyecto.",
        nosotrostitle: "¿Por qué nosotros?",
        nosotrostext: "Elegirnos significa optar por un equipo comprometido con la excelencia y la entrega de soluciones a medida. Nos destacamos por nuestra capacidad para convertir desafíos en oportunidades y crear valor real para nuestros clientes."
    },
    en: {
        titleaboutus: "About Us.",
        textaboutus: "Our development studio has complied with each of the clients' indications. We cultivate smart ideas for startups and seasoned entrepreneurs.",
        misiontitle: "Mission",
        misiontext: "Guided by a passion for innovation, our mission is to realize our clients' visions through intelligent and strategic digital solutions.",
        objetivostitle: "Specific Objectives",
        objetivostext: "Our goals focus on providing exceptional results through a collaborative approach, fostering creativity and excellence in each project.",
        nosotrostitle: "Why We?",
        nosotrostext: "Choosing us means opting for a team committed to excellence and delivering tailored solutions. We stand out for our ability to turn challenges into opportunities and create real value for our clients."
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


/* ============ language ================ */


function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.getElementById('sobrenosotros').innerText = navbar[lang].sobrenosotros;
    document.getElementById('contacto').innerText = navbar[lang].contacto;
    document.getElementById('es').innerText = navbar[lang].es;
    document.getElementById('in').innerText = navbar[lang].in;
    document.getElementById('text1').innerText = banner[lang].text1;
    document.getElementById('text2').innerText = banner[lang].text2;
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
    document.getElementById('proyecto8').innerText = portfoliohome[lang].proyecto8;
    document.getElementById('proyecto9').innerText = portfoliohome[lang].proyecto9;
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
