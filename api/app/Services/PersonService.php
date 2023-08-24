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

  public function login(PersonLoginModel $person)
  {
    return self::$repository->login($person);
  }

  public function register(PersonRegisterModel $person)
  {
    return self::$repository->register($person);
  }
}