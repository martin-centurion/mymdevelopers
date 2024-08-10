// Contenido en diferentes idiomas

// NavBar

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



// Home titulo

const titleContacto = {
    es: {
        titleC: "Hola! Contanos tu idea.",
        descriptionC: "No dudes en hacernos cualquier pregunta o contarnos de tu proyecto, podemos asesorarte sin cargo y sin compromiso.",
        spamC: "Contacto"
    },
    en: {
        titleC: "Hi! Tell us your idea.",
        descriptionC: "Do not hesitate to ask us any questions or tell us about your project, we can advise you free of charge and without obligation.",
        spamC: "Contact"
    }
}

const contactText = {
    es: {
        titleForm: "A solo un paso",
        buttomForm: "Envíar",
        titleForm2: "Info Contacto.",
        hablemos: "Hablemos",
        dondeEstamos: "Donde Estamos?."
    },
    en: {
        titleForm: "Just one step away",
        buttomForm: "Send",
        titleForm2: "Contact Info.",
        hablemos: "Let's talk",
        dondeEstamos: "Where we are?."
    }
}



/* ============ language ================ */


function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.getElementById('sobrenosotros').innerText = navbar[lang].sobrenosotros;
    document.getElementById('contacto').innerText = navbar[lang].contacto;
    document.getElementById('es').innerText = navbar[lang].es;
    document.getElementById('in').innerText = navbar[lang].in;
    document.getElementById('titleC').innerText = titleContacto[lang].titleC;
    document.getElementById('descriptionC').innerText = titleContacto[lang].descriptionC;
    document.getElementById('spamC').innerText = titleContacto[lang].spamC;
    document.getElementById('titleForm').innerText = contactText[lang].titleForm;
    document.getElementById('titleForm2').innerText = contactText[lang].titleForm2;
    document.getElementById('buttomForm').innerText = contactText[lang].buttomForm;
    document.getElementById('hablemos').innerText = contactText[lang].hablemos;
    document.getElementById('dondeEstamos').innerText = contactText[lang].dondeEstamos;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
