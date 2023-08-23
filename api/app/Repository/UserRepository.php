<?php

namespace App\Repository;

use App\Models\PersonLoginModel;
use App\Models\PersonRegisterModel;
use App\Repository\Database\DatabaseImpl;
use App\Repository\Interfaces\IPersonRepository;

class UserRepository implements IPersonRepository
{
  public function login(PersonLoginModel $user)
  {
    $db = new DatabaseImpl();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $script = <<<QUERY
      SELECT * FROM USERS
        WHERE 
        EMAIL = :email AND
        PASSWORD = :password;
    QUERY;

    $query = $conn->prepare($script);

    $query->bindValue(':email', $user::$email);
    $query->bindValue(':password', $user::$password);

    $query->execute();

    if ($query->rowCount() < 1) {
      return false;
    }



    unset($conn);
  }

  public function register(PersonRegisterModel $user)
  {
  }
}
