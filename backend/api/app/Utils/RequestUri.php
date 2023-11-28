<?php

namespace App\Utils;

class RequestUri
{
  public static function uri(): string
  {
    $requestUri = $_SERVER['REQUEST_URI'];
    return $requestUri;
  }
}
