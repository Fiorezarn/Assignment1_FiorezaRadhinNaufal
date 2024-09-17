function toggleMenu() {
  var menu = document.getElementById("menu");

  if (menu.classList.contains("-translate-x-full")) {
    menu.classList.remove("-translate-x-full");
    menu.classList.add("translate-x-0");
  } else {
    menu.classList.remove("translate-x-0");
    menu.classList.add("-translate-x-full");
  }
}

const frontEndBtn = document.getElementById("frontEndBtn");
const backEndBtn = document.getElementById("backEndBtn");
const frontEnd = document.getElementById("front-end");
const backEnd = document.getElementById("back-end");
const themeButton = document.getElementById("theme-button");
const viewMoreBtn = document.getElementById("view-more-btn");
const hiddenCards = document.querySelectorAll(".additional-card");
let isExpanded = false;

frontEndBtn.addEventListener("click", () => {
  frontEnd.classList.remove("hidden");
  backEnd.classList.add("hidden");

  frontEndBtn.classList.add("bg-[#573DBB]", "text-white");
  frontEndBtn.classList.remove("bg-gray-100", "text-gray-500");

  backEndBtn.classList.add("bg-gray-100", "text-gray-500");
  backEndBtn.classList.remove("bg-[#573DBB]", "text-white");
});

backEndBtn.addEventListener("click", () => {
  frontEnd.classList.add("hidden");
  backEnd.classList.remove("hidden");

  backEndBtn.classList.add("bg-[#573DBB]", "text-white");
  backEndBtn.classList.remove("bg-gray-100", "text-gray-500");

  frontEndBtn.classList.add("bg-gray-100", "text-gray-500");
  frontEndBtn.classList.remove("bg-[#573DBB]", "text-white");
});

themeButton.addEventListener("click", function () {
  var body = document.body;

  if (body.classList.contains("theme-1")) {
    body.classList.replace("theme-1", "theme-2");
    this.innerHTML = `<i class="fa-regular fa-sun text-white"></i>`;
  } else {
    body.classList.replace("theme-2", "theme-1");
    this.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

viewMoreBtn.addEventListener("click", function () {
  if (isExpanded) {
    hiddenCards.forEach((card) => {
      card.classList.add("hidden");
    });
    this.textContent = "View More";
  } else {
    hiddenCards.forEach((card) => {
      card.classList.remove("hidden");
    });
    this.textContent = "See Less";
  }

  isExpanded = !isExpanded;
});
