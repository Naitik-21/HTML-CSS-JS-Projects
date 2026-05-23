export let myskills = [
    // {
    //     skillname: "Language Name",
    //     skilltype: "Language Type"
    // }
];

// Function For My Skills
export function myskill() {
    let myskillshtmlgenerate = "";

    for (let i = 0; i < myskills.length; i++) {
        let skills = myskills[i];
        let skillname = skills.skillname;
        let skilltype = skills.skilltype;

        myskillshtmlgenerate = `
            <div class="technology-card">
                <img src="Assets/My Skills/${skilltype}/${skillname}.svg">
                <p class="text-6">${skillname}</p>
            </div>
        `;

        if (skilltype == "Language") {
            document.querySelector(".technologies-languages-card").innerHTML += myskillshtmlgenerate;
        } else if (skilltype == "Frontend") {
            document.querySelector(".technologies-frontend-card").innerHTML += myskillshtmlgenerate;
        } else if (skilltype == "Backend") {
            document.querySelector(".technologies-backend-card").innerHTML += myskillshtmlgenerate;
        } else if (skilltype == "Database") {
            document.querySelector(".technologies-database-card").innerHTML += myskillshtmlgenerate;
        } else if (skilltype == "DevOps & Cloud") {
            document.querySelector(".technologies-devops-cloud-card").innerHTML += myskillshtmlgenerate;
        }
    }
}