import Cookies from 'js-cookie';

import UserDatasource from "../datasources/user_datasource";
import UserLoginModel from "../models/user_login_model";

const userDatasource = new UserDatasource();

export default class UserRepository {

  public async login(user: UserLoginModel) {
    const login = await userDatasource.login(user);

    if (login == false) {
      return false;
    }

    Cookies.set('auth-token', login['token']);
    Cookies.set('auth-username', login['username']);

    return true;
  }

  public register(): false | [token: string] {
    return false;
  }
}