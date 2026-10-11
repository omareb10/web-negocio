/* =========================================================
   CONFIGURACIÓN DEL NEGOCIO
   Cambia SOLO este archivo. Todo lo marcado con "PENDIENTE"
   hay que rellenarlo con los datos reales antes de publicar.
   ========================================================= */
window.SITE = {
  // --- Identidad ---
  nombre: "Instalaciones PENDIENTE",            // PENDIENTE: nombre real de la empresa
  eslogan: "Electricista y fontanero de confianza en PENDIENTE",
  descripcion:
    "Instalaciones, reparaciones y averías de electricidad y fontanería para casas, comunidades y negocios. Presupuesto sin compromiso y trato directo con el profesional.",
  ciudad: "PENDIENTE",                           // PENDIENTE: pueblo/ciudad principal
  zona: "PENDIENTE y alrededores",               // PENDIENTE: zona que cubre
  colorPrincipal: "#0b5cad",
  logoTexto: "IP",                               // PENDIENTE: iniciales del nombre
  logoImagen: "",                                // ej: "img/logo.png"
  imagenHero: "",                                // ej: "img/hero.jpg"
  imagenNosotros: "",                            // ej: "img/furgoneta.jpg"

  // --- Contacto ---
  telefono: "+34 600 000 000",                   // PENDIENTE
  whatsapp: "34600000000",                       // PENDIENTE: solo números, con 34 delante
  email: "",                                     // PENDIENTE (si no tiene, déjalo vacío)
  direccion: "",                                 // opcional: si trabaja a domicilio, puede dejarse vacío
  googleMapsQuery: "",                           // PENDIENTE: ej. "Amposta, Tarragona" (muestra la zona en el mapa)

  horario: [                                     // PENDIENTE: horario real
    { dias: "Lunes – Viernes", horas: "8:00 – 19:00" },
    { dias: "Sábado", horas: "Solo urgencias" },
    { dias: "Domingo", horas: "Cerrado" },
  ],

  redes: {
    instagram: "",
    facebook: "",
    tiktok: "",
    google: "", // enlace a la ficha de Google cuando esté creada
  },

  // --- Formulario (gratis en https://formspree.io). Vacío = abre el email del cliente ---
  formspreeId: "",

  // --- Cifras de confianza: SOLO datos reales (pon cifras: [] para ocultar la franja) ---
  cifras: [
    { valor: "PENDIENTE", texto: "años de experiencia" },
    { valor: "Luz + agua", texto: "un solo profesional para todo" },
    { valor: "Gratis", texto: "presupuesto sin compromiso" },
  ],

  // --- Servicios (iconos: rayo, enchufe, gota, herramienta, escudo, reloj, casa, chat, estrella, corazon) ---
  servicios: [
    { icono: "rayo", titulo: "Instalaciones eléctricas", texto: "Instalaciones nuevas y reformas en viviendas, locales y naves. Cuadros eléctricos, cableado, enchufes e iluminación." },
    { icono: "enchufe", titulo: "Averías eléctricas", texto: "Saltan los plomos, enchufes que no funcionan, cortocircuitos… Localizamos el fallo y lo dejamos resuelto." },
    { icono: "gota", titulo: "Fontanería", texto: "Fugas, atascos, grifos, cisternas, cambio de tuberías e instalación de sanitarios." },
    { icono: "herramienta", titulo: "Reformas de baño y cocina", texto: "Toda la parte de agua y electricidad de tu reforma, coordinada por un solo profesional." },
    { icono: "casa", titulo: "Termos y calentadores", texto: "Instalación, sustitución y reparación de termos eléctricos y calentadores." },
    { icono: "reloj", titulo: "Urgencias", texto: "Si tienes una fuga o te has quedado sin luz, llámanos y te decimos cuándo podemos ir." },
  ],

  // --- Por qué elegirnos ---
  ventajas: [
    "Electricidad y fontanería con el mismo profesional",
    "Presupuesto claro antes de empezar",
    "Trato directo, sin intermediarios",
    "Trabajo limpio y puntual",
  ],

  // --- Cómo trabajamos ---
  pasos: [
    { titulo: "Llámanos", texto: "Por teléfono, WhatsApp o con el formulario. Cuéntanos qué pasa y, si puedes, envía una foto." },
    { titulo: "Presupuesto", texto: "Vamos a verlo o te damos precio directamente si es algo sencillo. Sin compromiso." },
    { titulo: "Trabajo hecho", texto: "Hacemos el trabajo el día acordado y lo dejamos todo funcionando y recogido." },
  ],

  // --- Precios: vacío = sección oculta (cada trabajo se presupuesta) ---
  precios: [],

  // --- Opiniones: SOLO reseñas reales de clientes (vacío = sección oculta) ---
  opiniones: [],

  // --- Preguntas frecuentes ---
  faq: [
    { p: "¿En qué zonas trabajáis?", r: "Trabajamos en PENDIENTE y alrededores. Si estás algo más lejos, llámanos y lo miramos." },
    { p: "¿El presupuesto cuesta algo?", r: "No, el presupuesto es gratuito y sin compromiso." },
    { p: "¿Hacéis trabajos pequeños?", r: "Sí. Desde cambiar un enchufe o un grifo hasta una instalación completa." },
    { p: "¿Atendéis urgencias?", r: "Sí. Llámanos directamente y te decimos cuándo podemos ir." },
    { p: "¿Qué formas de pago aceptáis?", r: "PENDIENTE: efectivo, Bizum, transferencia…" },
  ],
};
