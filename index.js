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
    this.innerHTML = `<img src="./assets/lighticon.svg" class="w-8 h-8" alt="lighticon" />`;
  } else {
    body.classList.replace("theme-2", "theme-1");
    this.innerHTML = `<img src="./assets/darkicon.svg" class="w-8 h-8" alt="darkicon" />`;
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
    this.textContent = "View Less";
  }

  isExpanded = !isExpanded;
});

const frontEndList = [
  { name: "HTML", imgSrc: "./assets/html.png" },
  { name: "CSS", imgSrc: "./assets/css-3.png" },
  { name: "JavaScript", imgSrc: "./assets/js.png" },
  { name: "React", imgSrc: "./assets/react.png" },
  { name: "Bootstrap", imgSrc: "./assets/bootstrap.png" },
  { name: "Tailwind CSS", imgSrc: "./assets/tailwind.png" },
  { name: "SASS", imgSrc: "./assets/sass.png" },
];

const backEndList = [
  { name: "Laravel", imgSrc: "./assets/laravel.png" },
  { name: "MySQL", imgSrc: "./assets/mysql.png" },
  { name: "PHP", imgSrc: "./assets/php.png" },
  { name: "PostgreSQL", imgSrc: "./assets/postgree.png" },
  { name: "TypeScript", imgSrc: "./assets/typescript.png" },
  { name: "Oracle", imgSrc: "./assets/oracle.png" },
  { name: "Node.js", imgSrc: "./assets/nodejs.png" },
  { name: "Nest.js", imgSrc: "./assets/nest js.png" },
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
      "items-center"
    );

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
