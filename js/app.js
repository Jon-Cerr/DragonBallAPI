import switchTheme from "./switchTheme.js";
import getDBSdata from "./fetchData.js";
import menu from "./menu.js";

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", () => {
  getDBSdata();
});

window.addEventListener("DOMContentLoaded", switchTheme());
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-body");
  loader.style.visibility = 0;
  loader.style.display = "none";
  loader.style.opacity = 0;
  loader.classList.remove("visible");
  document.querySelector("body").classList.remove("hidden");
  menu()
});