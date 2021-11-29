<?php
    require_once("action/CommonAction.php");
    require_once("DAO/AnswerDAO.php");

    class IndexAction extends CommonAction {
        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            //$result = AnswerDAO::getAnswer();
            $result = [];
            if(isset($_GET["text"]) && isset($_GET["auteur"])) {
                AnswerDAO::addAnswer($_GET["auteur"], $_GET["text"]);
                header("location:index.php");
				exit;

            }
            
            $result = AnswerDAO::getAnswer();




            return compact("result");
        }
    }