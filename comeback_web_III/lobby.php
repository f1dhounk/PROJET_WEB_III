<?php
	require_once("action/LobbyAction.php");

	$action = new LobbyAction();
	$data = $action->execute();

	require_once("lespartial/partial_lobby/header.php");
?>


<div class="container">

	<form action="" method="POST">

		<input type="hidden" name="training" value="123" >

		<button type="submit" >
			<div class="item1" > 
				<div class="sub-item1">TRAINING</div>
				<div class="img1">
					<img src="img/training/zoro_training.gif" alt="" height="800" width="350">
				</div>
			</div>
		</button>

	</form>
		
	<form action="" method="POST">

		<input type="hidden" name="jouer" value="123" >

		<button>
			<div class="item2" > 
				<div class="sub-item2">FIGHT</div>
				<div class="img2">
					<img src="img/fight/kakashi-kakuzu.gif" alt="" height="700" width="530"> 
				</div>
			</div>
		</button>
		
	</form>

	<form action="" method="POST">

		<input type="hidden" name="note" value="123" >

		<button>
			<div class="item4" > 
				<div class="sub-item4">TAKE NOTE</div>
				<div class="img4">
					<img src="img/notes/note.gif" alt="" height="700" width="530"> 
				</div>
			</div>
		</button>

	</form>

	<form action="" method="POST">

		<input type="hidden" name="leaving" value="123" >

		<button type="submit">
			<div class="item3" > 
				<div class="sub-item3">LEAVING</div> 
				<div  class="img3">
					<img src="img/leaving/sunny_go_leaving.gif" alt="" height="800" width="350"> 
				</div>
			</div>
		</button>

	</form>
	
</div>

<iframe style="width:700px;height:240px;" onload="applyStyles(this)" 
	src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
</iframe>

<?php
	require_once("lespartial/partial_lobby/footer.php");