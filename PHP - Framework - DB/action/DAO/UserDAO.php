<?php
    require_once("action/DAO/Connection.php");

    class UserDAO {
        public static function authenticate($username, $password) {
            $connection = Connection::getConnection();
            $result = null;

            $statement = $connection->prepare("SELECT * FROM users WHERE username = ?");
            $statement->bindParam(1, $username);
            $statement->setFetchMode(PDO::FETCH_ASSOC); // $row["first_name"]
            $statement->execute();

            if ($row = $statement->fetch()) {
                if (password_verify($password, $row["password"])) {
                    $result = [];
                    $result["VISIBILITY"] = $row["visibility"];
                }
            }

            return $result;
        }

        public static function updateProfile($username, $firstName) {
            $connection = Connection::getConnection();
        }
    }