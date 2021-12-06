<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/AnswerDAO.php");

    class NoteAction extends CommonAction {
        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $result = array();

            
            if(isset($_GET["sujet"]) && isset($_GET["descr"]) && isset($_GET["notes"]) ) {
                
                AnswerDAO::addnotes($_GET["sujet"], $_GET["descr"], $_GET["notes"] );
                
                header("location:note.php");
				exit;
            }

            if( isset($_POST["id"]) ){
                AnswerDAO::suppnotes( $_POST["id"] ); 
            }

            if ( isset($_POST["od"]) ){
                var_dump($_POST["od"]);
                AnswerDAO::suppnotes( $_POST["od"] ); 
            }
            
            $result = AnswerDAO::getnotes();

            return compact("result");
        }
    }