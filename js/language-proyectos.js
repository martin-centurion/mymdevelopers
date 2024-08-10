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

    const anabauer = {
        es: {
            titleAnaBauer: "Sitio web.",
            descAnaBauer: "Ana Bauer | Fotógrafa & Filmmaker.",
            introduccion: "Introducción",
            textAB: "Diseñamos y desarrollamos un sitio web dedicado exclusivamente a destacar el trabajo de nuestra cliente a través de imágenes impactantes. Desde el momento en que se carga la página, las imágenes toman el centro del escenario, ocupando la mayor parte de la pantalla y capturando la atención del espectador de inmediato. Con una disposición que prioriza la visualización de los proyectos, nuestro objetivo fue ofrecer la máxima exposición a la obra de nuestra cliente. Este portfolio online es mucho más que un sitio web: es una galería interactiva que permite a los visitantes sumergirse en el talento y la creatividad de nuestra cliente de manera impactante y memorable.",
            clienteAB: "Cliente",
            fechaAB: "Fecha",
            fechaAB2: "Octubre 2023",
            categoriaAB: "Categoría",
            categoriaAB2: "Sitio Web, React Js & JavaScript",
            tagsAB: "Diseño, Minimalista, Moderno",
            herramientasAB: "Herramientas.",
            herramientasText: "Nuestro sitio web fue creada utilizando tecnologías de vanguardia como React y JavaScript. Con estas potentes herramientas, pudimos ofrecer una experiencia de usuario dinámica y receptiva. React Js nos permitió construir interfaces de usuario interactivas y escalables, mientras que JavaScript añadió funcionalidades personalizadas y un rendimiento óptimo. Además, todo el bocetado y diseño inicial se llevó a cabo en Figma, permitiéndonos visualizar y planificar cada detalle antes de comenzar el desarrollo.",
            siguienteProyecto: "Siguiente Proyecto"
        },
        en: {
            titleAnaBauer: "Web Design.",
            descAnaBauer: "Ana Bauer | Photographer & Filmmaker.",
            introduccion: "Introduction",
            textAB: "We designed and developed a website dedicated exclusively to highlighting our client's work through striking images. From the moment the page loads, the images take center stage, taking up most of the screen and immediately capturing the viewer's attention. With a layout that prioritizes the visualization of the projects, our objective was to offer maximum exposure to our client's work. This online portfolio is much more than a website: it is an interactive gallery that allows visitors to immerse themselves in our client's talent and creativity in an impactful and memorable way.",
            clienteAB: "Client",
            fechaAB: "Date",
            fechaAB2: "October 2023",
            categoriaAB: "Category",
            categoriaAB2: "Web Design, React Js & JavaScript",
            tagsAB: "Web Design, Minimalist, Modern",
            herramientasAB: "Tools.",
            herramientasText: "Our website was created using cutting-edge technologies such as React and JavaScript. With these powerful tools, we were able to deliver a dynamic and responsive user experience. React Js allowed us to build interactive and scalable user interfaces, while JavaScript added custom functionality and optimal performance. Additionally, all initial sketching and design was carried out in Figma, allowing us to visualize and plan every detail before beginning development.",
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
    document.getElementById('titleAnaBauer').innerText = anabauer[lang].titleAnaBauer;
    document.getElementById('descAnaBauer').innerText = anabauer[lang].descAnaBauer;
    document.getElementById('introduccion').innerText = anabauer[lang].introduccion;
    document.getElementById('textAB').innerText = anabauer[lang].textAB;
    document.getElementById('clienteAB').innerText = anabauer[lang].clienteAB;
    document.getElementById('fechaAB').innerText = anabauer[lang].fechaAB;
    document.getElementById('fechaAB2').innerText = anabauer[lang].fechaAB2;
    document.getElementById('categoriaAB').innerText = anabauer[lang].categoriaAB;
    document.getElementById('categoriaAB2').innerText = anabauer[lang].categoriaAB2;
    document.getElementById('tagsAB').innerText = anabauer[lang].tagsAB;
    document.getElementById('herramientasAB').innerText = anabauer[lang].herramientasAB;
    document.getElementById('herramientasText').innerText = anabauer[lang].herramientasText;
    document.getElementById('siguienteProyecto').innerText = anabauer[lang].siguienteProyecto;
}

// Inicializa el contenido con la preferencia del usuario o en español por defecto
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
changeLanguage(preferredLanguage)
