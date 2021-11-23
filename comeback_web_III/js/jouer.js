window.addEventListener("load", () => {
    let count = 1;

    console.log(count);

    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

function add_img( name, vie ) { 
    

	var img1 = document.createElement('img'); 
    img1.src = 'img/cards/wanted.jpg'; 

    var img_vie = document.createElement('img');
    img_vie = 'img/heart_2_bg.png'

    var innerDiv = document.createElement('div');
    innerDiv.style.backgroundImage = "url('"+ img.src +"')";
    innerDiv.id = name;

    var _vie = document.createElement('div');
    _vie.style.backgroundImage = "url('"+ img_vie +"')";
    _vie.className = "vie";
    var _vieContent = document.createElement('h4');
    _vieContent.textContent(vie);
    _vie.appendChild(_vieContent);

    // var cout = document.createElement('div');
    // _vie.className = "vie";
    // var _vieContent = document.createElement('h4');
    // _vieContent.textContent(vie);
    // _vie.appendChild(_vieContent);
    
    // var atq = document.createElement('div');
    // _vie.className = "vie";
    // var _vieContent = document.createElement('h4');
    // _vieContent.textContent(vie);
    // _vie.appendChild(_vieContent);

    // var mecha = document.createElement('div');
    // _vie.className = "vie";
    // var _vieContent = document.createElement('h4');
    // _vieContent.textContent(vie);
    // _vie.appendChild(_vieContent);

    innerDiv.appendChild(_vie);
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
                let vie = element.hp;
                console.log(vie);
                count += 1;
                if ( count <= 8  )
                    add_img(count, vie);
            });

        }
        
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}
