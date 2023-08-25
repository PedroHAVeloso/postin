<?php

namespace App\Repository\Database;

use PDO;

class DatabaseMySQL implements IDatabase
{
  public static function connectDb(): PDO
  {
    $pdo = new PDO(
      'mysql:host=localhost;dbname=' . self::$dbName, self::$username, self::$password,
      array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
      )
    );

    return $pdo;
  }

  private static string $dbName = 'postin';
  private static string $username = 'root';
  private static string $password = 'root';

  public static function createDb()
  {
    self::_createUsersTable();
    self::_createSessionsTable();
    self::_createPostsTable();
  }

  private static function _createUsersTable()
  {
    $db = new PDO('mysql:host=localhost;dbname=' . self::$dbName, self::$username, self::$password);

    $query = <<<QUERY
      CREATE TABLE USERS (
        US_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        US_USERNAME VARCHAR(100),
        US_PASSWORD VARCHAR(72),
        US_EMAIL VARCHAR(255) UNIQUE
      );
    QUERY;

    $db->exec($query);

    $db = null;
  }

  private static function _createSessionsTable()
  {
    $db = new PDO('mysql:host=localhost;dbname=' . self::$dbName, self::$username, self::$password);

    $query = <<<QUERY
      CREATE TABLE SESSIONS (
        SE_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        SE_TOKEN VARCHAR(72),
        SE_US_ID INTEGER,
        FOREIGN KEY (SE_US_ID) REFERENCES USERS (US_ID)
      );
    QUERY;

    $db->exec($query);

    $db = null;
  }

  private static function _createPostsTable()
  {
    $db = new PDO('mysql:host=localhost;dbname=' . self::$dbName, self::$username, self::$password);

    $query = <<<QUERY
      CREATE TABLE POSTS (
        PO_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
        PO_TEXT VARCHAR(255),
        PO_FAVORITES INTEGER,
        PO_US_ID INTEGER,
        FOREIGN KEY (PO_US_ID) REFERENCES USERS (US_ID)
      );

      INSERT INTO USERS (US_USERNAME, US_PASSWORD, US_EMAIL) VALUES ('pedro', 'pedro', 'pedro');
    QUERY;

    $db->exec($query);

    $db = null;
  }
}