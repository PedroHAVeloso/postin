<?php

namespace App\Repository;

use App\Repository\Database\IDatabase;

class RepositoryController
{
  public function __construct(IDatabase $database)
  {
    self::$database = $database;
  }

  public static IDatabase $database;

  public static function connectDb()
  {
    return self::$database::connectDb();
  }
}
