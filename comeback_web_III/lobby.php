<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

    <div>Hello World !!!</div>

<?php
	require_once("partial/footer.php");