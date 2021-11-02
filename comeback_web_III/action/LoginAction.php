<?php
	require_once("action/CommonAction.php");

	class LoginAction extends CommonAction{

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			
			$authent = 0;

			if (isset($_POST["username"])) {

				$data = [];
				$data["username"] = $_POST["username"];
				$data["password"] = $_POST["password"];

				$result = parent::callAPI("signin", $data);
				

				if ($result == "INVALID_USERNAME_PASSWORD") {
					$authent = 1;

					

				}
				else {
					// Pour voir les informations retournées : var_dump($result);exit;
					$key = $result->key;
					header("location:lobby.php"); exit; 
					$authent = 2;
				}

			}
			
			return compact("authent");
		}
	}