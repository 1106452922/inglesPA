/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */

/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Soy estudiante de Ingeniería de Sistemas y Técnico en Programación Web en UniEspinal. Me apasiona el desarrollo full-stack, especialmente crear herramientas útiles con Laravel, PHP y bases de datos. Busco aplicar mis conocimientos en proyectos reales.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "San Luis, Tolima",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a proyectos",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "MITOLOGÍA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Ingeniería de Sistemas",
  "edu.1.text":  "Formación académica en desarrollo de software, bases de datos y arquitectura de sistemas computacionales.",
  "edu.2.title": "Técnico Profesional en Programación Web",
  "edu.2.text":  "Desarrollo de aplicaciones web y móviles utilizando metodologías ágiles, bases de datos y frameworks modernos.",

  "exp.1.title": "Desarrollador Full-Stack (Proyecto RutaSafe)",
  "exp.1.text":  "Desarrollé una plataforma web institucional con Laravel y PHP para el registro de rutas estáticas y reporte de incidentes.",
  "exp.2.title": "Desarrollador Backend",
  "exp.2.text":  "Configuré roles de autenticación, controladores CRUD y bases de datos usando Laravel y AdminLTE para un sistema de egresados.",

  "portfolio.title": "Proyectos",
  "project.1.title": "RutaSafe",
  "project.1.text":  "Laravel, PHP, MySQL",
  "project.2.title": "Sistema Egresados",
  "project.2.text":  "Laravel, AdminLTE",
  "project.3.title": "Robot Asistente",
  "project.3.text":  "MIT App Inventor, Sensores",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes un proyecto en mente o necesitas soporte técnico? Envíame un mensaje.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Perfil en Upwork",

  "footer.note": "Hector Manuel Barreto Chambueta · Técnico Profesional en Programación Web · UniEspinal"
};

/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am a Systems Engineering and Web Programming student at UniEspinal. Passionate about full-stack development, I build practical tools using Laravel, PHP, and databases. Currently seeking opportunities to apply my technical skills to real-world challenges.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "San Luis, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to projects",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "MYTHOLOGY",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Systems Engineering",
  "edu.1.text":  "Academic training in software development, databases, and computer systems architecture.",
  "edu.2.title": "Professional Technician in Web Programming",
  "edu.2.text":  "Building web and mobile applications using agile methodologies, databases, and modern frameworks.",

  "exp.1.title": "Full-Stack Developer (RutaSafe Project)",
  "exp.1.text":  "Built an institutional web platform using Laravel and PHP for static route registration and incident reporting.",
  "exp.2.title": "Backend Developer",
  "exp.2.text":  "Configured authentication roles, CRUD controllers, and databases using Laravel and AdminLTE for an alumni management system.",

  "portfolio.title": "Projects",
  "project.1.title": "RutaSafe",
  "project.1.text":  "Laravel, PHP, MySQL",
  "project.2.title": "Alumni System",
  "project.2.text":  "Laravel, AdminLTE",
  "project.3.title": "Assistant Robot",
  "project.3.text":  "MIT App Inventor, Sensors",

  "contact.title":         "Contact",
  "contact.intro":         "Do you have a project in mind or need technical support? Send me a message.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "Upwork Profile",

  "footer.note": "Hector Manuel Barreto Chambueta · Professional Tech in Web Programming · UniEspinal"
};

/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}

/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}

/* ============================================================
   5. SKILL BARS
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}

/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
