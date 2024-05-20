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
        text1: "Sobre Nosotros",
        text2: "Sobre Nosotros"
    },
    en: {
        text1: "About Us",
        text2: "About Us"
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
    document.getElementById('title').innerText = title1[lang].title;
    document.getElementById('description').innerText = title1[lang].description;
    document.getElementById('titletienda').innerText = title1[lang].titletienda;
    document.getElementById('ptienda').innerText = title1[lang].ptienda;
    document.getElementById('titleweb').innerText = title1[lang].titleweb;
    document.getElementById('pweb').innerText = title1[lang].pweb;
    document.getElementById('titleapp').innerText = title1[lang].titleapp;
    document.getElementById('papp').innerText = title1[lang].papp;
    document.getElementById('titlestaff').innerText = equipo[lang].titlestaff;
    document.getElementById('descriptionstaff').innerText = equipo[lang].descriptionstaff;
    document.getElementById('descriptionstaffdos').innerText = equipo[lang].descriptionstaffdos;
    document.getElementById('titleaboutus').innerText = aboutustitle[lang].titleaboutus;
    document.getElementById('textaboutus').innerText = aboutustitle[lang].textaboutus;
    document.getElementById('misiontitle').innerText = aboutustitle[lang].misiontitle;
    document.getElementById('misiontext').innerText = aboutustitle[lang].misiontext;
    document.getElementById('objetivostitle').innerText = aboutustitle[lang].objetivostitle;
    document.getElementById('objetivostext').innerText = aboutustitle[lang].objetivostext;
    document.getElementById('nosotrostitle').innerText = aboutustitle[lang].nosotrostitle;
    document.getElementById('nosotrostext').innerText = aboutustitle[lang].nosotrostext;
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
