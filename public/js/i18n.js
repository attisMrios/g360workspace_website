(function () {
  const STORAGE_KEY = "g360_lang";

  const dict = {
    es: {
      "meta.title": "G360co | G360 Workspace 4.0 — ERP con contabilidad al centro",
      "meta.description":
        "G360 Workspace 4.0 by G360co: ERP web con contabilidad colombiana, cartera, presupuesto, CRM, WhatsApp, app de residentes G360ph y vertical de propiedad horizontal. Solicita una demo.",
      "a11y.skip": "Saltar al contenido",
      "a11y.brand": "G360co — Inicio",
      "a11y.footer": "Pie de página",
      "a11y.lang": "Idioma",
      "nav.menu": "Menú",
      "nav.modules": "Módulos",
      "nav.accounting": "Contabilidad",
      "nav.ph": "Propiedad horizontal",
      "nav.comms": "Comunicación",
      "nav.app": "App residentes",
      "nav.contact": "Contacto",
      "nav.demo": "Solicitar demo",
      "nav.privacy": "Privacidad",
      "hero.kicker": "G360 Workspace 4.0 · by G360co",
      "hero.title": "Un ERP con la contabilidad al centro <em>y la operación en el mismo lugar</em>",
      "hero.lead":
        "Facturación, cartera, presupuesto y estados financieros integrados con CRM, WhatsApp, actividades y —cuando aplica— el vertical nativo de propiedad horizontal con app de residentes.",
      "hero.cta.demo": "Solicitar demo",
      "hero.cta.modules": "Ver módulos",
      "hero.pill.niif": "Contabilidad NIIF / Colombia",
      "hero.pill.cxc": "CXC / CXP",
      "hero.pill.wa": "WhatsApp Business",
      "hero.pill.app": "App iOS y Android",
      "hero.pill.ph": "Propiedad horizontal",
      "hero.panel.title": "Qué unifica G360 Workspace",
      "hero.kpi.ar": "Cartera CXC",
      "hero.kpi.collect": "Recaudo mes",
      "hero.kpi.docs": "Docs hoy",
      "hero.row1": "Núcleo contable: facturación periódica, recibos, egresos, CXC/CXP y reportes.",
      "hero.row2": "Comunicación oficial: bandeja WhatsApp y correo masivo sin bloqueos de Gmail u Outlook.",
      "hero.row3": "Operación: actividades, presupuestos, cuadros de mando e IA asistida.",
      "hero.row4": "Vertical PH + G360ph: unidades, reservas, cartera y residentes sobre el mismo dato.",
      "stats.erp.title": "ERP web",
      "stats.erp.desc": "Administración y gerencia con permisos por perfil.",
      "stats.acc.title": "Contabilidad",
      "stats.acc.desc": "Colombia: PUC, DIAN, UVT, retenciones, exógena.",
      "stats.app.title": "App residentes",
      "stats.app.desc": "Autogestión del residente para aliviar la carga de la administración.",
      "stats.multi.title": "Multiempresa",
      "stats.multi.desc": "Varios NITs / sociedades en un mismo Workspace.",
      "value.kicker": "Propuesta de valor",
      "value.title": "Finanzas, comunicación y operación en el mismo sistema",
      "value.copy":
        "Menos Excel, menos chats personales y más trazabilidad. Un solo dato para quien administra, quien contabiliza y quien consulta desde la app.",
      "value.1.title": "Contabilidad como núcleo del ERP",
      "value.1.desc":
        "Facturas de venta y compra, facturación periódica, recibos de caja, egresos, CXC/CXP, presupuesto y estados financieros. Catálogos fiscales colombianos: UVT, retenciones, exógena, resoluciones, prefijos y códigos DANE.",
      "value.2.title": "Cartera visible",
      "value.2.desc": "Importa, revisa y cobra. El tercero o residente consulta su saldo en la app, sin pedir extractos por chat.",
      "value.3.title": "Canal oficial",
      "value.3.desc":
        "WhatsApp por organización y correo masivo con evidencia. Opt-in/opt-out auditable: sin consentimiento válido no se envía.",
      "value.4.title": "CRM y PQRs",
      "value.4.desc": "Terceros, campañas, avisos y atención con historial en el ERP, no en el celular de una persona.",
      "value.5.title": "Actividades e IA",
      "value.5.desc": "Flujos de trabajo, tiempos, cuadros de mando, Consultas IA y asistente con datos reales según permisos.",
      "eco.kicker": "Ecosistema",
      "eco.title": "Explora cada pilar del producto",
      "eco.copy": "Páginas dedicadas para que gerencia, contabilidad y operación entiendan el alcance sin ambigüedades.",
      "eco.mod.title": "Módulos del ERP",
      "eco.mod.desc":
        "Mapa completo: CRM, vehículos, novedades, PH, tableros, actividades, presupuestos, contable, auditoría y configuración.",
      "eco.mod.cta": "Ver características",
      "eco.acc.title": "Contabilidad y presupuesto",
      "eco.acc.desc": "El núcleo financiero: facturación periódica, CXC/CXP, reportes y ejecución presupuestal.",
      "eco.acc.cta": "Ver contabilidad",
      "eco.ph.title": "Propiedad horizontal",
      "eco.ph.desc": "Vertical nativo: unidades, zonas sociales, cobro PH, app residentes y operación en sitio.",
      "eco.ph.cta": "Ver vertical PH",
      "eco.com.title": "Comunicación",
      "eco.com.desc": "WhatsApp, correo masivo, campañas, cumplimiento opt-in y reportes de envío.",
      "eco.com.cta": "Ver comunicación",
      "eco.app.title": "App G360ph",
      "eco.app.desc":
        "Autogestión: censo, reservas, visitas, paquetería, deuda y avisos. Menos tickets para la administración.",
      "eco.app.cta": "Ver app residentes",
      "eco.multi.title": "Multiempresa",
      "eco.multi.desc": "Varias sociedades o NITs en un Workspace: selector de empresa, datos aislados y cupo comercial.",
      "eco.multi.cta": "Ver multiempresa",
      "clear.kicker": "Claridad comercial",
      "clear.title": "Qué sí es — y qué no",
      "clear.th.include": "Incluye",
      "clear.th.note": "Aclaración",
      "clear.r1a": "ERP + comunicaciones + operación + vertical PH + app residentes",
      "clear.r1b": "No es solo “app de residentes” ni solo contabilidad suelta.",
      "clear.r2a": "Dos capas de cobro: facturación/CXC y cartera PH con WhatsApp",
      "clear.r2b": "La cartera PH no sustituye la contabilidad; conviven.",
      "clear.r3a": "IA asistida y Consultas IA con datos reales según permisos",
      "clear.r3b": "No inventa saldos ni reemplaza al contador.",
      "clear.r4a": "Multiempresa multi-NIT en un Workspace",
      "clear.r4b": "No son varios servidores; la app se ancla a la sociedad principal.",
      "clear.r5a": "Avisos, WhatsApp y comunicados",
      "clear.r5b": "No hay módulo de asambleas, quórum ni votaciones.",
      "contact.kicker": "Hablemos",
      "contact.title": "Solicita una demo de G360 Workspace 4.0",
      "contact.lead":
        "Te mostramos contabilidad, cobro, comunicación y —si aplica— propiedad horizontal y app de residentes en la misma sesión.",
      "contact.li1": "✓ Diagnóstico rápido de oportunidades",
      "contact.li2": "✓ Demo guiada por especialista",
      "contact.li3": "✓ Ruta de implementación y adopción",
      "contact.company": "Empresa:",
      "form.name": "Nombre completo",
      "form.email": "Correo electrónico",
      "form.phone": "Teléfono (opcional)",
      "form.company": "Organización",
      "form.interest": "¿Qué quieres ver en la demo?",
      "form.message": "Cuéntanos tu operación",
      "form.submit": "Enviar solicitud",
      "form.opt.erp": "ERP completo",
      "form.opt.acc": "Contabilidad y presupuesto",
      "form.opt.ar": "Cartera y cobro",
      "form.opt.wa": "WhatsApp y correo",
      "form.opt.ph": "Propiedad horizontal y app de residentes",
      "form.opt.ops": "Actividades y operación",
      "form.ok.title": "Solicitud enviada",
      "form.ok.text": "Gracias. Te contactaremos para agendar una demo de G360 Workspace.",
      "form.err.title": "No se pudo enviar",
      "form.err.text": "Intenta de nuevo en unos minutos.",
      "form.sending": "Enviando...",
      "footer.copy":
        "© 2026 G360co S.A.S. Todos los derechos reservados.<br>G360 Workspace 4.0 · ERP para administración, finanzas y operación.",
    },
    en: {
      "meta.title": "G360co | G360 Workspace 4.0 — ERP with accounting at the core",
      "meta.description":
        "G360 Workspace 4.0 by G360co: web ERP with Colombian accounting, A/R, budgeting, CRM, WhatsApp, resident app G360ph and horizontal property vertical. Request a demo.",
      "a11y.skip": "Skip to content",
      "a11y.brand": "G360co — Home",
      "a11y.footer": "Footer",
      "a11y.lang": "Language",
      "nav.menu": "Menu",
      "nav.modules": "Modules",
      "nav.accounting": "Accounting",
      "nav.ph": "Horizontal property",
      "nav.comms": "Communications",
      "nav.app": "Resident app",
      "nav.contact": "Contact",
      "nav.demo": "Request demo",
      "nav.privacy": "Privacy",
      "hero.kicker": "G360 Workspace 4.0 · by G360co",
      "hero.title": "An ERP with accounting at the center <em>and operations in the same place</em>",
      "hero.lead":
        "Billing, collections, budgeting and financial statements integrated with CRM, WhatsApp, activities and —when it applies— the native horizontal-property vertical with a resident app.",
      "hero.cta.demo": "Request demo",
      "hero.cta.modules": "View modules",
      "hero.pill.niif": "IFRS / Colombia accounting",
      "hero.pill.cxc": "A/R · A/P",
      "hero.pill.wa": "WhatsApp Business",
      "hero.pill.app": "iOS & Android app",
      "hero.pill.ph": "Horizontal property",
      "hero.panel.title": "What G360 Workspace unifies",
      "hero.kpi.ar": "A/R balance",
      "hero.kpi.collect": "Month collection",
      "hero.kpi.docs": "Docs today",
      "hero.row1": "Accounting core: recurring billing, receipts, disbursements, A/R·A/P and reports.",
      "hero.row2": "Official channels: WhatsApp inbox and bulk email without Gmail/Outlook blocks.",
      "hero.row3": "Operations: activities, budgets, dashboards and assisted AI.",
      "hero.row4": "PH vertical + G360ph: units, amenities, collections and residents on the same data.",
      "stats.erp.title": "Web ERP",
      "stats.erp.desc": "Admin and management with role-based permissions.",
      "stats.acc.title": "Accounting",
      "stats.acc.desc": "Colombia: chart of accounts, DIAN, UVT, withholdings, exogenous.",
      "stats.app.title": "Resident app",
      "stats.app.desc": "Resident self-service that lightens the load for administrators.",
      "stats.multi.title": "Multi-company",
      "stats.multi.desc": "Multiple tax IDs / companies in one Workspace.",
      "value.kicker": "Value proposition",
      "value.title": "Finance, communications and operations in one system",
      "value.copy":
        "Less Excel, fewer personal chats and more traceability. One source of truth for admins, accountants and app users.",
      "value.1.title": "Accounting as the ERP core",
      "value.1.desc":
        "Sales and purchase invoices, recurring billing, cash receipts, disbursements, A/R·A/P, budgeting and financial statements. Colombian tax catalogs: UVT, withholdings, exogenous, resolutions, prefixes and DANE codes.",
      "value.2.title": "Visible receivables",
      "value.2.desc": "Import, review and collect. Third parties or residents check balances in the app—no extract requests over chat.",
      "value.3.title": "Official channel",
      "value.3.desc":
        "Organization WhatsApp and bulk email with proof of send. Auditable opt-in/opt-out: no valid consent, no send.",
      "value.4.title": "CRM & tickets",
      "value.4.desc": "Parties, campaigns, notices and support with history in the ERP—not on someone’s phone.",
      "value.5.title": "Activities & AI",
      "value.5.desc": "Workflows, time tracking, dashboards, AI queries and an assistant on real data by permission.",
      "eco.kicker": "Ecosystem",
      "eco.title": "Explore every product pillar",
      "eco.copy": "Dedicated pages so management, accounting and operations understand the scope clearly.",
      "eco.mod.title": "ERP modules",
      "eco.mod.desc":
        "Full map: CRM, vehicles, incidents, PH, dashboards, activities, budgets, accounting, audit and setup.",
      "eco.mod.cta": "View features",
      "eco.acc.title": "Accounting & budgeting",
      "eco.acc.desc": "Financial core: recurring billing, A/R·A/P, reports and budget execution.",
      "eco.acc.cta": "View accounting",
      "eco.ph.title": "Horizontal property",
      "eco.ph.desc": "Native vertical: units, amenities, PH collections, resident app and on-site ops.",
      "eco.ph.cta": "View PH vertical",
      "eco.com.title": "Communications",
      "eco.com.desc": "WhatsApp, bulk email, campaigns, opt-in compliance and delivery reports.",
      "eco.com.cta": "View communications",
      "eco.app.title": "G360ph app",
      "eco.app.desc":
        "Self-service: census, bookings, visitors, parcels, balances and notices. Fewer tickets for admin teams.",
      "eco.app.cta": "View resident app",
      "eco.multi.title": "Multi-company",
      "eco.multi.desc": "Multiple companies or tax IDs in one Workspace: company picker, isolated data and commercial seats.",
      "eco.multi.cta": "View multi-company",
      "clear.kicker": "Commercial clarity",
      "clear.title": "What it is — and what it isn’t",
      "clear.th.include": "Includes",
      "clear.th.note": "Clarification",
      "clear.r1a": "ERP + communications + operations + PH vertical + resident app",
      "clear.r1b": "Not just a “resident app” or standalone accounting.",
      "clear.r2a": "Two collection layers: billing/A/R and PH collections via WhatsApp",
      "clear.r2b": "PH collections don’t replace formal accounting; they coexist.",
      "clear.r3a": "Assisted AI and AI queries on real data by permission",
      "clear.r3b": "It doesn’t invent balances or replace the accountant.",
      "clear.r4a": "Multi-company multi-tax-ID in one Workspace",
      "clear.r4b": "Not multiple servers; the app anchors to the group’s primary company.",
      "clear.r5a": "Notices, WhatsApp and circulars",
      "clear.r5b": "No assemblies, quorum or voting module.",
      "contact.kicker": "Let’s talk",
      "contact.title": "Request a G360 Workspace 4.0 demo",
      "contact.lead":
        "We’ll show accounting, collections, communications and —if it applies— horizontal property and the resident app in one session.",
      "contact.li1": "✓ Quick opportunity diagnosis",
      "contact.li2": "✓ Specialist-led demo",
      "contact.li3": "✓ Implementation and adoption path",
      "contact.company": "Company:",
      "form.name": "Full name",
      "form.email": "Email",
      "form.phone": "Phone (optional)",
      "form.company": "Organization",
      "form.interest": "What do you want to see in the demo?",
      "form.message": "Tell us about your operation",
      "form.submit": "Send request",
      "form.opt.erp": "Full ERP",
      "form.opt.acc": "Accounting & budgeting",
      "form.opt.ar": "Collections",
      "form.opt.wa": "WhatsApp & email",
      "form.opt.ph": "Horizontal property & resident app",
      "form.opt.ops": "Activities & operations",
      "form.ok.title": "Request sent",
      "form.ok.text": "Thanks. We’ll contact you to schedule a G360 Workspace demo.",
      "form.err.title": "Couldn’t send",
      "form.err.text": "Please try again in a few minutes.",
      "form.sending": "Sending...",
      "footer.copy":
        "© 2026 G360co S.A.S. All rights reserved.<br>G360 Workspace 4.0 · ERP for administration, finance and operations.",
    },
  };

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (_) {}

    const list = [];
    if (navigator.languages && navigator.languages.length) {
      Array.prototype.push.apply(list, navigator.languages);
    }
    if (navigator.language) list.push(navigator.language);

    for (let i = 0; i < list.length; i++) {
      const code = String(list[i] || "").toLowerCase();
      if (code.indexOf("en") === 0) return "en";
      if (code.indexOf("es") === 0) return "es";
    }

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (
        /America\/(Bogota|Mexico_City|Lima|Buenos_Aires|Santiago|Caracas|Guayaquil|La_Paz|Asuncion|Montevideo|Panama|Costa_Rica|Guatemala|Havana|Puerto_Rico)/i.test(
          tz
        )
      ) {
        return "es";
      }
      if (/^(America\/(New_York|Chicago|Denver|Los_Angeles|Toronto)|Europe\/London|Europe\/Dublin|Australia\/)/i.test(tz)) {
        return "en";
      }
    } catch (_) {}

    return "es";
  }

  function t(lang, key) {
    const pack = dict[lang] || dict.es;
    return Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : (dict.es[key] || key);
  }

  function apply(lang) {
    const html = document.documentElement;
    html.lang = lang === "en" ? "en" : "es-CO";
    html.setAttribute("data-lang", lang);

    const title = t(lang, "meta.title");
    if (title) document.title = title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(lang, "meta.description"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(lang, key));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      el.setAttribute("placeholder", t(lang, key));
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      const active = btn.getAttribute("data-set-lang") === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("is-active", active);
    });

    window.__g360Lang = lang;
    document.dispatchEvent(new CustomEvent("g360:lang", { detail: { lang: lang } }));
  }

  function setLang(lang, persist) {
    if (lang !== "es" && lang !== "en") return;
    if (persist !== false) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (_) {}
    }
    apply(lang);
  }

  function ensureSwitcher() {
    if (document.querySelector(".lang-switch")) return;
    const nav = document.querySelector(".header .nav");
    if (!nav) return;
    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("data-i18n-aria", "a11y.lang");
    wrap.setAttribute("aria-label", "Idioma");
    wrap.innerHTML =
      '<button type="button" class="lang-btn" data-set-lang="es" aria-pressed="false">ES</button>' +
      '<button type="button" class="lang-btn" data-set-lang="en" aria-pressed="false">EN</button>';
    const cta = nav.querySelector(".nav-cta-desktop");
    if (cta) nav.insertBefore(wrap, cta);
    else nav.appendChild(wrap);
  }

  function autoTagNav() {
    const map = [
      { sel: '.nav-links a[href="/caracteristicas/"], .nav-links a[href="/caracteristicas"]', key: "nav.modules" },
      { sel: '.nav-links a[href="/contabilidad/"], .footer-links a[href="/contabilidad/"]', key: "nav.accounting" },
      { sel: '.nav-links a[href="/propiedad-horizontal/"], .footer-links a[href="/propiedad-horizontal/"]', key: "nav.ph" },
      { sel: '.nav-links a[href="/comunicacion/"]', key: "nav.comms" },
      { sel: '.nav-links a[href="/app-residentes/"]', key: "nav.app" },
      { sel: '.nav-links a[href="/#contacto"], .nav-links a[href="#contacto"], .footer-links a[href="/#contacto"], .footer-links a[href="#contacto"]', key: "nav.contact" },
      { sel: '.nav-cta-desktop, .nav-cta-mobile a, .cta-band .btn-primary[href="/#contacto"], .cta-band .btn-primary[href="#contacto"]', key: "nav.demo" },
      { sel: '.footer-links a[href="/privacidad/"]', key: "nav.privacy" },
      { sel: ".nav-toggle", key: "nav.menu" },
    ];
    map.forEach(function (item) {
      document.querySelectorAll(item.sel).forEach(function (el) {
        if (!el.getAttribute("data-i18n") && !el.getAttribute("data-i18n-html")) {
          el.setAttribute("data-i18n", item.key);
        }
      });
    });
  }

  ensureSwitcher();
  autoTagNav();
  const initial = detectLang();
  apply(initial);

  document.addEventListener("click", function (event) {
    const btn = event.target.closest("[data-set-lang]");
    if (!btn) return;
    event.preventDefault();
    setLang(btn.getAttribute("data-set-lang"), true);
  });

  window.G360I18n = {
    t: function (key) {
      return t(window.__g360Lang || detectLang(), key);
    },
    setLang: setLang,
    getLang: function () {
      return window.__g360Lang || detectLang();
    },
    detectLang: detectLang,
  };
})();
