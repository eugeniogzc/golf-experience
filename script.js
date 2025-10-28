document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave entre páginas
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        if (link.getAttribute("href").startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute("href"));
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Formulario de contacto
    const form = document.getElementById("contactForm");
    const respuesta = document.getElementById("respuesta");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        respuesta.textContent = `Gracias por contactarnos, ${nombre}. ¡Tu mensaje ha sido enviado con éxito!`;
        form.reset();
      });
    }
  });
  