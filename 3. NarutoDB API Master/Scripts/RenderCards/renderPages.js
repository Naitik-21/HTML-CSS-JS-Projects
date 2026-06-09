import { IndexState } from "../state.js";
import { renderCard } from "./renderCards.js";

export function renderPage(Data, type) {
    const clansPrevBtn = document.querySelector(".js-show-prev-clans");
    const clansNextBtn = document.querySelector(".js-show-next-clans");
    const charactersPrevBtn = document.querySelector(".js-show-prev-characters");
    const charactersNextBtn = document.querySelector(".js-show-next-characters");

    const clansActivePage = document.querySelector(".js-clans-active-page");
    const charactersActivePage = document.querySelector(".js-characters-active-page");
    const clansTotalPagesElement = document.querySelector(".js-clans-totalPages");
    const charactersTotalPagesElement = document.querySelector(".js-characters-totalPages");

    const clansCardsContainer = document.querySelector(".js-featured-clans-grid");
    const charactersCardsContainer = document.querySelector(".js-all-characters-grid");
    const charactersDetailsContainer = document.querySelector(".js-all-characters-details");

    const clansCardsPerPage = IndexState.showClansPerPage;
    const charactersCardsPerPage = IndexState.showCharactersPerPage;

    let currentPage = 1;

    const totalPages = type === "Category" ? Math.ceil(Data.length / clansCardsPerPage) : Math.ceil(Data.length / charactersCardsPerPage);

    function showPage(page) {
        if (type === "Category") {
            const startIndex = (page - 1) * clansCardsPerPage;
            const endIndex = startIndex + clansCardsPerPage;

            const paginatedClans = Data.slice(startIndex, endIndex);

            clansCardsContainer.innerHTML = "";

            renderCard(paginatedClans, type);

            clansActivePage.innerHTML = page;
            clansTotalPagesElement.innerHTML = totalPages;

            clansPrevBtn.disabled = page === 1;
            clansNextBtn.disabled = page === totalPages;
        } else if (type === "Entity") {
            const startIndex = (page - 1) * charactersCardsPerPage;
            const endIndex = startIndex + charactersCardsPerPage;

            const paginatedCharacters = Data.slice(startIndex, endIndex);

            charactersCardsContainer.innerHTML = "";
            charactersDetailsContainer.innerHTML = "";

            renderCard(paginatedCharacters, type);
            renderCard(paginatedCharacters, "EntityDetail");

            charactersActivePage.innerHTML = page;
            charactersTotalPagesElement.innerHTML = totalPages;

            charactersPrevBtn.disabled = page === 1;
            charactersNextBtn.disabled = page === totalPages;
        }
    }

    if (type === "Category") {
        clansPrevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage, "Category");
            }
        });

        clansNextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage, "Category");
            }
        });
    } else if (type === "Entity") {
        charactersPrevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage, "Entity");
            }
        });

        charactersNextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage, "Entity");
            }
        });
    }

    showPage(currentPage);
}