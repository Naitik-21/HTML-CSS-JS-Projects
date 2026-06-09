import { FetchAPI } from "./Scripts/fetchAPI.js";
import { APIEndpoints } from "./Scripts/APIEndpoints.js";
import { State } from "./Scripts/state.js";
import { renderStat } from "./Scripts/RenderCards/renderStats.js";
import { searchCard } from "./Scripts/RenderCards/searchCards.js";

export async function initRender() {
    const NRCharacters = await FetchAPI(APIEndpoints.Characters);
    const NRClans = await FetchAPI(APIEndpoints.Clans);
    const NRVillages = await FetchAPI(APIEndpoints.Villages);

    const Characters = NRCharacters;
    const UFClans = NRClans;
    const Clans = [...new Map(UFClans.map(item => {
        const cleanedName = item.name.replace(/\(.*?\)/gi, "").replace(/family/gi, "").replace(/\s+/g, " ").trim();

        return [cleanedName.toLowerCase(),
        {
            ...item,
            name: cleanedName
        }
        ];
    })).values()];
    const Villages = NRVillages;

    let heroStatsHTML = "";

    State.heroStats[0].value = Characters.length;
    State.heroStats[1].value = Clans.length;
    State.heroStats[2].value = Villages.length;

    if (State.heroStats[0].value !== 0 || State.heroStats[1].value !== 0 || State.heroStats[2].value !== 0) {
        renderStat(State.heroStats);
    }

    searchCard(Clans, "Category", "clans");
    searchCard(Characters, "Entity", "characters");

    const clansDataContainer = document.querySelector(".js-featured-clans-grid");
    const charactersDataContainer = document.querySelector(".js-all-characters-grid");

    const clansContainer = document.querySelector(".js-clans-section");
    const charactersContainer = document.querySelector(".js-characters-section");

    if (clansDataContainer.innerHTML === "") {
        clansContainer.remove();
    }

    if (charactersDataContainer.innerHTML === "") {
        charactersContainer.remove();
    }
}
initRender();