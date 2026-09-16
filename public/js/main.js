(function () {
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

  const tabs = Array.from(document.querySelectorAll("[data-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-panel]"));
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const id = tab.getAttribute("data-tab");
      tabs.forEach(function (item) {
        item.setAttribute("aria-selected", item === tab ? "true" : "false");
      });
      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute("data-panel") !== id;
      });
    });
  });

  const WEB3FORMS_ACCESS_KEY = "689ce658-927d-4b30-98e7-74157030c5d4";
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const submitBtn = form.querySelector(".submit-btn");
    const original = submitBtn.textContent;
    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    const data = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Contacto web — G360 Workspace",
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
          title: "Solicitud enviada",
          text: "Gracias. Te contactaremos para agendar una demo de G360 Workspace.",
          confirmButtonColor: "#1f6f82",
        });
      }
      form.reset();
    } catch (error) {
      const detail = error && error.message ? error.message : "";
      if (alertLib) {
        alertLib.fire({
          icon: "error",
          title: "No se pudo enviar",
          text: detail && detail.length < 220 ? detail : "Intenta de nuevo en unos minutos.",
          confirmButtonColor: "#1f6f82",
        });
      }
    } finally {
      submitBtn.textContent = original;
      submitBtn.disabled = false;
    }
  });
})();
