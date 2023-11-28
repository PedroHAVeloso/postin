<?php

namespace App\Repository;

use App\Repository\Database\DatabaseInterface;

class RepositoryController
{
  public function __construct(DatabaseInterface $database)
  {
    self::$database = $database;
  }

  public static DatabaseInterface $database;

  public static function connectDb()
  {
    return self::$database::connectDb();
  }
}
