export default function menu() {
  const navMenu = document.querySelector(".nav-menu");
  const openMenuBtn = document.querySelector(".open-menu");
  const closeMenuBtn = document.querySelector(".close-menu");

  const hideMenu = () => {
    navMenu.classList.toggle("menu_opened");
  };

  openMenuBtn.addEventListener("click", hideMenu);
  closeMenuBtn.addEventListener("click", hideMenu);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

        if (entry.isIntersecting) {
          document
            .querySelector(".nav-menu a.selected")
            .classList.remove("selected");
          menuLink.classList.add("selected");
        }
      });
    },
    { rootMargin: "-40% 0px -60% 0px" }
  );

  const menuLinks = document.querySelectorAll(`.nav-menu a[href^="#"]`);

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      navMenu.classList.remove("menu_opened");
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });
}