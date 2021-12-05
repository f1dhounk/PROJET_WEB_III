window.addEventListener("load", () => {

});

function modif( sujet, descr, note, id ) {

    let suge = document.querySelector('.sujet');
    let destro = document.querySelector('.descr');
    let not = document.querySelector('.note');
    
    suge.getElementsByTagName("input")[0].value = sujet;
    destro.getElementsByTagName("input")[0].value = descr;
    not.getElementsByTagName("textarea")[0].innerText = note;

    let formdata = new FormData();
    
    formdata.append("_id", id);

    fetch("suppr.php", {   
        method : "POST",       
        credentials: "include",
        body: formdata
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })  
}