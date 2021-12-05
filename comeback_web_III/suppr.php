<?php
    require_once("action/NoteAction.php");

    $action = new NoteAction();
    $data = $action->execute();

    // encodage en json des donnees recu chez AjaxAction 
    echo json_encode($data["result"]);