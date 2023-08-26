import UserLoginModel from "../models/user_login_model";
import PersonStorage from "./person_storage";

export default class UserRepository implements PersonStorage {
  private url = 'http://localhost:9999/user/';

  public login(user: UserLoginModel): false | any {
    fetch(this.url + 'login', {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
      .then(function (response) {
        if (response.ok) {
          return response.body;
        } else {
          console.log('Response error');
          return false;
        }
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });

    return false;
  }

  public register(): false | [token: string] {
    return false;
  }
}