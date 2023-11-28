<?php

namespace App\Services;

use App\Models\PostCreateModel;
use App\Repository\Interfaces\IPostRepository;

class PostService
{
  public function __construct(IPostRepository $repository)
  {
    self::$repository = $repository;
  }

  private static IPostRepository $repository;

  public static function getAllPosts()
  {
    $posts = self::$repository->getAllPosts();

    if ($posts == false) {
      return ['get' => false];
    }

    $newPosts = [];

    foreach ($posts as $post) {
      array_push(
        $newPosts,
        [
          'id' => $post['PO_ID'],
          'text' => $post['PO_TEXT'],
          'favorites' => $post['PO_FAVORITES'],
          'color' => $post['PO_COLOR'],
          'username' => $post['US_USERNAME'],
        ],
      );
    }

    return [
      'get' => true,
      'posts' => $newPosts,
    ];
  }

  public static function create(PostCreateModel $post)
  {
    $create = self::$repository->create($post);

    if ($create == false) {
      return ['create' => false];
    }

    return [
      'create' => true,
    ];
  }

  public static function getUserPosts(string $username)
  {
    $posts = self::$repository->getUserPosts($username);

    if ($posts == false) {
      return ['get' => false];
    }

    $newPosts = [];

    foreach ($posts as $post) {
      array_push(
        $newPosts,
        [
          'id' => $post['PO_ID'],
          'text' => $post['PO_TEXT'],
          'favorites' => $post['PO_FAVORITES'],
          'color' => $post['PO_COLOR'],
          'username' => $post['US_USERNAME'],
        ],
      );
    }

    return [
      'get' => true,
      'posts' => $newPosts,
    ];
  }

  public static function favorite(int $id)
  {
    $favorite = self::$repository->favorite($id);

    if ($favorite == false) {
      return ['favorite' => false];
    }

    return ['favorite' => true];
  }

  public static function unfavorite(int $id)
  {
    $unfavorite = self::$repository->unfavorite($id);

    if ($unfavorite == false) {
      return ['unfavorite' => false];
    }

    return ['unfavorite' => true];
  }
}