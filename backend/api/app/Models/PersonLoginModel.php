<?php

namespace App\Models;

class PersonLoginModel
{
  public function __construct(string $email, string $password)
  {
    self::$email = $email;
    self::$password = $password;
  }

  public static string $email;
  public static string $password;
}
