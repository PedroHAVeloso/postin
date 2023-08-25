<?php

namespace App\Repository;

use App\Models\PersonLoginModel;
use App\Models\PersonRegisterModel;
use App\Repository\Database\DatabaseMySQL;
use App\Repository\Interfaces\IPersonRepository;
use App\Repository\UserSessionRepository;
use PDO;

class UserRepository implements IPersonRepository
{
  public function login(PersonLoginModel $user)
  {
    $db = new DatabaseMySQL();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $script = <<<QUERY
      SELECT * FROM USERS
        WHERE 
        US_EMAIL = :email AND
        US_PASSWORD = :password;
    QUERY;

    $query = $conn->prepare($script);

    $query->bindValue(':email', $user::$email);
    $query->bindValue(':password', $user::$password);

    $query->execute();

    $conn = null;

    if ($query->fetchColumn() < 1) {
      return false;
    }

    $sessionRepo = new UserSessionRepository();
    $token = $sessionRepo->createSession($user::$email);


    return $token;
  }

  public function register(PersonRegisterModel $user)
  {
    $db = new DatabaseMySQL();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $script = <<<QUERY
      INSERT INTO USERS (
        US_USERNAME, US_EMAIL, US_PASSWORD
      ) VALUES (
        :username, :email, :password 
      );
    QUERY;

    $query = $conn->prepare($script);

    $query->bindValue(':username', $user::$username);
    $query->bindValue(':email', $user::$email);
    $query->bindValue(':password', $user::$password);

    $query->execute();

    unset($conn);

    if ($query == false) {
      return false;
    }

    $sessionRepo = new UserSessionRepository();
    $token = $sessionRepo->createSession($user::$email);

    return $token;
  }
}