import UserLoginModel from "../models/user_login_model";
import UserRegisterModel from "../models/user_register_model";
import apiUrls from "./api";

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
        console.log('login');
        return { 'token': json['token'], 'username': json['username'] };
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }

  public async register(user: UserRegisterModel) {
    try {
      const fetchData = await fetch(
        apiUrls.userRegister,
        {
          method: "POST",
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            username: user.username
          })
        });

      const json = await fetchData.json();

      if (json['register'] == true) {
        console.log('register')
        return { 'token': json['token'], };
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }
}