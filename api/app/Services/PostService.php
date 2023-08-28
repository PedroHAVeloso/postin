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
      $newPosts += [
        'id' => $post['PO_ID'],
        'text' => $post['PO_TEXT'],
        'favorites' => $post['PO_FAVORITES'],
        'color' => $post['PO_COLOR'],
        'username' => $post['US_USERNAME'],
      ];
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
}
