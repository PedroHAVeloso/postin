import PostDatasource from '../datasources/post_datasource';
import PostCreateModel from '../models/post_create_model';

const postDatasource = new PostDatasource();

export default class PostRepository {
  public async create(post: PostCreateModel) {
    const create = await postDatasource.create(post);

    if (create == false) {
      return false;
    }

    return true;
  }

  public async getAllPosts() {
    const get = await postDatasource.getAllPosts();

    if (get == false) {
      return false;
    }

    return get;
  }

  public async getUserPosts(username: string) {
    const get = await postDatasource.getUserPosts(username);

    if (get == false) {
      return false;
    }

    return get;
  }

  public async favorite(id: number) {
    const favorite = await postDatasource.favorite(id);

    if (favorite == false) {
      return false;
    }

    return true;
  }

  public async unfavorite(id: number) {
    const unfavorite = await postDatasource.unfavorite(id);

    if (unfavorite == false) {
      return false;
    }

    return true;
  }
}  