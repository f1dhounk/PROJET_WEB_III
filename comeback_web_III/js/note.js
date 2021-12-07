window.addEventListener("load", () => {

});

function modif( sujet, note, id ) {

    console.log(id);

    let fm = new FormData();

    fm.append("od", id);

    fetch("supp.php", {
        method : "POST", 
        credentials: "include",
        body: fm
    })
    .then( response => response.json())
    .then( data => {
        console.log(data);
    })


    let suge = document.querySelector('.sujet');
    let not = document.querySelector('.note');
    
    suge.getElementsByTagName("input")[0].value = sujet;
    not.getElementsByTagName("textarea")[0].innerText = note;
}