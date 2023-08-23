<?php

namespace App\Repository\Intefaces;

interface ISessionRepository
{
  public function createSession(): string;
  public function deleteSession(): bool;
}
