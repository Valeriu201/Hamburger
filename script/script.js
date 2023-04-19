const hamburger = document.querySelector(".hamburger");
const rightHamburger = document.querySelector(".right-hamburger");

rightHamburger.style.display = "none";

hamburger.addEventListener("click", () => {
  if (rightHamburger.style.display == "none") {
    rightHamburger.style.display = "flex";
    hamburger.classList.add("active");
  } else {
    rightHamburger.style.display = "none";
    hamburger.classList.remove("active");
  }
});
