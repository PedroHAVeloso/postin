import UserLoginModel from "../data/models/user_login_model";
import UserRepository from "../data/repositories/user_repository";
import Cookies from 'js-cookie';

const userRepository = new UserRepository();

export default class UserPresenter {
  public async login(user: UserLoginModel) {
    const login = await userRepository.login(user);

    if (login) {
      Cookies.set('auth-email', user.email);

      return true;
    }

    return false;
  }
}