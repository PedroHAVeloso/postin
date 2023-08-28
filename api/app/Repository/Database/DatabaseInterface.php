<?php

namespace App\Repository\Database;

use PDO;

interface DatabaseInterface
{
  public static function connectDb(): PDO;
}
