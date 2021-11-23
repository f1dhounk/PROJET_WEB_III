<?php
    require_once("action/CommonAction.php");

    class AjaxStateAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {

            $_data = [];

            $_data["key"] = $_SESSION["key"];

            $result = parent::callAPI("games/state", $_data);
            
            return compact("result");
        }
    }