<?php

namespace App\Utils;

class PostBody
{
  public static function get(): array
  {
    $body = file_get_contents('php://input');
    return json_decode($body);
  }
}
