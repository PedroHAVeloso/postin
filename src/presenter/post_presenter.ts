import PostCreateModel from "../data/models/post_create_model";
import PostRepository from "../data/repositories/post_repository";
import Cookies from 'js-cookie';

const postRepository = new PostRepository();

export default class PostPresenter {
  public async create(post: PostCreateModel) {
    const username = Cookies.get('auth-username');

    const create = await postRepository.create(new PostCreateModel(
      post.text,
      username ?? '',
      post.color
    ));

    if (create) {
      return true;
    }

    return false;
  }

  public async getAllPosts() {
    const posts = await postRepository.getAllPosts();

    if (posts == false) {
      return false;
    }

    let arrayPosts = posts as Array<any>;
    let newPosts: Array<{
      id: number,
      text: string,
      favorites: number,
      color: string,
      username: string,
    }> = [];

    arrayPosts = arrayPosts.map((post) => {
      newPosts.push({
        id: post['id'],
        text: post['text'],
        favorites: post['favorites'],
        color: post['color'],
        username: post['username'],
      });
    });

    return newPosts;
  }

  public async getUserPosts(username: string) {
    const posts = await postRepository.getUserPosts(username);

    if (posts == false) {
      return false;
    }

    let arrayPosts = posts as Array<any>;
    let newPosts: Array<{
      id: number,
      text: string,
      favorites: number,
      color: string,
      username: string,
    }> = [];

    arrayPosts = arrayPosts.map((post) => {
      newPosts.push({
        id: post['id'],
        text: post['text'],
        favorites: post['favorites'],
        color: post['color'],
        username: post['username'],
      });
    });

    return newPosts;
  }

  public async favorite(id: number) {
    const favorite = await postRepository.favorite(id);

    if (favorite == false) {
      return false;
    }

    return true;
  }

  public async unfavorite(id: number) {
    const unfavorite = await postRepository.unfavorite(id);

    if (unfavorite == false) {
      return false;
    }

    return true;
  }
}