let i = 0;
let txt = 'Il etait une fois, dans une contree lointaine un village paisible. Tout le monde y vivait bien. Mais un jour des monstre apparurent dans le marecage. Les villageois ont fait alors appele au heros pour les chasser.';
let speed = 75;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("texte").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

let spriteList = [];
window.addEventListener("load", () => {
    spriteList.push(new Ecran("ecran_noir"));
    spriteList.push(new steamMan());
    spriteList.push(new woodCutter());
    spriteList.push(new graveRobber());

    tick();
})

const tick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        const element = spriteList[i];
        element.tick();
    }


    window.requestAnimationFrame(tick);
}