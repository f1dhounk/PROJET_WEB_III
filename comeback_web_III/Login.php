<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("lespartial/partial_login/header.php");
?>

    <form action="" method="post" >

        <?php
            if ($data["tab"]["reponse"] == 2) {
                ?> <div>Succes : Connexion fonctionne</div> <?php
            }
            else if ($data["tab"]["reponse"] == 1) {
                ?> <div>Erreur : Connexion erronne</div> 
                
                <script> 
                
                    document.body.style.backgroundImage = "url('zenitsu_cry.gif')";

                </script>
                <?php
                
            }
        ?>

        <div id="valid"> 
    
            <div><input type="text" name="username" placeholder="USERNAME"></div>
    
            <div><input type="password" name="password" placeholder="PASSWORD"></div>

            <div><button type="submit">S'IDENTIFIER</button></div>
    
        </div> 
    </form>

<?php
	require_once("lespartial/partial_login/footer.php");