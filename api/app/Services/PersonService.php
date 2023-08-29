<?php

namespace App\Services;

use App\Models\PersonLoginModel;
use App\Models\PersonRegisterModel;
use App\Repository\Interfaces\IPersonRepository;

class PersonService
{
  public function __construct(IPersonRepository $repository)
  {
    self::$repository = $repository;
  }

  private static IPersonRepository $repository;

  public static function login(PersonLoginModel $person)
  {
    $login = self::$repository->login($person);

    if ($login == false) {
      return ['login' => false];
    }

    return [
      'login' => true,
      'username' => $login['username'],
      'token' => $login['token'],
    ];
  }

  public static function register(PersonRegisterModel $person)
  {
    $register = self::$repository->register($person);

    if ($register == false) {
      return ['register' => false];
    }

    return [
      'register' => true,
      'token' => $register['token'],
    ];
  }
}