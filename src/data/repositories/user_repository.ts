import Cookies from 'js-cookie';

import UserDatasource from "../datasources/user_datasource";
import UserLoginModel from "../models/user_login_model";
import UserRegisterModel from '../models/user_register_model';

const userDatasource = new UserDatasource();

export default class UserRepository {
  public async login(user: UserLoginModel) {
    const login = await userDatasource.login(user);

    if (login == false) {
      return false;
    }

    Cookies.set('auth-token', login['token']);
    Cookies.set('auth-username', login['username']);
    Cookies.set('auth-email', user.email);

    return true;
  }

  public async register(user: UserRegisterModel) {
    const register = await userDatasource.register(user);

    if (register == false) {
      return false;
    }

    Cookies.set('auth-token', register['token']);
    Cookies.set('auth-username', user.username);
    Cookies.set('auth-email', user.email);

    return true;
  }
}