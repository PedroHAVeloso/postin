import UserLoginModel from "../models/user_login_model";
import apiUrls from "./api_urls";

export default class UserDatasource {
  public async login(user: UserLoginModel) {
    try {
      const fetchData = await fetch(
        apiUrls.userLogin,
        {
          method: "POST",
          body: JSON.stringify({
            email: user.email,
            password: user.password
          })
        });

      const json = await fetchData.json();

      if (json['login'] == true) {
        console.log(json);
        return { 'token': json['token'], 'username': json['username'] };
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }

  public register(): false | [token: string] {
    return false;
  }
}