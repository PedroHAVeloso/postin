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
}