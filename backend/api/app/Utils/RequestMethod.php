<?php

namespace App\Utils;

class RequestMethod
{
  public static function method(): string
  {
    $requestMethod = $_SERVER['REQUEST_METHOD'];
    return $requestMethod;
  }
}
