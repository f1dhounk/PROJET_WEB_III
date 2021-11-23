<?php
	require_once("action/CommonAction.php");

	class LobbyAction extends CommonAction{

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$cle = array();
			
			$cle["key"] = $_SESSION["key"];
			
			if ( !empty($_POST["training"]) ){

				$cle["type"] = "TRAINING";

				$_SESSION["type"] = $cle["type"];

				$resultat = parent::callAPI("games/auto-match", $cle);


				if ( $resultat == "JOINED_TRAINING" ){
					header("location:training.php"); exit;
				}
				else {
					var_dump($resultat);exit;
				}

			}
			elseif ( !empty($_POST["jouer"]) ){

				$cle["type"] = "PVP";

				$_SESSION["type"] = $cle["type"];

				$resultat = parent::callAPI("games/auto-match", $cle);


				if ( $resultat == "JOINED_PVP" || $resultat == "CREATED_PVP" ){
					header("location:jouer.php"); exit;
				}
				else {
					var_dump($resultat);exit;
				}

			}
			elseif ( !empty($_POST["leaving"]) ){
				
				$resultat = parent::callAPI("signout", $cle);

				if ( $resultat == "SIGNED_OUT" ){
					
					header("location:quit.php"); exit;
				}
				else{
					var_dump($resultat);exit;
				}
			}
		}
	}