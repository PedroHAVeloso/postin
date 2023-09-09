<?php

use App\Routes\Routes;

require 'vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Content-Type: application/json');

try {
  Routes::apiRoutes();
} catch (Exception $exc) {
  echo $exc;
}