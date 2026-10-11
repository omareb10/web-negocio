/* Rellena la web con los datos de config.js. No hace falta tocar este archivo. */
(function () {
  const S = window.SITE || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (t = "") => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Iconos ---------- */
  const ICONS = {
    rayo: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    herramienta: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    estrella: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    escudo: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    reloj: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    casa: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    corazon: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    gota: '<path d="M12 2.7s-6.5 7.2-6.5 11.8a6.5 6.5 0 0 0 13 0C18.5 9.9 12 2.7 12 2.7z"/>',
    enchufe: '<path d="M9 2v6M15 2v6"/><path d="M6 8h12v4a6 6 0 0 1-12 0z"/><path d="M12 18v4"/>',
    copo: '<path d="M12 2v20M4.9 7l14.2 10M4.9 17 19.1 7"/><path d="m9 4 3 2 3-2M9 20l3-2 3 2"/>',
    llama: '<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-2 2-5 5-5 8a7 7 0 0 0 7 7z"/>',
    sol: '<rect x="3" y="11" width="18" height="10" rx="1"/><path d="M3 16h18M9 11v10M15 11v10"/><circle cx="12" cy="5" r="2"/><path d="M12 1v.5M7.5 3 8 3.5M16.5 3l-.5.5"/>',
    caja: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    tiktok: '<path d="M9 12a4 4 0 1 0 4 4V2c.5 2.5 2.5 4.5 5 5"/>',
    google: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ICONS.estrella}</svg>`;

  /* ---------- Color de marca y SEO ---------- */
  if (S.colorPrincipal) {
    document.documentElement.style.setProperty("--brand", S.colorPrincipal);
    $('meta[name="theme-color"]')?.setAttribute("content", S.colorPrincipal);
  }
  if (S.nombre) {
    document.title = `${S.nombre} | ${S.eslogan || ""}`.trim();
    $('meta[property="og:title"]')?.setAttribute("content", S.nombre);
  }
  if (S.descripcion) {
    $('meta[name="description"]')?.setAttribute("content", S.descripcion);
    $('meta[property="og:description"]')?.setAttribute("content", S.descripcion);
  }

  /* ---------- Textos simples ---------- */
  $$("[data-text]").forEach((el) => { el.textContent = S[el.dataset.text] ?? ""; });
  // Oculta datos de contacto que no se hayan rellenado (email, dirección…)
  ["email", "direccion"].forEach((k) => {
    if (!S[k]) $$(`[data-text="${k}"]`).forEach((el) => (el.closest("li") || el).remove());
  });
  $$("[data-hide-if-empty]").forEach((el) => { if (!S[el.dataset.hideIfEmpty]) el.remove(); });
  $$("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

  $$("[data-logo]").forEach((el) => {
    el.innerHTML = S.logoImagen ? `<img src="${esc(S.logoImagen)}" alt="${esc(S.nombre)}">` : esc(S.logoTexto || (S.nombre || "N")[0]);
  });

  /* ---------- Enlaces de contacto ---------- */
  const tel = (S.telefono || "").replace(/[^\d+]/g, "");
  const waMsg = encodeURIComponent(`Hola ${S.nombre || ""}, me gustaría pedir información.`);
  $$("[data-tel]").forEach((a) => (a.href = `tel:${tel}`));
  $$("[data-mail]").forEach((a) => (a.href = `mailto:${S.email}`));
  $$("[data-whatsapp]").forEach((a) => {
    if (S.whatsapp) a.href = `https://wa.me/${S.whatsapp}?text=${waMsg}`;
    else a.remove();
  });

  /* ---------- Imágenes ---------- */
  if (S.imagenHero) {
    const bg = $("[data-hero-bg]");
    bg.style.backgroundImage = `url("${S.imagenHero}")`;
    bg.classList.add("has-image");
  }

  /* ---------- Listas ---------- */
  const fill = (name, html) => { const el = $(`[data-list="${name}"]`); if (el) el.innerHTML = html; };
  const hideIfEmpty = (id, arr) => {
    if (!arr || !arr.length) {
      document.getElementById(id)?.remove();
      $$(`[data-section-link="${id}"]`).forEach((a) => a.remove());
      return true;
    }
  };

  fill("ventajas-mini", (S.ventajas || []).slice(0, 3).map((v) => `<li>${icon("check")}${esc(v)}</li>`).join(""));
  if (!(S.cifras || []).length) $(".stats")?.remove();
  fill("cifras", (S.cifras || []).map((c) => `<div class="stat"><strong>${esc(c.valor)}</strong><span>${esc(c.texto)}</span></div>`).join(""));
  fill("servicios", (S.servicios || []).map((s) => `
    <article class="card reveal">
      <div class="card__icon">${icon(s.icono)}</div>
      <h3>${esc(s.titulo)}</h3>
      <p>${esc(s.texto)}</p>
    </article>`).join(""));
  fill("servicios-select", ['<option value="">Selecciona una opción</option>']
    .concat((S.servicios || []).map((s) => `<option>${esc(s.titulo)}</option>`), "<option>Otro</option>").join(""));
  fill("ventajas", (S.ventajas || []).map((v) => `<li>${icon("check")}<span>${esc(v)}</span></li>`).join(""));
  fill("pasos", (S.pasos || []).map((p) => `<li class="step reveal"><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`).join(""));

  const c0 = (S.cifras || [])[0];
  if (c0) { $("[data-cifra='0']").textContent = c0.valor; $("[data-cifra-texto='0']").textContent = c0.texto; }
  else $(".media-card__badge")?.remove();
  if (S.imagenNosotros) {
    const m = $(".media-card"); m.style.backgroundImage = `url("${S.imagenNosotros}")`; m.classList.add("has-image");
  }

  if (!hideIfEmpty("precios", S.precios)) {
    fill("precios", S.precios.map((p) => `
      <div class="plan reveal ${p.destacado ? "plan--featured" : ""}">
        ${p.destacado ? '<span class="plan__tag">Más elegido</span>' : ""}
        <h3>${esc(p.nombre)}</h3>
        <div class="plan__price">${esc(p.precio)}</div>
        <ul>${(p.incluye || []).map((i) => `<li>${icon("check")}${esc(i)}</li>`).join("")}</ul>
        <a href="#contacto" class="btn ${p.destacado ? "btn--primary" : "btn--ghost-dark"} btn--block" style="${p.destacado ? "" : "border-color:var(--line);color:var(--ink)"}">Solicitar</a>
      </div>`).join(""));
  }

  if (!hideIfEmpty("opiniones", S.opiniones)) {
    fill("opiniones", S.opiniones.map((o) => `
      <figure class="review reveal" style="margin:0">
        <div class="stars" aria-label="${o.estrellas || 5} de 5 estrellas">${"★".repeat(o.estrellas || 5)}${"☆".repeat(5 - (o.estrellas || 5))}</div>
        <p>“${esc(o.texto)}”</p>
        <figcaption class="review__author"><span class="avatar">${esc((o.nombre || "?")[0])}</span><strong>${esc(o.nombre)}</strong></figcaption>
      </figure>`).join(""));
  }

  fill("faq", (S.faq || []).map((f, i) => `<details ${i === 0 ? "open" : ""}><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`).join(""));

  // Horario (resalta el día de hoy si coincide)
  const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const hoy = new Date().getDay();
  const esHoy = (txt) => {
    const t = txt.toLowerCase();
    const rango = t.split(/[–-]/).map((x) => dias.indexOf(x.trim()));
    if (rango.length === 2 && rango[0] >= 0 && rango[1] >= 0) {
      const [a, b] = rango; return a <= b ? hoy >= a && hoy <= b : hoy >= a || hoy <= b;
    }
    return t.includes(dias[hoy]);
  };
  fill("horario", (S.horario || []).map((h) => `<tr class="${esHoy(h.dias) ? "is-today" : ""}"><td>${esc(h.dias)}</td><td>${esc(h.horas)}</td></tr>`).join(""));

  // Mapa
  const map = $("[data-map]");
  if (S.googleMapsQuery && map) {
    map.innerHTML = `<iframe title="Mapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=${encodeURIComponent(S.googleMapsQuery)}&output=embed"></iframe>`;
  } else map?.remove();

  // Redes
  const soc = $("[data-socials]");
  if (soc) soc.innerHTML = Object.entries(S.redes || {}).filter(([, url]) => url)
    .map(([red, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${red}">${icon(red)}</a>`).join("");

  /* ---------- Datos estructurados (SEO local) ---------- */
  const ld = {
    "@context": "https://schema.org", "@type": ["Electrician", "Plumber"],
    name: S.nombre, description: S.descripcion, telephone: S.telefono, email: S.email || undefined,
    address: { "@type": "PostalAddress", streetAddress: S.direccion || undefined, addressLocality: S.ciudad, addressCountry: "ES" },
    areaServed: S.zona || S.ciudad,
    url: location.origin, sameAs: Object.values(S.redes || {}).filter(Boolean),
  };
  const sc = document.createElement("script"); sc.type = "application/ld+json"; sc.textContent = JSON.stringify(ld);
  document.head.appendChild(sc);

  /* ---------- Interacción ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 20);
  onScroll(); addEventListener("scroll", onScroll, { passive: true });

  const burger = document.getElementById("burger");
  const closeNav = () => { header.classList.remove("nav-open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("#nav a").forEach((a) => a.addEventListener("click", closeNav));

  const legal = document.getElementById("legal");
  $$("[data-open-legal]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); legal.showModal(); }));

  // Animaciones al hacer scroll
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- Formulario ---------- */
  const form = document.getElementById("form");
  const status = document.getElementById("form-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form__status"; status.textContent = "";
    let ok = true;
    $$("[required]", form).forEach((f) => {
      const bad = f.type === "checkbox" ? !f.checked : !f.value.trim();
      f.classList.toggle("is-invalid", bad); if (bad) ok = false;
    });
    if (!ok) { status.textContent = "Revisa los campos obligatorios."; status.classList.add("err"); return; }

    const data = Object.fromEntries(new FormData(form));
    if (S.formspreeId) {
      const btn = $("button[type=submit]", form); btn.disabled = true; btn.textContent = "Enviando...";
      try {
        const r = await fetch(`https://formspree.io/f/${S.formspreeId}`, {
          method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data),
        });
        if (!r.ok) throw new Error();
        form.reset(); status.textContent = "¡Gracias! Te responderemos muy pronto."; status.classList.add("ok");
      } catch {
        status.textContent = "No se pudo enviar. Llámanos o escríbenos por WhatsApp."; status.classList.add("err");
      } finally { btn.disabled = false; btn.textContent = "Enviar solicitud"; }
    } else {
      const body = `Nombre: ${data.nombre}\nTeléfono: ${data.telefono}\nEmail: ${data.email || "-"}\nServicio: ${data.servicio || "-"}\n\n${data.mensaje || ""}`;
      if (S.email) {
        location.href = `mailto:${S.email}?subject=${encodeURIComponent("Solicitud de presupuesto")}&body=${encodeURIComponent(body)}`;
        status.textContent = "Abriendo tu aplicación de correo...";
      } else {
        window.open(`https://wa.me/${S.whatsapp}?text=${encodeURIComponent("Hola, quiero pedir presupuesto.\n\n" + body)}`, "_blank", "noopener");
        status.textContent = "Abriendo WhatsApp con tu mensaje...";
      }
      status.classList.add("ok");
    }
  });
})();
