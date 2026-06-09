import { renderPage } from "./renderPages.js";

export function searchCard(Data, type, searchInp) {
    const searchInput = document.querySelector(`.js-search-${searchInp}`);

    function handleSearch(event) {
        const searchValue = event.target.value.toLowerCase().trim();

        const filteredData = Data.filter((D) => {
            return D.name.toLowerCase().includes(searchValue);
        });

        renderPage(filteredData, type);
    }

    searchInput.removeEventListener("input", handleSearch);
    searchInput.addEventListener("input", handleSearch);

    searchInput.dispatchEvent(new Event("input"));
}