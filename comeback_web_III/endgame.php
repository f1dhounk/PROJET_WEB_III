<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/endgame.css">
</head>
<body>
    
    <div class="endgame" ></div>

    <script>

        fetch("ajax-state.php", {  
            method : "POST",       
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => { 
            
            if ( data == "LAST_GAME_WON" ){
                document.body.style.backgroundImage = "url('img/background/you_win.gif')";
                document.querySelector('.endgame').innerHTML = "YOU WIN !!";
            }
            else{
                document.body.style.backgroundImage = "url('img/background/zenitsu_cry.gif')";
                document.querySelector('.endgame').innerHTML = "YOU LOST :(";
            }
        })
    </script>

</body>
</html>