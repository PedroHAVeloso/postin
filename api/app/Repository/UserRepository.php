<?php

namespace App\Repository;

use App\Models\PersonLoginModel;
use App\Models\PersonRegisterModel;
use App\Repository\Database\PostinDatabase;
use App\Repository\Interfaces\IPersonRepository;
use App\Repository\UserSessionRepository;
use PDO;

class UserRepository implements IPersonRepository
{
  /**
   * Retorna falso caso o login não seja realizado, ou um array
   * com um token de acesso e username caso seja realizado.
   */
  public function login(PersonLoginModel $user): array | false
  {
    $db = new PostinDatabase();
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

    if ($query->rowCount() < 1) {
      return false;
    }

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    $sessionRepo = new UserSessionRepository();
    $token = $sessionRepo->createSession($user::$email);

    return ['token' => $token, 'username' => $result[0]['US_USERNAME']];
  }

  public function register(PersonRegisterModel $user): array | false
  {
    $db = new PostinDatabase();
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

    $conn = null;

    if ($query == false) {
      return false;
    }

    $sessionRepo = new UserSessionRepository();
    $token = $sessionRepo->createSession($user::$email);

    return ['token' => $token];
  }
}
