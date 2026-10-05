# Web para negocio local (plantilla)

Web estática (HTML + CSS + JS, sin dependencias) lista para Vercel.

## Archivos
- `config.js` → **lo único que tienes que editar**: nombre, color, teléfono, servicios, precios, opiniones, FAQ, horario…
- `index.html`, `styles.css`, `script.js` → estructura, diseño y lógica.
- `img/` → mete aquí tu logo y fotos y enlázalas en `config.js`.
- `vercel.json` → configuración de Vercel.

## Adaptarla a un nicho
1. Abre `config.js` y cambia los textos y el `colorPrincipal`.
2. Pon `precios: []` u `opiniones: []` para ocultar esas secciones.
3. Sustituye las opiniones de ejemplo por reseñas reales de clientes.
4. Completa el aviso legal (en `index.html`, al final) con tu NIF/CIF.

## Formulario
Gratis con Formspree: crea un formulario en formspree.io y pega su ID en `formspreeId`.
Si lo dejas vacío, el formulario abre el email del visitante con el mensaje ya escrito.

## Subir a Vercel
**Opción A (sin código):** entra en vercel.com → Add New → Project → arrastra la carpeta.

**Opción B (GitHub):** sube la carpeta a un repositorio y en Vercel pulsa *Import*. Framework: **Other**, sin build command. Cada cambio que subas se publica solo.

**Opción C (terminal):**
```bash
npm i -g vercel
cd web-negocio-local
vercel --prod
```

## Probar en local
```bash
npx serve .
```
