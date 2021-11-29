<?php
    require_once("DAO/Connection.php");


    class AnswerDAO {
        public static function getAnswer() {
            $connection = Connection::getConnection();
            $result = [];


            $statement = $connection->prepare("SELECT * FROM stack_answers");
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            while($ligne = $statement->fetch()) {
                $tab = [];

                 $tab["author"] = $ligne["author"];
                 $tab["answer"] = $ligne["answer"];

                 $result[] = $tab;

            }


            return $result;
        }



        public static function addAnswer($author, $answer) {
            $connection = Connection::getConnection();

            $statement = $connection->prepare("INSERT INTO stack_answers(author, answer) VALUES (?, ?)");
            $statement->bindParam(1, $author);
            $statement->bindParam(2, $answer);
            $statement->execute();

        }
    }