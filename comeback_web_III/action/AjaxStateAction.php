<?php
    require_once("action/CommonAction.php");

    class AjaxStateAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {

            $_data = array();

            $_data["key"] = $_SESSION["key"];
            
            $result = [];

            if (!empty($_POST["action"])){
                
                if ( $_POST["action"] == "PLAY" ){
                    $_data["type"] = $_POST["action"];
                    $_data["uid"] = $_POST["uid"];

                    $result = parent::callAPI("games/action", $_data);
                }
                else {
                    $_data["type"] = $_POST["action"];
                    $result = parent::callAPI("games/action", $_data);
                }
            }
            else
                $result = parent::callAPI("games/state", $_data);
            
            return compact("result");
        }
    }