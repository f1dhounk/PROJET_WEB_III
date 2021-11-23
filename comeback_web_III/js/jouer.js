window.addEventListener("load", () => {
    let count = 0;

    console.log(count);

    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

function add_img( name, vie ) { 
    

	var img = document.createElement('img'); 
    img.src = 'img/cards/wanted.jpg'; 

    var innerDiv = document.createElement('div');
    innerDiv.style.backgroundImage = "url('"+ img.src +"')";
    innerDiv.id = name

    var vie = document.createElement('div');
    var _vie = 
    vie.style

    var cout = document.createElement('div');
    
    
    
    var atq = document.createElement('div');
    var mecha = document.createElement('div');

    document.getElementById('cards').appendChild(innerDiv)
}

const state = () => {

    fetch("ajax-state.php", {   // Il faut créer cette page et son contrôleur appelle 
        method : "POST",       // l’API (games/state)
        credentials: "include"
    })
    .then(response => response.json())
    .then(data => {

        console.log(data); // contient les cartes/état du jeu.

        if ( data != "WAITING" && data != "LAST_GAME_WON" && data != "LAST_GAME_LOST" ){
            document.getElementById('cards').innerHTML = "";

            let count = 0;
            data["hand"].forEach(element => {
                count += 1;
                if ( count <= 8  )
                    add_img(count);
            });

        }
        
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}
