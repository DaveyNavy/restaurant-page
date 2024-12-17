import "./styles.css"
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";
import dripping from "./images/dripping.png";

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");
const drip = document.createElement("img");
drip.setAttribute("src", dripping);
drip.classList.add("dripping");

homePage();

function resetStyles () {
    [homeButton, menuButton, aboutButton].forEach(e => {
        if (e.classList.contains("cover")) {
            e.classList.remove("cover");
        }
        const images = document.querySelectorAll("button > img");
        images.forEach(e => {
            e.remove();
        })
    })
}


homeButton.addEventListener("click", () => {
    resetStyles();
    homePage();
    homeButton.classList.add("cover");
    homeButton.appendChild(drip);
});

menuButton.addEventListener("click", () => {
    resetStyles();
    menuPage();
    menuButton.classList.add("cover");
    menuButton.appendChild(drip);
});

aboutButton.addEventListener("click", () => {
    resetStyles();
    aboutPage();
    aboutButton.classList.add("cover");
    aboutButton.appendChild(drip);
});