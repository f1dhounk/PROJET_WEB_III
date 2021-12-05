window.addEventListener("load", () => {

});

function modif( sujet, descr, note ) {

    let suge = document.querySelector('.sujet');
    let destro = document.querySelector('.descr');
    let not = document.querySelector('.note');
    
    suge.getElementsByTagName("input")[0].value = sujet;
    destro.getElementsByTagName("input")[0].value = descr;
    not.getElementsByTagName("textarea")[0].innerText = note;
}