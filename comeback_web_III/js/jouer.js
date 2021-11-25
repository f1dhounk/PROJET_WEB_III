window.addEventListener("load", () => {
    let count = 1;

    console.log(count);

    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

function creerCarte( name, vie, cout, atk, mecha ) { 
	var img1 = document.createElement('img'); 
    img1.src = 'img/cards/wanted.jpg'; 

    var img_vie = document.createElement('img');
    img_vie = 'img/heart_2_bg.png';

    var img_cout = document.createElement('img');
    img_cout = 'img/WLotus_bg.png';

    var img_atk = document.createElement('img');
    img_atk = 'img/akatsuki.png';


    var innerDiv = document.createElement('div');
    innerDiv.style.backgroundImage = "url('"+ img1.src +"')";
    innerDiv.id = name;

    var _vie = document.createElement('div');
    _vie.style.backgroundImage = "url('"+ img_vie +"')";
    _vie.id = "vie";
    var _vieContent = document.createElement('h4');
    _vieContent.textContent = vie;
    _vie.appendChild(_vieContent);

    var _cout = document.createElement('div');
    _cout.style.backgroundImage = "url('"+ img_cout +"')";
    _cout.id = "cout";
    var _coutContent = document.createElement('h4');
    _coutContent.textContent = cout;
    _cout.appendChild(_coutContent);
    
    var _atk = document.createElement('div');
    _atk.style.backgroundImage = "url('"+ img_atk +"')";
    _atk.id = "atk";
    var _atkContent = document.createElement('h4');
    _atkContent.textContent = atk;
    _atk.appendChild(_atkContent);

    var _mecha = document.createElement('div');
    _mecha.id = "mecha";
    var _mechaContent = document.createElement('h6');
    _mechaContent.textContent = mecha;
    _mecha.appendChild(_mechaContent);

    innerDiv.appendChild(_vie);
    innerDiv.appendChild(_cout);
    innerDiv.appendChild(_atk);
    innerDiv.appendChild(_mecha);

    innerDiv.onclick = function() {
        jouerCarte( "PLAY", innerDiv.id );
    }

    document.getElementById('cards').appendChild(innerDiv);
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
                let uid = element.uid;
                let cout = element.cost;
                let vie = element.hp;
                let atk = element.atk;
                let mecha = element.mechanics[0];
          
                count += 1;
                if ( count <= 8  )
                    creerCarte(uid, vie, cout, atk, mecha);
            });
        }
        
        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}

function jouerCarte( action, id ){
    let formdata = new FormData();

    formdata.append("uid", id);
    formdata.append("action", action);

    fetch("ajax-state.php", {   
        method : "POST",       
        credentials: "include",
        body: formdata
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

}
