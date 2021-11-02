<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

    <form action="" method="post" >
        <div id="valid"> 
    
            <div> <input type="text" name="nom" placeholder="Utilisateur" id="Utilisateur"> </div>
    
            <div style="margin-top: 12.5px; margin-bottom: 12.5px;">
                <input type="password" name="nom" placeholder="Mot_de_passe" id="Mot_de_passe">
            </div>

            <div> <button type="submit">DEBUTER</button> </div>
    
        </div> 
    </form>

<?php
	require_once("partial/footer.php");