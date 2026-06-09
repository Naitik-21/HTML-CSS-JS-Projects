export const State = {
    heroStats: [
        { value: 0, label: "Characters" },
        { value: 0, label: "Clans" },
        { value: 0, label: "Villages" }
    ],
    clanIconsFolder: { 0: "Classics Sharingan", 1: "Mangekyo Sharingan", 2: "Eternal Mangekyo Sharingan" },
    clanIcons: [
        { 0: "1 Tomoe Sharingan", 1: "2 Tomoe Sharingan", 2: "3 Tomoe Sharingan", 3: "Proto Mangekyo Sharingan" },
        { 0: "Rai", 1: "Indra", 2: "Baru", 3: "Shin", 4: "Naka", 5: "Naori", 6: "Itachi", 7: "Izuna", 8: "Shisui", 9: "Sasuke", 10: "Obito-Kakashi", 11: "Madara", },
        { 0: "Sasuke", 1: "Madara" }
    ],
    charactersDefaultImage: { 0: "Naruto Uzumaki - Anime Style", 1: "Sakura Haruno", 2: "Naruto Uzumaki", 3: "Jiraiya", 4: "Obito Uchiha", 5: "Pain (Yahiko)", 6: "Minato Namikaze", 7: "Kakashi Hatake", 8: "Sasuke Uchiha", 9: "Itachi Uchiha", 10: "Madara Uchiha" },
    charactersDetailsHeroImage: { 0: "NarutoCDHI-1", 1: "NarutoCDHI-2", 2: "NarutoCDHI-3" },
    ninjaRanks: ["Academy Student", "Genin", "Chūnin", "Chūbu", "Tokubetsu Jōnin", "Jōnin", "Anbu", "Head Ninja", "Kage"]
};

export const IndexState = {
    clanIconsFolderIndex: 0,
    clanIconsIndex: 0,
    charactersDefaultImageIndex: 0,
    charactersDetailsHeroImageIndex: 0,
    showClansPerPage: 10,
    showCharactersPerPage: 10
}