const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const backTop = document.querySelector("[data-back-top]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const counters = document.querySelectorAll("[data-counter]");
const revealItems = document.querySelectorAll(".reveal");

const setHeaderState = () => {
  const isScrolled = window.scrollY > 24;
  header.classList.toggle("is-scrolled", isScrolled);
  backTop.classList.toggle("is-visible", window.scrollY > 520);
  document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
};

const closeNav = () => {
  nav.classList.remove("is-open");
  header.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
};

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeNav();
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  const duration = 1200;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver((entries, instance) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("is-visible");

    if (entry.target.hasAttribute("data-counter")) {
      animateCounter(entry.target);
    }

    instance.unobserve(entry.target);
  });
}, { threshold: 0.18 });

revealItems.forEach((item) => observer.observe(item));
counters.forEach((counter) => observer.observe(counter));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nombre = data.get("nombre") || "Sin nombre";
  const correo = data.get("correo") || "Sin correo";
  const telefono = data.get("telefono") || "Sin telefono";
  const mensaje = data.get("mensaje") || "Sin mensaje";

  const body = [
    "Nueva consulta desde la web de Maria Teresa Abad",
    "",
    `Nombre: ${nombre}`,
    `Correo: ${correo}`,
    `Telefono: ${telefono}`,
    "",
    `Mensaje: ${mensaje}`
  ].join("\n");

  formNote.textContent = "Consulta preparada. Se abrira tu cliente de correo para enviarla.";
  window.location.href = `mailto:mariateresaabad@remax.com.ar?subject=${encodeURIComponent("Consulta inmobiliaria")}&body=${encodeURIComponent(body)}`;
});

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) closeNav();
});

setHeaderState();
