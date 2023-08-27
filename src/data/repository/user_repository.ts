import UserLoginModel from "../models/user_login_model";
import PersonStorage from "./person_storage";

export default class UserRepository implements PersonStorage {
  private url = 'http://localhost:9999/user/';

  public async login(user: UserLoginModel) {
    const data = await fetch(this.url + 'login', {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Response error');
          return false;
        }
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });

    return data;
  }

  public register(): false | [token: string] {
    return false;
  }
}