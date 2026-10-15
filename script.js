/* =========================================================
   Haider Web Studio — interactions
   ========================================================= */
"use strict";

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile navigation: open and close the menu accessibly.
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}


// Contact form: connect a Formspree endpoint before enabling live submissions.
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.classList.remove("is-success", "is-error");

    const endpoint = contactForm.getAttribute("action") || "";
    if (endpoint.includes("REPLACE_WITH_YOUR_FORM_ID")) {
      formStatus.textContent = "The contact form is ready, but it still needs your Formspree form ID before it can send messages. Follow the setup steps in README.md.";
      formStatus.classList.add("is-error");
      return;
    }

    if (!contactForm.reportValidity()) return;

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.innerHTML : "";
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending…";
    }
    formStatus.textContent = "Sending your message please wait…";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Form submission failed");
      contactForm.reset();
      formStatus.textContent = "Message sent successfully! Thanks for reaching out. I'll get back to you as soon as possible.";
       formStatus.classList.add("is-success");
    } catch (error) {
      formStatus.textContent = "Sorry, your message could not be sent. Please try again later or email veerhaider655@gmail.com directly.";
      formStatus.classList.add("is-error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    }
  });
}
