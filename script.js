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

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");

      setTimeout(() => {
        button.classList.remove("clicked");
      }, 500);
    });
  });
});