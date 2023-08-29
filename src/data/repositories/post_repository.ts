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
}  