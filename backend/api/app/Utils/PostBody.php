<?php

namespace App\Utils;

class PostBody
{
  public static function get(): object
  {
    $body = file_get_contents('php://input');
    return json_decode($body);
  }
}