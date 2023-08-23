<?php

namespace App\Repository\Interfaces;

use App\Models\PersonLoginModel;
use App\Models\PersonRegisterModel;

interface IPersonRepository
{
  public function login(PersonLoginModel $person);
  public function register(PersonRegisterModel $person);
}
