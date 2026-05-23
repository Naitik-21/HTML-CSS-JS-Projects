import { myminiprojects, myminiproject } from "./Scripts/MiniProjects.js";
import { mymegaprojects, mymegaproject } from "./Scripts/MegaProjects.js";
import { myskills, myskill } from "./Scripts/Skills.js";
import { randomtext } from "./Scripts/Random.js";

// Scrolling Box Shadow For Portfolio Navigation Bar Main
window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".navigation-bar-main");
    if (window.scrollY > 10) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

// Function For Navigation Bar Links
function navbarlinks(link) {
    if (link == "N Logo") {
        window.location.href = "index.html";
    } else if (link == "Home") {
        window.location.href = "#Home";
    } else if (link == "About") {
        window.location.href = "#About";
    } else if (link == "Skills") {
        window.location.href = "#Skills";
    } else if (link == "Mega Projects") {
        window.location.href = "#Mega-Projects";
    } else if (link == "Mini Projects") {
        window.location.href = "#Mini-Projects";
    } else if (link == "Contact") {
        window.location.href = "#Contact";
    } else if (link == "Contact Me") {
        window.location.href = "#Contact";
    }
}

// Function For Main Cards Links
function maincardlinks(link) {
    if (link == "Github") {
        window.open("", "_blank");
    } else if (link == "Linked In") {
        window.open("", "_blank");
    } else if (link == "Instagram") {
        window.open("", "_blank");
    } else if (link == "Facebook") {
        window.open("", "_blank");
    } else if (link == "X") {
        window.open("", "_blank");
    } else if (link == "My Work") {
        window.location.href = "#Contact";
    } else if (link == "Resume") {
        window.open("Resume.pdf", "_blank");
    } else if (link == "Contact") {
        window.location.href = "#Contact";
    }
}

// Function For Displaying Developer Stats Card Details
function developerstats() {
    document.querySelector(".developer-stats-project-card h3").innerHTML = `${mymegaprojects.length + myminiprojects.length}`;
    document.querySelector(".developer-stats-cards-main .developer-stats-card:nth-child(1) h3").innerHTML = `${mymegaprojects.length}`;
    document.querySelector(".developer-stats-cards-main .developer-stats-card:nth-child(2) h3").innerHTML = `${myminiprojects.length}`;
    document.querySelector(".developer-stats-cards-main .developer-stats-card:nth-child(3) h3").innerHTML = `${myskills.length}`;
    document.querySelector(".developer-stats-cards-main .developer-stats-card:nth-child(4) h3").innerHTML = `6 +`;
}

// Render HTML Function For Random Text, Mini Projects, Mega Projects, My Skills, Developer Stats
function renderHTML() {
    randomtext();
    myminiproject();
    mymegaproject();
    myskill();
    developerstats();
}
renderHTML();