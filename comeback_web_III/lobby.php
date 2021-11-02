<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("lespartial/partial_lobby/header.php");
?>

<?php
	require_once("lespartial/partial_lobby/footer.php");