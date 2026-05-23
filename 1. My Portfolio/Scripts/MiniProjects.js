export let myminiprojects = [
    // {
    //     miniprojectname: "",
    //     miniprojectlanguages: ["Language 1", "Language 2", "Language 3"],
    //     miniprojectdescription: "",
    //     miniprojectlivedemolink: "",
    //     miniprojectgithublink: ""
    // }
];

// Function For My Mini Projects
export function myminiproject() {
    let myminiprojectshtmlgenerate = "";

    for (let i = 0; i < myminiprojects.length; i++) {
        let miniprojects = myminiprojects[i];
        let proname = miniprojects.miniprojectname;
        let prolanguages = miniprojects.miniprojectlanguages;
        let prodescription = miniprojects.miniprojectdescription;
        let prolivedemolink = miniprojects.miniprojectlivedemolink;
        let progithublink = miniprojects.miniprojectgithublink;

        let languageshtmlgenerate = "";

        for (let j = 0; j < prolanguages.length; j++) {
            let language = prolanguages[j];

            languageshtmlgenerate += `
                <button class="language">
                    <img src="Assets/Mini Project Languages/${language}.svg">
                    <p>${language}</p>
                </button>
            `;
        }

        myminiprojectshtmlgenerate += `
            <div class="mini-project-card">
                <img src="Assets/My Mini Projects/${i + 1}. ${proname}.png" alt="${proname}"
                    class="mini-project-card-image">
                <div class="mini-project-card-details">
                    <h3 class="mini-project-card-title">${i + 1}. ${proname}</h3>
                    <div class="mini-project-card-languages">${languageshtmlgenerate}</div>
                    <p class="mini-project-card-description">${prodescription}</p>
                    <div class="mini-project-card-buttons">
                        <button onclick="window.open('https://naitikramani-comingsoon.netlify.app', '_blank')">Live Demo</button>
                        <button onclick="window.open('https://naitikramani-comingsoon.netlify.app', '_blank')">Github</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector(".mini-projects-card-sec").innerHTML = myminiprojectshtmlgenerate;
}