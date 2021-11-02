<?php
    require_once("action/CommonAction.php");

    class ContactAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_USER);
        }

        protected function executeAction() {

            return [];
        }
    }