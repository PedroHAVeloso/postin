<?php

namespace App\Router;

use App\Models\PersonLoginModel;
use App\Models\PersonRegisterModel;
use App\Repository\UserRepository;
use App\Services\PersonService;
use App\Utils\Methods;
use App\Utils\PostBody;

/**
 * Rotas de serviços.
 */
class Routes
{
  public static function apiRoutes()
  {
    Router::create(Methods::post, '/user/login', function () {
      $repository = new UserRepository();
      $service = new PersonService($repository);

      $body = PostBody::get();
      $person = new PersonLoginModel($body['email'], $body['password']);
      $login = $service::login($person);

      return json_encode($login);
    });

    Router::create(Methods::post, '/user/register', function () {
      $repository = new UserRepository();
      $service = new PersonService($repository);

      $body = PostBody::get();
      $person = new PersonRegisterModel(
        $body['email'],
        $body['password'],
        $body['username']
      );
      $register = $service::register($person);

      return json_encode($register);
    });

    Router::create(Methods::post, '/post/create', function () {
      
    });
  }
}
