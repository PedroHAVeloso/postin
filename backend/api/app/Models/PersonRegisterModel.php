<?php

namespace App\Models;

class PersonRegisterModel
{
  public function __construct(string $email, string $password, string $username)
  {
    self::$email = $email;
    self::$password = $password;
    self::$username = $username;
  }

  public static string $email;
  public static string $username;
  public static string $password;
}
