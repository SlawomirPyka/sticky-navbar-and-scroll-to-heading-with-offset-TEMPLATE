//////// Hamburger Menu ////////
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click", (e) => {
  nav.classList.toggle("nav-active");
});

const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
console.log(navLinks.length);
for (i = 0; i < navLinks.length; i++) {
  console.log(navLinks[i]);
  navLinks[i].addEventListener("click", () => {
    console.log("hi");
    const nav = document.querySelector(".nav");
    if (nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
    }
  });
}
