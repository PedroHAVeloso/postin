<?php

namespace App\Repository;

use App\Models\PostCreateModel;
use App\Repository\Database\PostinDatabase;
use App\Repository\Interfaces\IPostRepository;

use PDO;

class UserPostRepository implements IPostRepository
{
  public function create(PostCreateModel $post): bool
  {
    $db = new PostinDatabase();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $script = <<<QUERY
      INSERT INTO POSTS (
        PO_TEXT, PO_COLOR, PO_US_ID
      ) VALUES (
        :text, :color, (SELECT US_ID FROM USERS WHERE US_USERNAME = :username)
      );
    QUERY;

    $query = $conn->prepare($script);

    $query->bindValue(':text', $post::$text);
    $query->bindValue(':color', $post::$color);
    $query->bindValue(':username', $post::$username);

    $query->execute();

    $conn = null;

    if ($query == false) {
      return false;
    }

    return true;
  }

  public function getAllPosts(): array|false
  {
    $db = new PostinDatabase();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $script = <<<QUERY
      SELECT * FROM POSTS, USERS WHERE PO_US_ID = US_ID ORDER BY PO_ID DESC;
    QUERY;

    $query = $conn->prepare($script);
    $query->execute();

    $conn = null;

    if ($query == false) {
      return false;
    }

    return $query->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getUserPosts(string $username): array|false
  {
    $db = new PostinDatabase();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $script = <<<QUERY
      SELECT * FROM POSTS, USERS WHERE PO_US_ID = (SELECT US_ID FROM USERS WHERE US_USERNAME = :username)
      AND US_ID = PO_US_ID ORDER BY PO_ID DESC;
    QUERY;

    $query = $conn->prepare($script);
    $query->bindValue(':username', $username);
    $query->execute();

    $conn = null;

    if ($query == false) {
      return false;
    }

    return $query->fetchAll(PDO::FETCH_ASSOC);
  }

  public function favorite(int $id): bool
  {
    $db = new PostinDatabase();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $script = <<<QUERY
      UPDATE POSTS SET PO_FAVORITES = PO_FAVORITES + 1 
      WHERE PO_ID = :id;
    QUERY;

    $query = $conn->prepare($script);
    $query->bindValue(':id', $id);
    $query->execute();

    $conn = null;

    if ($query == false) {
      return false;
    }

    return true;
  }

  public function unfavorite(int $id): bool
  {
    $db = new PostinDatabase();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $script = <<<QUERY
      UPDATE POSTS SET PO_FAVORITES = PO_FAVORITES - 1 
      WHERE PO_ID = :id;
    QUERY;

    $query = $conn->prepare($script);
    $query->bindValue(':id', $id);
    $query->execute();

    $conn = null;

    if ($query == false) {
      return false;
    }

    return true;
  }

  public function delete(): bool
  {
    $db = new PostinDatabase();
    $repo = new RepositoryController($db);
    $conn = $repo::connectDb();

    $conn = null;
    return true;
  }
}