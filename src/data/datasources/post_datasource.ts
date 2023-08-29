import PostCreateModel from "../models/post_create_model";
import apiUrls from "./api_urls";

export default class PostDatasource {
  public async create(post: PostCreateModel) {
    try {
      const fetchData = await fetch(
        apiUrls.postCreate,
        {
          method: "POST",
          body: JSON.stringify({
            text: post.text,
            color: post.color,
            username: post.username
          })
        });

      const json = await fetchData.json();

      if (json['create'] == true) {
        console.log('create')
        return true;
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }
}