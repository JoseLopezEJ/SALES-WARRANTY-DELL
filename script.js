document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     NAVBAR
  ========================================================= */

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const mobileMenu =
    document.getElementById("mobileMenu");

  const mobileButton =
    document.getElementById("mobileMenuButton");

  const mobileClose =
    document.getElementById("mobileClose");


  mobileButton.addEventListener("click", () => {

    mobileMenu.classList.add("open");

  });


  mobileClose.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

  });


  document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

      });

    });


  /* =========================================================
     FAQ
  ========================================================= */

  const faqItems =
    document.querySelectorAll(".faq-item");


  faqItems.forEach(item => {

    const question =
      item.querySelector(".faq-question");

    const answer =
      item.querySelector(".faq-answer");


    question.addEventListener("click", () => {

      const isActive =
        item.classList.contains("active");


      /* Cerrar los demás */

      faqItems.forEach(other => {

        other.classList.remove("active");

        const otherAnswer =
          other.querySelector(".faq-answer");

        otherAnswer.style.maxHeight = null;

      });


      /* Abrir el seleccionado */

      if (!isActive) {

        item.classList.add("active");

        answer.style.maxHeight =
          answer.scrollHeight + "px";

      }

    });

  });


  /* =========================================================
     ANIMACIONES DE ENTRADA
  ========================================================= */

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  document
    .querySelectorAll(
      ".value-card, .commercial-card, .guarantee-card, .video-card"
    )
    .forEach(element => {

      element.style.opacity = "0";

      element.style.transform =
        "translateY(25px)";

      element.style.transition =
        "opacity .7s ease, transform .7s ease";

      observer.observe(element);

    });


  /* =========================================================
     ESTADO DE ELEMENTOS ANIMADOS
  ========================================================= */

  const style =
    document.createElement("style");

  style.innerHTML = `

    .value-card.visible,
    .commercial-card.visible,
    .guarantee-card.visible,
    .video-card.visible {

      opacity: 1 !important;

      transform:
        translateY(0) !important;

    }

  `;

  document.head.appendChild(style);


  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener("click", function(event) {

        const targetId =
          this.getAttribute("href");

        if (
          targetId === "#" ||
          !targetId
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        const navbarHeight =
          document.querySelector(".navbar")
            .offsetHeight;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;

        window.scrollTo({

          top:
            targetPosition,

          behavior:
            "smooth"

        });

      });

    });


  /* =========================================================
     WHATSAPP - ANALYTICS / CLICK
  ========================================================= */

  const whatsapp =
    document.querySelector(".whatsapp-float");


  if (whatsapp) {

    whatsapp.addEventListener("click", () => {

      console.log(
        "Contacto iniciado por WhatsApp"
      );

    });

  }


  /* =========================================================
     YEAR
  ========================================================= */

  const currentYear =
    new Date().getFullYear();

  const footerYear =
    document.querySelector(".footer-bottom span");

  if (footerYear) {

    footerYear.textContent =
      `© ${currentYear} José López · Dell Technologies · Ingram Micro`;

  }

});