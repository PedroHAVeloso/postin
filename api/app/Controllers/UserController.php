<?php

namespace App\Controllers;

use App\Models\PersonLoginModel;
use App\Repository\UserRepository;
use App\Services\PersonService;

class UserController
{
  public static function login($data)
  {
    $repository = new UserRepository();
    $service = new PersonService($repository);

    $logged = $service->login(new PersonLoginModel($data->email, $data->password));

    if ($logged === false) {
      return ['login' => false];
    }

    return ['login' => true, 'token' => $logged];
  }
}