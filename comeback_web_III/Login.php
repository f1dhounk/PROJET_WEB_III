<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

    <form action="" method="post" >

        <?php
            if ($data["authent"] == 2) {
                ?> <div>Succes : Connexion fonctionne</div> <?php
            }
            else if ($data["authent"] == 1) {
                ?> <div>Erreur : Connexion erronne</div> <?php
            }
        ?>

        <div id="valid"> 
    
            <div><input type="text" name="username"></div>
    
            <div><input type="password" name="password"></div>

            <div><button type="submit">DEBUTER</button></div>
    
        </div> 
    </form>

<?php
	require_once("partial/footer.php");