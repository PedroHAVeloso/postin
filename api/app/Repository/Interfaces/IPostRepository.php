<?php

namespace App\Repository\Interfaces;

use App\Models\PostCreateModel;

interface IPostRepository
{
  public function create(PostCreateModel $post): bool;
  public function getAllPosts(): array | false;
  public function getUserPosts(): array;
  public function favorite(): bool;
  public function unfavorite(): bool;
  public function delete(): bool;
}
