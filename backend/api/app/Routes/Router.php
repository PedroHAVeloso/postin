<?php

namespace App\Routes;

use App\Utils\Methods;
use App\Utils\RequestMethod;
use App\Utils\RequestUri;
use Closure;

/**
 * Criação de rotas.
 */
class Router
{
  /**
   * O último parâmetro deve ser uma função, que será executada caso
   * a url e método atual sejam os indicados na rota criada.
   * 
   * @param Methods $method
   * @param string $route
   * @param Closure $function
   * 
   * @return void
   */
  public static function create(Methods $method, string $route, Closure $function): void
  {
    $requestMethod = RequestMethod::method();
    $requestUri = RequestUri::uri();

    if ($requestMethod != $method->value) {
      return;
    }

    if ($requestUri != $route) {
      return;
    }

    $function();
    return;
  }
}