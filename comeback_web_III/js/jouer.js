window.addEventListener("load", () => {
    let count = 0
    
    document.querySelector("#ip").onkeyup = function (e) {
        count = count + 1
        console.log(count);
        if ( count <= 5 )
            add_img(count);
    }
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