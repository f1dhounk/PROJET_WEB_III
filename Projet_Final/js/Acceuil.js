const validate = () => {
    let success = true;

    if (document.querySelector("#Utilisateur").value != "joueur" ||
        document.querySelector("#Mot_de_passe").value != "secret") {
        success = false;

        alert("Désolé, informations erronées");
        document.querySelector("#Utilisateur").value = "";
        document.querySelector("#Mot_de_passe").value = "";
    }

    return success;
}

let spriteList = [];
window.addEventListener("load", () => {
    spriteList.push(new swamp5("swamp_5"));
    spriteList.push(new swamp5_1("swamp_5.1"));
    spriteList.push(new swamp4("swamp_4"));
    spriteList.push(new swamp4_1("swamp_4.1"));
    spriteList.push(new swamp3("swamp_3"));
    spriteList.push(new swamp3_1("swamp_3.1"));
    spriteList.push(new swamp2("swamp_2"));
    spriteList.push(new swamp2_1("swamp_2.1"));

    tick();
})

const tick = () => {
    for ( let i = 0; i < spriteList.length; i++ ){
        const element = spriteList[i];
        element.tick();
    }

    window.requestAnimationFrame(tick);
}