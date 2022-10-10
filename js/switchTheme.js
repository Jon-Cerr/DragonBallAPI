export default function switchTheme() {
  const switchButton = document.querySelector(".switch-theme-btn");

  switchButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    switchButton.classList.toggle("active");

    // Guardar los valores en el localStorage
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-theme", "true");
    } else {
      localStorage.setItem("dark-theme", "false");
    }
  });

  if (localStorage.getItem("dark-theme") === "true") {
    document.body.classList.add("dark");
    switchButton.classList.add("active");
  } else {
    document.body.classList.remove("dark");
    switchButton.classList.remove("active");
  }
}
