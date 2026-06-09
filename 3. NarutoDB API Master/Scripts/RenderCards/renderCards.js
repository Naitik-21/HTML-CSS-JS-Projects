import { State, IndexState } from "../state.js";

export function renderCard(Data, type) {
    let allData = "";

    if (Data.length === 0) {
        if (type === "Category") {
            document.querySelector(".js-featured-clans-grid").innerHTML = allData;
        } else if (type === "Entity") {
            document.querySelector(".js-all-characters-grid").innerHTML = allData;
        } else if (type === "EntityDetail") {
            document.querySelector(".js-all-characters-details").innerHTML = allData;
        }
        return;
    } else {
        Data.forEach((D) => {
            let RanksHTML = "";
            let ClansHTML = "";
            let NatureTypesHTML = "";
            let JutsusHTML = "";
            let FamilyRelationsHTML = "";

            const Ranks = Object.values(D.rank?.ninjaRank || {}).sort((a, b) => State.ninjaRanks.indexOf(a) - State.ninjaRanks.indexOf(b)); // Sort The Ranks Low To High
            // const Ranks = Object.values(D.rank?.ninjaRank || {}).sort((a, b) => State.ninjaRanks.indexOf(b) - State.ninjaRanks.indexOf(a)); // Sort The Ranks High To Low
            const Clans = (Array.isArray(D.personal?.clan) ? D.personal?.clan : D.personal?.clan ? [D.personal?.clan] : []).map(C => C.replace(/\(.*?\)/g, "").replace(/Clan/gi, "").trim());
            const NatureTypes = Array.isArray(D.natureType) ? D.natureType : D.natureType ? [D.natureType] : [];
            const Jutsus = [...new Set((Array.isArray(D.jutsu) ? D.jutsu : D.jutsu ? [D.jutsu] : []).map(J => J?.replace(/\(.*?\)/g, "").trim()).filter(Boolean))];
            const Sex = ((D.personal?.sex || "").replace(/File:.*?\.svg/gi, "").trim().toLowerCase() === "male") ? "Male" : ((D.personal?.sex || "").replace(/File:.*?\.svg/gi, "").trim().toLowerCase() === "female") ? "Female" : "";
            const FamilyRelations = Object.entries(D.family || {}).map(([Relation, Name]) => [Relation.replace(/\(.*?\)/g, "").replace(/\b\w/g, C => C.toUpperCase()).trim(), Name]).filter(([, Name]) => Name);

            Ranks.forEach((Rank) => {
                RanksHTML += `
                    <span class="tag tag-orange">${Rank}</span>
                `;
            });

            Clans.forEach((Clan) => {
                ClansHTML += `
                    <span class="tag tag-blue">${Clan}</span>
                `;
            });

            NatureTypes.forEach((NatureType) => {
                NatureTypesHTML += `
                    <span class="pill pill-blue">${NatureType}</span>
                `;
            });

            Jutsus.forEach((Jutsu) => {
                JutsusHTML += `
                    <span class="pill pill-orange">${Jutsu}</span>
                `;
            });

            FamilyRelations.forEach(([Relation, Name]) => {
                FamilyRelationsHTML += `
                    <div class="family-item">
                        <div class="family-rel">${Relation}</div>
                        <div class="family-name">${Name}</div>
                    </div>
                `;
            });

            if (type === "Category") {
                allData += `
                    <div class="glass clan-card">
                        <div class="clan-icon">
                            <img src="Assets/Clans Logo/${State.clanIconsFolder[IndexState.clanIconsFolderIndex]}/${State.clanIcons[IndexState.clanIconsFolderIndex][IndexState.clanIconsIndex]}.svg" class="eye">
                        </div>
                        <h3>${D.name.replace(/\s*\((Anime|Novel|Manga)\s+only\)/gi, '').replace(/\bfamily\b/gi, '').replace(/\s{2,}/g, '').trim()}</h3>
                        <p class="sub">Clan</p>
                    </div>
                `;
                document.querySelector(".js-featured-clans-grid").innerHTML = allData;
            } else if (type === "Entity") {
                allData += `
                    <!-- ${D.name} -->
                    <a href="#${D.name.replace(/\s+/g, "").toLowerCase()}" class="glass char-card">
                        <div class="char-img-wrap">
                            ${D.images.length !== 0 ? `
                                <img src="${D.images[0]}" alt="${D.name}" loading="lazy" width="512" height="640">
                            ` : `
                                <img src="Assets/Character Image Default/${State.charactersDefaultImage[IndexState.charactersDefaultImageIndex]}.png" alt="${D.name}" loading="lazy" width="512" height="640">
                            `}
                            <div class="char-img-overlay"></div>
                        </div>
                        <div class="char-info">
                            <div class="char-name">${D.name}</div>
                            <div class="char-village">${D.personal ? D.personal.affiliation ? Array.isArray(D.personal.affiliation) ? D.personal.affiliation[0] : D.personal.affiliation : "UnAffiliated" : "UnAffiliated"}</div>
                            <div class="char-tags">
                                ${RanksHTML ? RanksHTML : "<span class='tag tag-orange'>Ninja</span>"}
                                ${ClansHTML ? ClansHTML : ""}
                            </div>
                        </div>
                    </a>
                `;
                document.querySelector(".js-all-characters-grid").innerHTML = allData;
            } else if (type === "EntityDetail") {
                allData += `
                    <!-- ${D.name} Detail -->
                    <div class="char-detail" id="${D.name.replace(/\s+/g, "").toLowerCase()}">
                        <div class="detail-card" style="position:relative;">
                            <a href="#!" class="detail-close">✕</a>
                            <div class="detail-hero">
                                <img src="Assets/Character Details Hero Image/${State.charactersDetailsHeroImage[IndexState.charactersDetailsHeroImageIndex]}.jpg" alt="NarutoDB Character Details Hero Image">
                                <div class="detail-hero-overlay"></div>
                                <div class="detail-hero-info">
                                    <h2>${D.name}</h2>
                                    <div class="char-tags">
                                        ${RanksHTML ? RanksHTML : "<span class='tag tag-orange'>Ninja</span>"}
                                        ${ClansHTML ? ClansHTML : ""}
                                    </div>
                                </div>
                            </div>
                            <div class="detail-content">
                                ${D.personal ? `
                                    <div class="stat-grid">
                                        ${D.personal.birthdate ? `
                                            <div class="stat-box">
                                                <div class="stat-label">📅 Birthdate</div>
                                                <div class="stat-value">${D.personal.birthdate}</div>
                                            </div>
                                        ` : ""}
                                        ${D.personal.age ? `
                                            <div class="stat-box">
                                                <div class="stat-label">🛡 Age</div>
                                                <div class="stat-value">${Object.values(D.personal?.age || {})[Object.values(D.personal?.age || {}).length - 1] || ""}</div>
                                            </div>
                                        ` : ""}
                                        ${D.personal.affiliation ? `
                                            <div class="stat-box">
                                                <div class="stat-label">📍 Village</div>
                                                <div class="stat-value">${Array.isArray(D.personal.affiliation) ? D.personal.affiliation[0] : D.personal.affiliation}</div>
                                            </div>
                                        ` : ""}
                                        ${D.personal.sex ? `
                                            <div class="stat-box">
                                                <div class="stat-label">👤 Sex</div>
                                                <div class="stat-value">${Sex ? Sex : "Gay (Not Disclosed)"}</div>
                                            </div>
                                        ` : ""}
                                    </div>
                                ` : ""}
                                ${NatureTypesHTML ? `
                                    <div class="detail-section">
                                        <div class="detail-section-title"><span class="dot dot-blue"></span>Nature Types</div>
                                        <div class="pill-list">${NatureTypesHTML}</div>
                                    </div>
                                ` : ""}
                                ${JutsusHTML ? `
                                    <div class="detail-section">
                                        <div class="detail-section-title"><span class="dot dot-orange"></span>Jutsu</div>
                                        <div class="pill-list">${JutsusHTML}</div>
                                    </div>
                                ` : ""}
                                ${FamilyRelationsHTML ? `
                                    <div class="detail-section">
                                        <div class="detail-section-title"><span class="dot dot-purple"></span>Family</div>
                                        <div class="family-grid">${FamilyRelationsHTML}</div>
                                    </div>
                                ` : ""}
                            </div>
                        </div>
                    </div>
                `;
                document.querySelector(".js-all-characters-details").innerHTML = allData;
            }
        });
    }
}