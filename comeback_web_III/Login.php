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
                ?> 
                    <script> 
                    
                        document.body.style.backgroundImage = "url('img/background/gojo_pic.gif')";

                    </script>
                <?php
                
            }
        ?>

        <!-- <div class="magix" >ANIME MAGIX</div> -->

        <div id="valid"> 
            <div><input type="text" name="username" placeholder="USERNAME"></div>
    
            <div><input type="password" name="password" placeholder="PASSWORD"></div>

            <div><button type="submit">S'IDENTIFIER</button></div>
    
        </div> 
    </form>

<?php
	require_once("lespartial/partial_login/footer.php");