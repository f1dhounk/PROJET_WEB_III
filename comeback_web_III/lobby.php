<?php
	require_once("action/LoginAction.php");
	require_once("action/LobbyAction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("lespartial/partial_lobby/header.php");
?>


<div class="container">

	<a href="training.php">
		<div class="item1" > 
			<div class="sub-item1">TRAINING</div>
			<div class="img1">
				<img src="img/zoro_training.gif" alt="" height="800" width="350">
			</div>
		</div>
	</a>

	<a href="jouer.php">
		<div class="item2" > 
			<div class="sub-item2">FIGHT</div>
			<div class="img2">
				<img src="img/fight/kakashi-kakuzu.gif" alt="" height="650" width="800"> 
			</div>
		</div>
	</a>

	<a href="jouer.php">
		<div class="item3" > 
			<div class="sub-item3">LEAVING</div>
			<div  class="img3">
				<img src="img/leaving/sunny_go_leaving.gif" alt="" height="800" width="350"> 
			</div>
		</div>
	</a>

	<a href="training.php">
		<div class="item1" >
			<img src="img/zoro_training.gif" alt=""></div>
	</a>

	<a href="fighting.php">
		<div class="item2" >
			<img src="img/fight/narutoVSsasuke_fight.gif" alt=""></div>
	</a>

	<a href="fighting.php">
		<div class="item3" >
			<img src="img/leaving/sunny_go_leaving.gif" alt=""> </div>
	</a>

	<div class="item4" >
		<iframe style="width:700px;height:240px;" onload="applyStyles(this)" 
		src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
		</iframe>
	</div>
	
</div>



<iframe style="width:800px;height:240px;" onload="applyStyles(this)" 
	src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
</iframe>


<?php
	require_once("lespartial/partial_lobby/footer.php");