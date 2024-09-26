const frontEndBtn = document.getElementById("frontEndBtn");
const backEndBtn = document.getElementById("backEndBtn");
const frontEnd = document.getElementById("front-end");
const backEnd = document.getElementById("back-end");
const themeButtons = document.querySelectorAll(".theme-button");
const viewMoreBtn = document.getElementById("view-more-btn");
const body = document.body;
let lastScrollTop = 0;
let menu = document.getElementById("menu");
let menuButton = document.getElementById("icon-menu");

// hamburger menu
function toggleMenu() {
  if (menu.classList.contains("-translate-x-full")) {
    menu.classList.replace("-translate-x-full", "translate-x-0");

    menuButton.classList.replace("fa-bars", "fa-x");
    menuButton.classList.add("rotate-180");
  } else {
    menu.classList.replace("translate-x-0", "-translate-x-full");

    menuButton.classList.replace("fa-x", "fa-bars");
    menuButton.classList.remove("rotate-180");
  }
}

// Close menu on click
document.addEventListener("click", function (event) {
  let isMenuButton = menuButton.contains(event.target); // Check if the click is from the menu button
  let isMenuLink = menu.contains(event.target); // Check if the click is from a link inside the menu

  // If the click is not on the menu button or a menu link, and the menu is open, close it
  if (
    !isMenuButton &&
    !isMenuLink &&
    menu.classList.contains("translate-x-0")
  ) {
    toggleMenu();
  }
});

// Close menu on window resize
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    if (menu.classList.contains("translate-x-0")) {
      toggleMenu();
    }
  }
});

// navigation on top
window.addEventListener("scroll", function () {
  // Get the current vertical scroll position of the document
  let scrollTop = document.documentElement.scrollTop;

  const ontop = document.getElementById("on-top");

  if (scrollTop > 300) {
    ontop.classList.remove("hidden");
  } else {
    ontop.classList.add("hidden");
  }
});

frontEndBtn.addEventListener("click", () => {
  frontEnd.classList.remove("hidden");
  backEnd.classList.add("hidden");

  frontEndBtn.classList.remove("bg-gray-100", "text-gray-500");
  frontEndBtn.classList.add("bg-[#573DBB]", "text-white");

  backEndBtn.classList.remove("bg-[#573DBB]", "text-white");
  backEndBtn.classList.add("bg-gray-100", "text-gray-500");
});

backEndBtn.addEventListener("click", () => {
  frontEnd.classList.add("hidden");
  backEnd.classList.remove("hidden");

  backEndBtn.classList.add("bg-[#573DBB]", "text-white");
  backEndBtn.classList.remove("bg-gray-100", "text-gray-500");

  frontEndBtn.classList.add("bg-gray-100", "text-gray-500");
  frontEndBtn.classList.remove("bg-[#573DBB]", "text-white");
});

// change theme
themeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (body.classList.contains("theme-1")) {
      body.classList.replace("theme-1", "theme-2");
      button.innerHTML = `<img src="./assets/lighticon.svg" class="w-8 h-8" alt="lighticon" />`;
    } else {
      body.classList.replace("theme-2", "theme-1");
      button.innerHTML = `<img src="./assets/darkicon.svg" class="w-8 h-8" alt="darkicon" />`;
    }
  });
});

// view more portofolio
let isExpanded = false;
viewMoreBtn.addEventListener("click", function () {
  const hiddenCards = document.querySelectorAll(".additional-card");
  if (isExpanded) {
    hiddenCards.forEach((card) => {
      card.classList.add("hidden");
    });
    this.textContent = "View More";
  } else {
    hiddenCards.forEach((card) => {
      card.classList.remove("hidden");
    });
    this.textContent = "View Less";
  }
  isExpanded = !isExpanded;
});

// card front end skill
const frontEndList = [
  { name: "HTML", imgSrc: "./assets/html.png" },
  { name: "CSS", imgSrc: "./assets/css-3.png" },
  { name: "JavaScript", imgSrc: "./assets/js.png" },
  { name: "React", imgSrc: "./assets/react.png" },
  { name: "Bootstrap", imgSrc: "./assets/bootstrap.png" },
  { name: "Tailwind", imgSrc: "./assets/tailwind.png" },
  { name: "SASS", imgSrc: "./assets/sass.png" },
];

// card back end skill
const backEndList = [
  { name: "Laravel", imgSrc: "./assets/laravel.png" },
  { name: "MySQL", imgSrc: "./assets/sql.png" },
  { name: "PHP", imgSrc: "./assets/php.png" },
  { name: "PostgreSQL", imgSrc: "./assets/postgree.png" },
  { name: "TypeScript", imgSrc: "./assets/typescript.png" },
  { name: "Oracle", imgSrc: "./assets/oracle.png" },
  { name: "Node.js", imgSrc: "./assets/nodejs.png" },
  { name: "Nest.js", imgSrc: "./assets/nest js.png" },
];

// function show card skills
function showCardSkill(list, idContainer) {
  const container = document.getElementById(idContainer);
  list.forEach((tech) => {
    const techDiv = document.createElement("div");
    techDiv.classList.add(
      "card-skill",
      "backdrop-blur-sm",
      "p-7",
      "rounded",
      "flex",
      "flex-col",
      "items-center",
      "min-w-[200px]"
    );

    techDiv.setAttribute("data-aos", "zoom-in-up");

    const img = document.createElement("img");
    img.classList.add("w-20", "h-20");
    img.src = tech.imgSrc;
    img.alt = tech.name;

    const h1 = document.createElement("h1");
    h1.classList.add("text-center", "text-lg", "font-bold", "mt-4");
    h1.textContent = tech.name;

    techDiv.appendChild(img);
    techDiv.appendChild(h1);
    container.appendChild(techDiv);
  });
}

showCardSkill(frontEndList, "front-end");
showCardSkill(backEndList, "back-end");
