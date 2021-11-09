<?php
	require_once("action/LoginAction.php");
	require_once("action/LobbyAction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("lespartial/partial_lobby/header.php");
?>


<div class="container">
	
	<input type="image" src="img/zoro_training.gif" id="training" height="800" width="350"/>

	<input type="image" src="img/fight/narutoVSsasuke_fight.gif" id="fighting" height="650" width="800"/>

	<input type="image" src="img/leaving/sunny_go_leaving.gif" id="leaving" height="800" width="350"/>

</div>



<iframe style="width:700px;height:240px;" onload="applyStyles(this)" 
	src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
</iframe>


<?php
	require_once("lespartial/partial_lobby/footer.php");