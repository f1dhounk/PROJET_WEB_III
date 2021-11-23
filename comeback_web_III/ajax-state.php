<?php
    require_once("action/AjaxStateAction.php");

    $action = new AjaxStateAction();
    $data = $action->execute();

    // encodage en json des donnees recu chez AjaxAction 
    echo json_encode($data["result"]);