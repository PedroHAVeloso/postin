<?php

namespace App\Routes;

use App\Models\PersonLoginModel;
use App\Models\PersonRegisterModel;
use App\Models\PostCreateModel;
use App\Repository\UserPostRepository;
use App\Repository\UserRepository;
use App\Services\PersonService;
use App\Services\PostService;
use App\Utils\Methods;
use App\Utils\PostBody;

/**
 * Rotas de serviços.
 */
class Routes
{
  public static function apiRoutes()
  {
    Router::create(Methods::post, '/api/user/login', function () {
      $repository = new UserRepository();
      $service = new PersonService($repository);

      $body = PostBody::get();
      $person = new PersonLoginModel($body->email, $body->password);
      $login = $service::login($person);

      echo json_encode($login);
    });

    Router::create(Methods::post, '/api/user/register', function () {
      $repository = new UserRepository();
      $service = new PersonService($repository);

      $body = PostBody::get();
      $person = new PersonRegisterModel(
        $body->email,
        $body->password,
        $body->username
      );
      $register = $service::register($person);

      echo json_encode($register);
    });

    Router::create(Methods::post, '/api/post/create', function () {
      $repository = new UserPostRepository();
      $service = new PostService($repository);

      $body = PostBody::get();
      $post = new PostCreateModel(
        $body->text,
        $body->color,
        $body->username,
      );
      $post = $service::create($post);

      echo json_encode($post);
    });

    Router::create(Methods::get, '/api/post/get-all', function () {
      $repository = new UserPostRepository();
      $service = new PostService($repository);

      $posts = $service->getAllPosts();

      echo json_encode($posts);
    });

    Router::create(Methods::post, '/api/post/get-user', function () {
      $repository = new UserPostRepository();
      $service = new PostService($repository);

      $body = PostBody::get();

      $posts = $service->getUserPosts($body->username);

      echo json_encode($posts);
    });

    Router::create(Methods::put, '/api/post/favorite', function () {
      $repository = new UserPostRepository();
      $service = new PostService($repository);

      $body = PostBody::get();

      $favorite = $service->favorite($body->id);

      echo json_encode($favorite);
    });

    Router::create(Methods::put, '/api/post/unfavorite', function () {
      $repository = new UserPostRepository();
      $service = new PostService($repository);

      $body = PostBody::get();

      $unfavorite = $service->unfavorite($body->id);

      echo json_encode($unfavorite);
    });
  }
}