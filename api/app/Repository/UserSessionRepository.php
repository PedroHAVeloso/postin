<?php

namespace App\Repository;

use App\Repository\Database\DatabaseSQLite;
use App\Repository\Interfaces\ISessionRepository;
use App\Utils\GenerateStrings;

class UserSessionRepository implements ISessionRepository
{
  public function createSession(string $email): string
  {
    $db = new DatabaseSQLite();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $token = GenerateStrings::aleatory(60);

    $script = <<<QUERY
      INSERT INTO SESSIONS (
        SE_TOKEN, SE_US_ID
      ) VALUES (
        :token, (SELECT US_ID FROM USERS WHERE US_EMAIL = :email)
      );
    QUERY;

    $query = $conn->prepare($script);

    $query->bindValue(':token', $token);
    $query->bindValue(':email', $email);

    $query->execute();

    return $token;
  }

  public function deleteSession($a): bool
  {
    return false;
  }
}
