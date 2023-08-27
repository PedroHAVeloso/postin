<?php

require 'vendor/autoload.php';

use App\Controllers\UserController;
use App\Repository\Database\DatabaseMySQL;

// Recriar o DB:
// DatabaseMySQL::createDb();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');
echo json_encode(routes());

function routes()
{
  $uri = $_SERVER['REQUEST_URI'];
  $uri = parse_url($uri);
  $method = $_SERVER['REQUEST_METHOD'];


  if ($method == 'POST' && $uri['path'] == '/user/login') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    return UserController::login($data);
  }

  if ($method == 'POST' && $uri['path'] == '/user/register') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    return UserController::register($data);
  }

  return 'Invalid Route';
}