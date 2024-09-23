function toggleMenu() {
  const menu = document.getElementById("menu");
  const icon = document.getElementById("icon-menu");

  if (menu.classList.contains("-translate-x-full")) {
    menu.classList.replace("-translate-x-full", "translate-x-0");

    icon.classList.replace("fa-bars", "fa-x");
    icon.classList.add("rotate-180");
  } else {
    menu.classList.replace("translate-x-0", "-translate-x-full");

    icon.classList.replace("fa-x", "fa-bars");
    icon.classList.remove("rotate-180");
  }
}

document.addEventListener("click", function (event) {
  var menu = document.getElementById("menu");
  var isMenuButton = event.target.closest("button");

  if (
    !menu.contains(event.target) &&
    !isMenuButton &&
    menu.classList.contains("translate-x-0")
  ) {
    toggleMenu();
  }
});

// Close menu on window resize
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("translate-x-0")) {
      toggleMenu();
    }
  }
});

const frontEndBtn = document.getElementById("frontEndBtn");
const backEndBtn = document.getElementById("backEndBtn");
const frontEnd = document.getElementById("front-end");
const backEnd = document.getElementById("back-end");
const themeButton = document.getElementById("theme-button");
const themeButtonMobile = document.getElementById("theme-button-mobile");
const viewMoreBtn = document.getElementById("view-more-btn");
const hiddenCards = document.querySelectorAll(".additional-card");
const body = document.body;
let isExpanded = false;
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  const ontop = document.getElementById("on-top");

  if (scrollTop > 300) {
    ontop.classList.remove("hidden");
  } else {
    ontop.classList.add("hidden");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

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

// theme button mobile
themeButtonMobile.addEventListener("click", function () {
  if (body.classList.contains("theme-1")) {
    body.classList.replace("theme-1", "theme-2");
    this.innerHTML = `<img src="./assets/lighticon.svg" class="w-8 h-8" alt="lighticon" />`;
  } else {
    body.classList.replace("theme-2", "theme-1");
    this.innerHTML = `<img src="./assets/darkicon.svg" class="w-8 h-8" alt="darkicon" />`;
  }
});

// theme button desktop
themeButton.addEventListener("click", function () {
  if (body.classList.contains("theme-1")) {
    body.classList.replace("theme-1", "theme-2");
    this.innerHTML = `<img src="./assets/lighticon.svg" class="w-8 h-8" alt="lighticon" />`;
  } else {
    body.classList.replace("theme-2", "theme-1");
    this.innerHTML = `<img src="./assets/darkicon.svg" class="w-8 h-8" alt="darkicon" />`;
  }
});

// view more portofolio
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
    this.textContent = "View Less";
  }

  isExpanded = !isExpanded;
});

const frontEndList = [
  { name: "HTML", imgSrc: "/assets/html.png" },
  { name: "CSS", imgSrc: "/assets/css-3.png" },
  { name: "JavaScript", imgSrc: "/assets/js.png" },
  { name: "React", imgSrc: "/assets/react.png" },
  { name: "Bootstrap", imgSrc: "/assets/bootstrap.png" },
  { name: "Tailwind", imgSrc: "/assets/tailwind.png" },
  { name: "SASS", imgSrc: "/assets/sass.png" },
];

const backEndList = [
  { name: "Laravel", imgSrc: "/assets/laravel.png" },
  { name: "MySQL", imgSrc: "/assets/mysql.png" },
  { name: "PHP", imgSrc: "/assets/php.png" },
  { name: "PostgreSQL", imgSrc: "/assets/postgree.png" },
  { name: "TypeScript", imgSrc: "/assets/typescript.png" },
  { name: "Oracle", imgSrc: "/assets/oracle.png" },
  { name: "Node.js", imgSrc: "/assets/nodejs.png" },
  { name: "Nest.js", imgSrc: "/assets/nest js.png" },
];

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
