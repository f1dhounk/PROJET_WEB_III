window.addEventListener("load", () => {
    let count = 1;

    console.log(count);

    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

function creerCarte( name, vie, cout, atk, mecha, bourse, interface ) { 
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

    
    

    if ( interface == "HAND" ){
        innerDiv.onclick = function() { jouerCarte( "PLAY", innerDiv.id ); }

        if ( bourse >= cout ){
            innerDiv.style.borderStyle = "solid";
            innerDiv.style.borderColor = "red"
        }
        document.getElementById('cards').appendChild(innerDiv);
    }  
    else if ( interface == "MY_BOARD" ){
        innerDiv.onclick = function() { jouerCarte( "ATTACK", innerDiv.id ); }
        // CONTINUE ICI POUR L'ATTAQUE

        document.querySelector(".myBoard").appendChild(innerDiv);
    }
    else if ( interface == "OPP_BOARD" )
        document.querySelector(".OppBoard").appendChild(innerDiv);
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
           
            let health = data["hp"];
            let money = data["mp"];
            let cards = data["remainingCardsCount"];
            updateMyCore( health, money, cards );

            let opp_hand = data["opponent"]["handSize"];
            let opp_health = data["opponent"]["hp"];
            let opp_name = data["opponent"]["username"];
            let opp_money = data["opponent"]["mp"];
            let opp_deck = data["opponent"]["remainingCardsCount"];
            updateOppCore( opp_hand, opp_health, opp_name, opp_money, opp_deck );

            let count = 0;
            data["hand"].forEach(element => {
                let uid = element.uid;
                let cout = element.cost;
                let vie = element.hp;
                let atk = element.atk;
                let mecha = element.mechanics[0];
          
                count += 1;
                if ( count <= 8  )
                    creerCarte(uid, vie, cout, atk, mecha, money, "HAND"); 
            });

            updateBoard(data);

            if ( data["yourTurn"] ){
                document.getElementById('ip2').style.borderStyle = "solid"
                document.getElementById('ip2').style.borderColor = "green"
            }
            else {
                document.getElementById('ip2').style.borderStyle = "solid"
                document.getElementById('ip2').style.borderColor = "red"
            }
                
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

function updateMyCore( health, money, cards ) {
    let HealthCore = document.querySelector('.f_sub1_item1');
    let MoneyCore = document.querySelector('.f_sub2_item1');
    let CardCore = document.querySelector('.f_sub3_item1');

    HealthCore.getElementsByTagName("h4")[0].innerHTML = health;
    MoneyCore.getElementsByTagName("h4")[0].innerHTML = money;
    CardCore.getElementsByTagName("h4")[0].innerHTML = cards;
    
}

function updateOppCore( hand, health, name, money, deck ){
    let Hand = document.querySelector('.h_item1');
    let HealthCore = document.querySelector('.h_sub1_item2');
    let Name = document.querySelector('.h_sub2_item2');
    let MoneyCore = document.querySelector('.h_sub3_item2');
    let Deck = document.querySelector('.h_item3');

    Hand.getElementsByTagName("h1")[0].innerHTML = hand;
    HealthCore.getElementsByTagName("h1")[0].innerHTML = health;
    Name.getElementsByTagName("h4")[0].innerHTML = name;
    MoneyCore.getElementsByTagName("h1")[0].innerHTML = money;
    Deck.getElementsByTagName("h1")[0].innerHTML = deck;
}

function updateBoard( data ){
    let money = data["mp"];

    document.querySelector('.OppBoard').innerHTML = "";
    document.querySelector('.myBoard').innerHTML = "";
 
    if ( data["board"].length != 0 ){
        data["board"].forEach(element => {
            let uid = element.uid;
            let cout = element.cost;
            let vie = element.hp;
            let atk = element.atk;
            let mecha = element.mechanics[0];
        
            creerCarte(uid, vie, cout, atk, mecha, money, "MY_BOARD");
        });
    }

    if ( data["opponent"]["board"].length != 0 ){
        data["opponent"]["board"].forEach(element => {
            let uid = element.uid;
            let cout = element.cost;
            let vie = element.hp;
            let atk = element.atk;
            let mecha = element.mechanics[0];
        
            creerCarte(uid, vie, cout, atk, mecha, money, "OPP_BOARD");
        });
    }
}
