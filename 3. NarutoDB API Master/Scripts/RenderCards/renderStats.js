import { valueFormat } from "../Utils/Math.js";

export function renderStat(Data) {
    let heroStatsHTML = "";
    Data.forEach((D) => {
        heroStatsHTML += `
            <div>
                <div class="value text-gradient-orange">${valueFormat(D.value)}</div>
                <div class="label">${D.label}</div>
            </div>
        `;
    });
    document.querySelector(".js-hero-stats").innerHTML = heroStatsHTML;
}