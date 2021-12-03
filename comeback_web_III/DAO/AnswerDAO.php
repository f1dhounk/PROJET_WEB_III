<?php
    require_once("DAO/Connection.php");


    class AnswerDAO {

        public static function addnotes($sujet, $descr, $notes) {
            $connection = Connection::getConnection();

            $statement = $connection->prepare("INSERT INTO take_notes(sujet, descr, notes) VALUES (?, ?, ?)");
            $statement->bindParam(1, $sujet);
            $statement->bindParam(2, $desc);
            $statement->bindParam(3, $notes);
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

                $tab["sujet"] = $ligne["sujet"];
                $tab["descr"] = $ligne["descr"];
                $tab["notes"] = $ligne["notes"];

                $result[] = $tab;
            }

            return $result;
        }
    }