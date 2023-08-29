<?php

namespace App\Repository\Interfaces;

use App\Models\PostCreateModel;

interface IPostRepository
{
  public function create(PostCreateModel $post): bool;
  public function getAllPosts(): array|false;
  public function getUserPosts(string $username): array|false;
  public function favorite(int $id): bool;
  public function unfavorite(int $id): bool;
  public function delete(): bool;
}