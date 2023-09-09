<?php

namespace App\Models;

class PostCreateModel
{
  public function __construct(string $text, string $color, string $username)
  {
    self::$text = $text;
    self::$color = $color;
    self::$username = $username;
  }

  public static string $text;
  public static string $color;
  public static string $username;
}
