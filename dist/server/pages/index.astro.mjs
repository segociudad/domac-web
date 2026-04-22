import { f as createAstro, g as createComponent, j as renderHead, k as renderSlot, r as renderTemplate, l as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CIRhClpS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://domac-accesos.es");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Domac Accesos S.L. \u2014 Domotizaci\xF3n de accesos municipales" } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Domac Accesos S.L. — Soluciones de domotización, gestión de accesos y reservas para ayuntamientos y servicios públicos."><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/sego/domac-web/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<nav style="position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(10,10,10,0.85);backdrop-filter:blur(12px);border-bottom:1px solid #1a1a1a;"> <div style="max-width:1100px;margin:0 auto;padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:64px;"> <span style="font-size:20px;font-weight:900;letter-spacing:-0.5px;"> <span style="color:#f5c400;">DOMAC</span><span style="color:#f5f5f5;font-weight:400;"> Accesos</span> </span> <div style="display:flex;gap:2rem;font-size:14px;font-weight:500;color:#aaa;"> <a href="#servicios" style="transition:color 0.2s;" onmouseover="this.style.color='#f5c400'" onmouseout="this.style.color='#aaa'">Servicios</a> <a href="#como-funciona" style="transition:color 0.2s;" onmouseover="this.style.color='#f5c400'" onmouseout="this.style.color='#aaa'">Cómo funciona</a> <a href="#contacto" style="transition:color 0.2s;" onmouseover="this.style.color='#f5c400'" onmouseout="this.style.color='#aaa'">Contacto</a> </div> <a href="#contacto" style="background:#f5c400;color:#0a0a0a;padding:8px 18px;border-radius:8px;font-size:14px;font-weight:700;">
Pedir demo
</a> </div> </nav>  <section style="min-height:100vh;display:flex;align-items:center;padding:120px 2rem 80px;background:radial-gradient(ellipse at 60% 40%, rgba(245,196,0,0.08) 0%, transparent 60%), #0a0a0a;"> <div style="max-width:1100px;margin:0 auto;width:100%;"> <div style="display:inline-flex;align-items:center;gap:8px;background:#1a1a0a;border:1px solid #f5c40030;border-radius:20px;padding:6px 14px;font-size:12px;color:#f5c400;font-weight:600;margin-bottom:2rem;letter-spacing:0.05em;">
⚡ DOMOTIZACIÓN DE ACCESOS MUNICIPALES
</div> <h1 style="font-size:clamp(2.5rem,6vw,4.5rem);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:1.5rem;">
Abre puertas.<br> <span style="color:#f5c400;">Sin llaves.<br>Sin papeles.</span> </h1> <p style="font-size:clamp(1rem,2vw,1.2rem);color:#888;max-width:560px;line-height:1.7;margin-bottom:2.5rem;">
Soluciones de control de acceso inteligente para gimnasios, polideportivos, bibliotecas y servicios municipales. Gestionado desde la nube, sin obras complejas.
</p> <div style="display:flex;gap:1rem;flex-wrap:wrap;"> <a href="#contacto" style="background:#f5c400;color:#0a0a0a;padding:14px 28px;border-radius:10px;font-size:16px;font-weight:800;">
Solicitar demo gratuita →
</a> <a href="#como-funciona" style="background:transparent;color:#f5f5f5;padding:14px 28px;border-radius:10px;font-size:16px;font-weight:600;border:1px solid #333;">
Ver cómo funciona
</a> </div> <!-- Stats --> <div style="display:flex;gap:3rem;flex-wrap:wrap;margin-top:4rem;padding-top:2rem;border-top:1px solid #1a1a1a;"> ${[
    ["100%", "Sin llave f\xEDsica"],
    ["24/7", "Control remoto"],
    ["<1 d\xEDa", "Instalaci\xF3n"],
    ["RGPD", "Cumplimiento legal"]
  ].map(([n, l]) => renderTemplate`<div> <p style="font-size:1.8rem;font-weight:900;color:#f5c400;">${n}</p> <p style="font-size:13px;color:#666;margin-top:2px;">${l}</p> </div>`)} </div> </div> </section>  <section id="servicios" style="padding:100px 2rem;background:#080808;"> <div style="max-width:1100px;margin:0 auto;"> <p style="font-size:12px;font-weight:700;letter-spacing:0.15em;color:#f5c400;text-transform:uppercase;margin-bottom:1rem;">Servicios</p> <h2 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-1px;margin-bottom:1rem;">
Todo lo que necesita<br>un servicio público moderno
</h2> <p style="color:#666;max-width:520px;margin-bottom:4rem;font-size:15px;">
Desde la apertura de una puerta hasta la gestión completa de reservas y abonos. Una sola plataforma.
</p> <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr));gap:1.5px;background:#1a1a1a;border-radius:16px;overflow:hidden;"> ${[
    {
      icon: "\u{1F510}",
      title: "Control de acceso por PIN",
      desc: "Cada usuario recibe un PIN personal e intransferible. Sin tarjetas que perder, sin llaves que copiar."
    },
    {
      icon: "\u{1F4F1}",
      title: "Gesti\xF3n desde la nube",
      desc: "A\xF1ade, modifica o desactiva accesos en tiempo real desde cualquier dispositivo, sin desplazamientos."
    },
    {
      icon: "\u{1F3DB}\uFE0F",
      title: "Abonos municipales online",
      desc: "Los ciudadanos se abonan y pagan desde el m\xF3vil. El sistema asigna su PIN autom\xE1ticamente."
    },
    {
      icon: "\u{1F4C5}",
      title: "Sistema de reservas",
      desc: "Gesti\xF3n de turnos y franjas horarias para pistas, piscinas, salas y cualquier instalaci\xF3n p\xFAblica."
    },
    {
      icon: "\u{1F4CA}",
      title: "Informes de uso",
      desc: "Estad\xEDsticas de accesos, ocupaci\xF3n y usuarios activos para optimizar la gesti\xF3n municipal."
    },
    {
      icon: "\u{1F527}",
      title: "Instalaci\xF3n en menos de un d\xEDa",
      desc: "Hardware compatible con cierres existentes. Sin obras, sin cortes de servicio."
    }
  ].map((s) => renderTemplate`<div style="background:#0d0d0d;padding:2rem;"> <div style="font-size:2rem;margin-bottom:1rem;">${s.icon}</div> <h3 style="font-size:17px;font-weight:700;margin-bottom:0.5rem;">${s.title}</h3> <p style="font-size:14px;color:#666;line-height:1.6;">${s.desc}</p> </div>`)} </div> </div> </section>  <section id="como-funciona" style="padding:100px 2rem;background:#0a0a0a;"> <div style="max-width:1100px;margin:0 auto;"> <p style="font-size:12px;font-weight:700;letter-spacing:0.15em;color:#f5c400;text-transform:uppercase;margin-bottom:1rem;">Proceso</p> <h2 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-1px;margin-bottom:4rem;">
En marcha en 4 pasos
</h2> <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:2rem;"> ${[
    ["01", "An\xE1lisis", "Estudiamos vuestra instalaci\xF3n y necesidades. Sin compromiso."],
    ["02", "Instalaci\xF3n", "Montamos el hardware en menos de un d\xEDa. Sin obras."],
    ["03", "Configuraci\xF3n", "Subimos vuestra plataforma personalizada a la nube."],
    ["04", "En marcha", "Los ciudadanos ya pueden abonarse y acceder con su PIN."]
  ].map(([n, t, d]) => renderTemplate`<div style="position:relative;padding-left:1rem;border-left:2px solid #f5c40040;"> <p style="font-size:3rem;font-weight:900;color:#f5c40015;line-height:1;margin-bottom:0.5rem;">${n}</p> <h3 style="font-size:18px;font-weight:700;color:#f5c400;margin-bottom:0.5rem;">${t}</h3> <p style="font-size:14px;color:#666;line-height:1.6;">${d}</p> </div>`)} </div> </div> </section>  <section style="padding:80px 2rem;background:#080808;"> <div style="max-width:1100px;margin:0 auto;"> <p style="font-size:12px;font-weight:700;letter-spacing:0.15em;color:#f5c400;text-transform:uppercase;margin-bottom:1rem;">Clientes</p> <h2 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-1px;margin-bottom:3rem;">
Diseñado para<br>la administración pública
</h2> <div style="display:flex;flex-wrap:wrap;gap:1rem;"> ${["Ayuntamientos", "Diputaciones", "Gimnasios municipales", "Polideportivos", "Bibliotecas", "Piscinas p\xFAblicas", "Centros c\xEDvicos", "Pistas de p\xE1del"].map((t) => renderTemplate`<span style="background:#111;border:1px solid #222;padding:10px 18px;border-radius:8px;font-size:14px;color:#aaa;">${t}</span>`)} </div> </div> </section>  <section id="contacto" style="padding:100px 2rem;background:#0a0a0a;"> <div style="max-width:600px;margin:0 auto;text-align:center;"> <p style="font-size:12px;font-weight:700;letter-spacing:0.15em;color:#f5c400;text-transform:uppercase;margin-bottom:1rem;">Contacto</p> <h2 style="font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-1px;margin-bottom:1rem;">
Hablamos sin compromiso
</h2> <p style="color:#666;margin-bottom:3rem;font-size:15px;">
Cuéntanos tu instalación y te preparamos una propuesta a medida en 48 horas.
</p> <form id="form-contacto" style="display:flex;flex-direction:column;gap:1rem;text-align:left;"> <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;"> <div> <label style="font-size:13px;color:#888;display:block;margin-bottom:6px;">Nombre *</label> <input name="nombre" required type="text" placeholder="Tu nombre" style="width:100%;background:#111;border:1px solid #222;color:#f5f5f5;padding:12px 14px;border-radius:8px;font-size:14px;outline:none;"> </div> <div> <label style="font-size:13px;color:#888;display:block;margin-bottom:6px;">Organismo *</label> <input name="organismo" required type="text" placeholder="Ayuntamiento de..." style="width:100%;background:#111;border:1px solid #222;color:#f5f5f5;padding:12px 14px;border-radius:8px;font-size:14px;outline:none;"> </div> </div> <div> <label style="font-size:13px;color:#888;display:block;margin-bottom:6px;">Email *</label> <input name="email" required type="email" placeholder="tu@ayuntamiento.es" style="width:100%;background:#111;border:1px solid #222;color:#f5f5f5;padding:12px 14px;border-radius:8px;font-size:14px;outline:none;"> </div> <div> <label style="font-size:13px;color:#888;display:block;margin-bottom:6px;">Teléfono</label> <input name="telefono" type="tel" placeholder="600 000 000" style="width:100%;background:#111;border:1px solid #222;color:#f5f5f5;padding:12px 14px;border-radius:8px;font-size:14px;outline:none;"> </div> <div> <label style="font-size:13px;color:#888;display:block;margin-bottom:6px;">¿Qué necesitáis? *</label> <textarea name="mensaje" required rows="4" placeholder="Describid vuestra instalación y lo que buscáis..." style="width:100%;background:#111;border:1px solid #222;color:#f5f5f5;padding:12px 14px;border-radius:8px;font-size:14px;outline:none;resize:vertical;"></textarea> </div> <button type="submit" id="btn-submit" style="background:#f5c400;color:#0a0a0a;padding:14px;border-radius:10px;font-size:16px;font-weight:800;border:none;cursor:pointer;margin-top:0.5rem;">
Enviar mensaje →
</button> <p id="form-msg" style="text-align:center;font-size:14px;display:none;"></p> </form> </div> </section>  <footer style="border-top:1px solid #1a1a1a;padding:2rem;text-align:center;"> <p style="font-size:13px;color:#444;">
© 2026 <strong style="color:#f5c400;">Domac Accesos S.L.</strong> · Todos los derechos reservados
</p> </footer>  ` })}`;
}, "/home/sego/domac-web/src/pages/index.astro", void 0);

const $$file = "/home/sego/domac-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
