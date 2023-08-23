<?php

namespace App\Repository\Database;

use PDO;

class DatabaseImpl implements IDatabase
{
  public static function connectDb(): PDO
  {
    return new PDO('sqlite' . self::$dbPath . self::$dbName);
  }

  private static string $dbPath = __DIR__;
  private static string $dbName = '\\postin.sql';

  public static function createDb()
  {
    self::_deleteAndCreateDbFile();
    self::_createUsersTable();
    self::_createSessionsTable();
    self::_createPostsTable();
  }

  private static function _deleteAndCreateDbFile()
  {
    unlink(self::$dbPath . self::$dbName);
    new PDO('sqlite:' . self::$dbPath . self::$dbName);
  }

  private static function _createUsersTable()
  {
    $db = new PDO('sqlite:' . self::$dbPath . self::$dbName);

    $query = <<<QUERY
      CREATE TABLE USER (
        US_ID INTEGER PRIMARY KEY,
        US_USERNAME VARCHAR(100),
        US_PASSWORD VARCHAR(72),
        US_EMAIL VARCHAR(255) UNIQUE
      );
    QUERY;

    $db->exec($query);
  }

  private static function _createSessionsTable()
  {
    $db = new PDO('sqlite:' . self::$dbPath . self::$dbName);

    $query = <<<QUERY
      CREATE TABLE SESSIONS (
        SE_ID INTEGER PRIMARY KEY,
        SE_TOKEN VARCHAR(72),
        SE_US_ID INTEGER,
        FOREIGN KEY (SE_US_ID) REFERENCES USER (US_ID)
      );
    QUERY;

    $db->exec($query);
  }

  private static function _createPostsTable()
  {
    $db = new PDO('sqlite:' . self::$dbPath . self::$dbName);

    $query = <<<QUERY
      CREATE TABLE POSTS (
        PO_ID INTEGER PRIMARY KEY,
        PO_TEXT VARCHAR(255),
        PO_FAVORITES INTEGER,
        PO_US_ID INTEGER,
        FOREIGN KEY (PO_US_ID) REFERENCES USER (US_ID)
      );
    QUERY;

    $db->exec($query);
  }
}
