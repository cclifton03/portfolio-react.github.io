export const menuToggle = () => {
  const menuIcon = document.querySelector(".menu-icon");
  const container = document.querySelector(".page-container");

  menuIcon.addEventListener("click", () => {
    container.classList.toggle("change");
  });
};
