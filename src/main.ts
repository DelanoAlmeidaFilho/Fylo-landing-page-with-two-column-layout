//#region ==> show menu

const toggle = document.querySelector<HTMLDivElement>("[data-toggle]")!;
const nav = document.querySelector<HTMLElement>("[data-nav-list]")!;

const showMenu = () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("menu__list--show");
};

if (toggle && nav) {
  toggle.addEventListener("click", showMenu);
  nav.addEventListener("click", showMenu);
}

//#endregion

//#region active link
const sections = document.querySelectorAll<HTMLElement>("section")!;
const menuLink = document.querySelectorAll<HTMLElement>(".menu__link")!;

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id")!;
    }
  });

  menuLink.forEach((li) => {
    li.classList.remove("menu__link--active");
    if (li.classList.contains(current)) {
      li.classList.add("menu__link--active");
    }
  });
});
//#endregion

export {};
