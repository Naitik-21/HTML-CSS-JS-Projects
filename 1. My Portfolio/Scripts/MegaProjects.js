export let mymegaprojects = [
    // {
    //     megaprojectname: "",
    //     megaprojectlanguages: ["Language 1", "Language 2", "Language 3"],
    //     megaprojectdescription: "",
    //     megaprojectlivedemolink: "",
    //     megaprojectgithublink: ""
    // }
];

// Function For My Mega Projects
export function mymegaproject() {
    let mymegaprojectshtmlgenerate = "";

    for (let i = 0; i < mymegaprojects.length; i++) {
        let megaprojects = mymegaprojects[i];
        let proname = megaprojects.megaprojectname;
        let prolanguages = megaprojects.megaprojectlanguages;
        let prodescription = megaprojects.megaprojectdescription;
        let prolivedemolink = megaprojects.megaprojectlivedemolink;
        let progithublink = megaprojects.megaprojectgithublink;

        let languageshtmlgenerate = "";

        for (let j = 0; j < prolanguages.length; j++) {
            let language = prolanguages[j];

            languageshtmlgenerate += `
                <button class="language">
                    <img src="Assets/Mega Project Languages/${language}.svg">
                    <p>${language}</p>
                </button>
            `;
        }

        mymegaprojectshtmlgenerate += `
            <div class="mega-project-card">
                <img src="Assets/My Mega Projects/${i + 1}. ${proname}.png" alt="${proname}"
                    class="mega-project-card-image">
                <div class="mega-project-card-details">
                    <h3 class="mega-project-card-title">${i + 1}. ${proname}</h3>
                    <div class="mega-project-card-languages">${languageshtmlgenerate}</div>
                    <p class="mega-project-card-description">${prodescription}</p>
                    <div class="mega-project-card-buttons">
                        <button onclick="window.open('https://naitikramani-comingsoon.netlify.app', '_blank')">Live Demo</button>
                        <button onclick="window.open('https://naitikramani-comingsoon.netlify.app', '_blank')">Github</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector(".mega-projects-card-sec").innerHTML = mymegaprojectshtmlgenerate;
}