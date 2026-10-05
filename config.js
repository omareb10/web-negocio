/* =========================================================
   CONFIGURACIÓN DEL NEGOCIO
   Cambia SOLO este archivo para adaptar la web a cualquier
   nicho (electricista, peluquería, restaurante, gimnasio...).
   ========================================================= */
window.SITE = {
  // --- Identidad ---
  nombre: "Tu Negocio",
  eslogan: "Servicio profesional de confianza en tu ciudad",
  descripcion:
    "Más de 10 años ayudando a vecinos y empresas de la zona con un servicio rápido, honesto y garantizado.",
  ciudad: "Tu Ciudad",
  colorPrincipal: "#2563eb", // color de marca (botones, acentos)
  logoTexto: "TN",            // iniciales si no tienes logo
  logoImagen: "",             // ej: "img/logo.png" (deja vacío para usar logoTexto)
  imagenHero: "",             // ej: "img/hero.jpg" (deja vacío para fondo degradado)
  imagenNosotros: "",         // ej: "img/equipo.jpg" (foto de la sección "Por qué elegirnos")

  // --- Contacto ---
  telefono: "+34 600 000 000",
  whatsapp: "34600000000", // solo números, con prefijo de país
  email: "info@tunegocio.com",
  direccion: "Calle Mayor 1, 00000 Tu Ciudad",
  googleMapsQuery: "Plaza Mayor, Madrid", // lo que buscarías en Google Maps

  horario: [
    { dias: "Lunes – Viernes", horas: "9:00 – 20:00" },
    { dias: "Sábado", horas: "10:00 – 14:00" },
    { dias: "Domingo", horas: "Cerrado" },
  ],

  redes: {
    instagram: "https://instagram.com/",
    facebook: "",
    tiktok: "",
    google: "", // enlace a tu ficha de Google
  },

  // --- Formulario (gratis en https://formspree.io). Si lo dejas vacío, abre el email del cliente ---
  formspreeId: "",

  // --- Cifras de confianza ---
  cifras: [
    { valor: "10+", texto: "años de experiencia" },
    { valor: "1.500", texto: "clientes atendidos" },
    { valor: "4,9★", texto: "valoración media" },
    { valor: "24h", texto: "respuesta máxima" },
  ],

  // --- Servicios (icono: rayo, herramienta, estrella, escudo, reloj, casa, corazon, chat) ---
  servicios: [
    { icono: "estrella", titulo: "Servicio principal", texto: "Describe aquí tu servicio estrella y el problema que resuelve al cliente." },
    { icono: "herramienta", titulo: "Segundo servicio", texto: "Explica qué incluye, para quién es y por qué eres la mejor opción." },
    { icono: "reloj", titulo: "Urgencias", texto: "Atención rápida cuando más lo necesitas. Respuesta en menos de 24 horas." },
    { icono: "escudo", titulo: "Garantía", texto: "Todos nuestros trabajos tienen garantía por escrito. Sin sorpresas." },
    { icono: "casa", titulo: "A domicilio", texto: "Nos desplazamos a tu casa o negocio en toda la zona." },
    { icono: "chat", titulo: "Asesoramiento", texto: "Te aconsejamos sin compromiso para que elijas lo que de verdad necesitas." },
  ],

  // --- Por qué elegirnos ---
  ventajas: [
    "Presupuesto claro y sin compromiso",
    "Profesionales cualificados y con experiencia",
    "Puntualidad y trato cercano",
    "Precios justos y transparentes",
  ],

  // --- Cómo trabajamos ---
  pasos: [
    { titulo: "Contacta", texto: "Llámanos, escríbenos por WhatsApp o rellena el formulario." },
    { titulo: "Presupuesto", texto: "Te damos un presupuesto claro y cerrado en poco tiempo." },
    { titulo: "Lo hacemos", texto: "Realizamos el trabajo en la fecha acordada, con garantía." },
  ],

  // --- Precios (pon precios: [] para ocultar la sección) ---
  precios: [
    { nombre: "Básico", precio: "Desde 29€", destacado: false, incluye: ["Visita y diagnóstico", "Presupuesto sin compromiso", "Atención en horario laboral"] },
    { nombre: "Completo", precio: "Desde 79€", destacado: true, incluye: ["Todo lo del plan Básico", "Mano de obra incluida", "Garantía de 12 meses", "Prioridad de cita"] },
    { nombre: "Empresas", precio: "A medida", destacado: false, incluye: ["Mantenimiento periódico", "Factura mensual", "Contacto directo"] },
  ],

  // --- Opiniones: SUSTITUYE por reseñas reales de tus clientes (pon opiniones: [] para ocultar) ---
  opiniones: [
    { nombre: "Cliente 1", texto: "Aquí irá la opinión real de un cliente satisfecho.", estrellas: 5 },
    { nombre: "Cliente 2", texto: "Pega aquí una reseña de tu ficha de Google.", estrellas: 5 },
    { nombre: "Cliente 3", texto: "Las reseñas reales generan mucha más confianza.", estrellas: 5 },
  ],

  // --- Preguntas frecuentes ---
  faq: [
    { p: "¿En qué zonas trabajáis?", r: "Trabajamos en toda la ciudad y alrededores. Consúltanos si estás fuera de la zona." },
    { p: "¿El presupuesto tiene coste?", r: "No, el presupuesto es gratuito y sin compromiso." },
    { p: "¿Qué formas de pago aceptáis?", r: "Efectivo, tarjeta, Bizum y transferencia." },
    { p: "¿Tienen garantía los trabajos?", r: "Sí, todos nuestros trabajos incluyen garantía por escrito." },
  ],
};
