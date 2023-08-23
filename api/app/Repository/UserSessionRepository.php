<?php

namespace App\Repository;

use App\Repository\Database\DatabaseImpl;
use App\Repository\Intefaces\ISessionRepository;

class UserSessionRepository implements ISessionRepository
{
  public function createSession(): string
  {
    $db = new DatabaseImpl();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    return '';
  }

  public function deleteSession(): bool
  {
    return false;
  }
}
