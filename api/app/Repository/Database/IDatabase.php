<?php

namespace App\Repository\Database;

use PDO;

interface IDatabase
{
  public static function connectDb(): PDO;
}
