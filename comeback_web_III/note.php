<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOTE</title>
    <link rel="stylesheet" href="css/note.css">
</head>
<body>
    
    <div class="save" ></div>

    <div class="write" >
        <h1> NOTES / COMMENTAIRES </h1>

        <form action="" method="GET" >

            <div class="commentaire">
                
                <div class="sujet">
                    <input type="text" name="sujet" required placeholder="Votre sujet" style="width: 900px; height: 50px;" >
                </div>

                <div class="description">
                    <input name="description" required placeholder="Votre description" style="width: 900px; height: 50px;" >
                </div>
                
                <div class="note">
                    <textarea name="note" required placeholder="Vos notes" style="width: 900px; height: 100px;" ></textarea>
                </div>

                <div class="send-btn">
                    <a href="envoyer=true"><button>Envoyer</button></a>
                </div>

            </div>

        </form>

    </div>

</body>
</html>