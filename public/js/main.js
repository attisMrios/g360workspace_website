(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const canMotion = !reduceMotion.matches;
  if (canMotion) document.documentElement.classList.add("js-motion");

  const header = document.querySelector(".header");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* 3 — Stagger cards al scroll */
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (canMotion && "IntersectionObserver" in window && revealItems.length) {
    document.querySelectorAll("[data-stagger]").forEach(function (group) {
      Array.prototype.forEach.call(group.querySelectorAll("[data-reveal]"), function (item, index) {
        item.style.transitionDelay = Math.min(index, 7) * 0.07 + "s";
      });
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealItems.forEach(function (item) {
      if (!item.closest("[data-stagger]")) {
        item.style.transitionDelay = "0.04s";
      }
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* 1 — Hero ERP vivo: KPI count-up + filas activas */
  const livePanel = document.querySelector("[data-hero-live]");
  if (livePanel) {
    const rows = livePanel.querySelectorAll("[data-live-row]");
    const counters = livePanel.querySelectorAll("[data-count]");

    const formatCount = function (value, decimals) {
      if (decimals > 0) {
        return value.toLocaleString("es-CO", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      }
      return Math.round(value).toLocaleString("es-CO");
    };

    const runCounters = function () {
      counters.forEach(function (el) {
        const target = parseFloat(el.getAttribute("data-count"));
        if (Number.isNaN(target)) return;
        const prefix = el.getAttribute("data-prefix") || "";
        const suffix = el.getAttribute("data-suffix") || "";
        const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
        if (!canMotion) {
          el.textContent = prefix + formatCount(target, decimals) + suffix;
          return;
        }
        const duration = 1100;
        const start = performance.now();
        const tick = function (now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = prefix + formatCount(target * eased, decimals) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    };

    if ("IntersectionObserver" in window) {
      const liveObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            runCounters();
            liveObs.disconnect();
          });
        },
        { threshold: 0.35 }
      );
      liveObs.observe(livePanel);
    } else {
      runCounters();
    }

    if (canMotion && rows.length > 1) {
      let index = 0;
      setInterval(function () {
        rows.forEach(function (row) {
          row.classList.remove("is-active");
        });
        index = (index + 1) % rows.length;
        rows[index].classList.add("is-active");
      }, 2600);
    }
  }

  /* 5 — CTA magnético solo en Solicitar demo */
  if (canMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-magnetic]").forEach(function (btn) {
      const strength = 18;
      btn.addEventListener("pointermove", function (event) {
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        btn.style.transform =
          "translate(" + (x / strength).toFixed(2) + "px, " + (y / strength).toFixed(2) + "px)";
      });
      btn.addEventListener("pointerleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* Formulario demo */
  const WEB3FORMS_ACCESS_KEY = "689ce658-927d-4b30-98e7-74157030c5d4";
  const form = document.getElementById("contactForm");
  if (!form) return;

  const i18n = function (key, fallback) {
    if (window.G360I18n && typeof window.G360I18n.t === "function") {
      return window.G360I18n.t(key);
    }
    return fallback;
  };

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const submitBtn = form.querySelector(".submit-btn");
    const original = submitBtn.textContent;
    submitBtn.textContent = i18n("form.sending", "Enviando...");
    submitBtn.disabled = true;

    const data = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Contacto web — Solicitud de demo G360 Workspace",
      from_name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone") || "",
      company: data.get("company") || "",
      interest: data.get("interest") || "",
      message: data.get("message"),
    };

    const alertLib = window.Swal;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Error al enviar");
      if (alertLib) {
        alertLib.fire({
          icon: "success",
          title: i18n("form.ok.title", "Solicitud enviada"),
          text: i18n("form.ok.text", "Gracias. Te contactaremos para agendar una demo de G360 Workspace."),
          confirmButtonColor: "#4b65f0",
        });
      }
      form.reset();
    } catch (error) {
      const detail = error && error.message ? error.message : "";
      if (alertLib) {
        alertLib.fire({
          icon: "error",
          title: i18n("form.err.title", "No se pudo enviar"),
          text: detail && detail.length < 220 ? detail : i18n("form.err.text", "Intenta de nuevo en unos minutos."),
          confirmButtonColor: "#4b65f0",
        });
      }
    } finally {
      submitBtn.textContent = original;
      submitBtn.disabled = false;
    }
  });
})();
