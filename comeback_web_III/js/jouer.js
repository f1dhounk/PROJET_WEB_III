window.addEventListener("load", () => {
    let count = 0;

    console.log(count);

    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
    
    // document.querySelector("#ip").onclick  = function (e) {
    //     count = count + 1
    //     console.log(count);
    //     if ( count <= 5 )
    //         add_img(count);
    // }


});

function add_img( name ) { 

	var img = document.createElement('img'); 
    img.src = 'img/cards/dummy.jpg'; 

    var innerDiv = document.createElement('div');
    innerDiv.id = name

    document.getElementById('cards').appendChild(innerDiv)

    var div = document.getElementById(name)

    div.style.backgroundImage = "url('"+ img.src +"')";
}

const state = () => {

    fetch("ajax-state.php", {   // Il faut créer cette page et son contrôleur appelle 
        method : "POST",       // l’API (games/state)
        credentials: "include"
    })
    .then(response => response.json())
    .then(data => {
        //console.log(data); // contient les cartes/état du jeu.

        let array = data["hand"];
        console.log(array);
        console.log( array.length )
        let count = 0;
        data["hand"].forEach(element => {
            count += 1;
            add_img(count);
        });

        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}

// window.addEventListener("load", () => {
//     setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
// });
