<?php
    require_once("action/DAO/Connection.php");


    class AnswerDAO {

        public static function addnotes($sujet, $notes) {
            $connection = Connection::getConnection();

            $statement = $connection->prepare("INSERT INTO take_notes(sujet, notes) VALUES (?, ?)");
            $statement->bindParam(1, $sujet);
            $statement->bindParam(2, $notes);
            $statement->execute();
        }

        public static function getnotes() {
            $connection = Connection::getConnection();
            $result = array();


            $statement = $connection->prepare("SELECT * FROM take_notes");
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            while($ligne = $statement->fetch()) {
                $tab = array();

                $tab["id"] = $ligne["id"];
                $tab["temp"] = $ligne["_date"];
                $tab["sujet"] = $ligne["sujet"];
                $tab["notes"] = $ligne["notes"];

                $result[] = $tab;
            }

            return $result;
        }

        public static function suppnotes( $id ){
            $connection = Connection::getConnection();

            $statement = $connection->prepare("DELETE FROM take_notes WHERE id = ?");
            $statement->bindParam(1, $id);
            $statement->execute();
        }
    }