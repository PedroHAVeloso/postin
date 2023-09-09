<?php

namespace App\Repository\Interfaces;

interface ISessionRepository
{
  public function createSession(string $id): string;
  public function deleteSession(string $id): bool;
}