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

  public async getAllPosts() {
    try {
      const fetchData = await fetch(
        apiUrls.getAllPosts,
      );

      const json = await fetchData.json();

      if (json['get'] == true) {
        console.log('get')
        return json['posts'];
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }
  
  public async getUserPosts(username: string) {
    try {
      const fetchData = await fetch(
        apiUrls.getUserPosts, {
        method: "POST",
        body: JSON.stringify({
          username: username
        })
      });

      const json = await fetchData.json();

      if (json['get'] == true) {
        console.log('get')
        return json['posts'];
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }
}