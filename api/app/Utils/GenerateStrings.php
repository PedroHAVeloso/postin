<?php

namespace App\Utils;

class GenerateStrings
{
  public static function aleatory(int $length): string
  {
    $alphaNumeric = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $alphaNumericLength = strlen($alphaNumeric);
    $string = '';

    for ($i = 0; $i < $length; $i++) {
      $string .= $alphaNumeric[random_int(0, $alphaNumericLength - 1)];
    }

    return $string;
  }
}