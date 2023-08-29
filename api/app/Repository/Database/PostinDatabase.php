<?php

namespace App\Repository\Database;

use PDO;

class PostinDatabase implements DatabaseInterface
{
  private static string $dbHost = 'localhost';
  private static string $dbName = 'u399096293_postin';
  private static string $username = 'u399096293_postin';
  private static string $password = 'Postin123';

  public static function connectDb(): PDO
  {
    $pdo = new PDO(
      'mysql:host=' . self::$dbHost . ';dbname=' . self::$dbName,
      self::$username,
      self::$password,
      array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
      )
    );

    return $pdo;
  }
}