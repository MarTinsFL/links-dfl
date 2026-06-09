document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    greeting.textContent = "Bom dia";
  } else if (hour >= 12 && hour < 18) {
    greeting.textContent = "Boa tarde";
  } else {
    greeting.textContent = "Boa noite";
  }

  const buttons = document.querySelectorAll(".link-button");
  const alertLinks = document.querySelectorAll(".js-alert-link");
  const alertModal = document.getElementById("alertModal");
  const alertOk = document.getElementById("alertOk");

  let selectedUrl = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");

      setTimeout(() => {
        button.classList.remove("clicked");
      }, 500);
    });
  });

  alertLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      selectedUrl = link.getAttribute("href");

      alertModal.classList.add("active");
    });
  });

  alertOk.addEventListener("click", () => {
    alertModal.classList.remove("active");

    if (selectedUrl) {
      window.open(selectedUrl, "_blank", "noopener");
      selectedUrl = "";
    }
  });
});