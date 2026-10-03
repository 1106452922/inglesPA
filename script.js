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
  "about.text":           "Hola, soy Héctor. Estudio Ingeniería de Sistemas y la técnica en Programación Web en UniEspinal. Me gusta mucho el backend con PHP y Laravel, pero también disfruto estructurar bases de datos limpias. Actualmente estoy buscando proyectos donde pueda poner a prueba lo que he aprendido.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "San Luis, Tolima",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (Nativo) · Inglés (B1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Buscando prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "JUEGOS",
  "interest.4": "MITOLOGÍA",

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
  "edu.1.text":  "Aprendizaje profundo sobre arquitectura de sistemas computacionales y desarrollo de software.",
  "edu.2.title": "Técnico Profesional en Programación Web",
  "edu.2.text":  "Creación de aplicaciones web usando frameworks modernos y bases de datos relacionales.",

  "exp.1.title": "Desarrollador Full-Stack (RutaSafe)",
  "exp.1.text":  "Desarrollé el backend y la base de datos de una plataforma web para registrar rutas estáticas estudiantiles.",
  "exp.2.title": "Desarrollador Backend",
  "exp.2.text":  "Implementé roles de seguridad y controladores CRUD para un sistema de gestión de egresados.",

  "portfolio.title": "Proyectos",
  "project.1.title": "RutaSafe",
  "project.1.text":  "PHP, Laravel, MySQL",
  "project.2.title": "Gestor Egresados",
  "project.2.text":  "Laravel, AdminLTE",
  "project.3.title": "App Asistente",
  "project.3.text":  "MIT App Inventor",

  "contact.title":         "Contacto",
  "contact.intro":         "Si tienes alguna idea en mente o necesitas apoyo técnico, contáctame por aquí.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Cuenta en Upwork",

  "footer.note": "Héctor Barreto · Programación Web · UniEspinal"
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
  "about.text":           "Hi, I'm Héctor. I study Systems Engineering and Web Programming at UniEspinal. I really enjoy backend development with PHP and Laravel, and designing clean databases. I am currently looking for projects where I can test my skills.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "San Luis, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (Native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Looking for internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "GAMING",
  "interest.4": "MYTHOLOGY",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and Experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Systems Engineering",
  "edu.1.text":  "Deep learning about computer systems architecture and software development.",
  "edu.2.title": "Professional Technician in Web Programming",
  "edu.2.text":  "Building web applications using modern frameworks and relational databases.",

  "exp.1.title": "Full-Stack Developer (RutaSafe)",
  "exp.1.text":  "Developed the backend and database for a web platform to register static student routes.",
  "exp.2.title": "Backend Developer",
  "exp.2.text":  "Implemented security roles and CRUD controllers for an alumni management system.",

  "portfolio.title": "Projects",
  "project.1.title": "RutaSafe",
  "project.1.text":  "PHP, Laravel, MySQL",
  "project.2.title": "Alumni Manager",
  "project.2.text":  "Laravel, AdminLTE",
  "project.3.title": "Assistant App",
  "project.3.text":  "MIT App Inventor",

  "contact.title":         "Contact",
  "contact.intro":         "If you have an idea in mind or need technical support, contact me here.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "Upwork Account",

  "footer.note": "Héctor Barreto · Web Programming · UniEspinal"
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
