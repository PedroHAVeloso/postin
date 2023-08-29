import UserLoginModel from "../data/models/user_login_model";
import UserRegisterModel from "../data/models/user_register_model";
import UserRepository from "../data/repositories/user_repository";

const userRepository = new UserRepository();

export default class UserPresenter {
  public async login(user: UserLoginModel) {
    const login = await userRepository.login(user);

    if (login) {
      return true;
    }

    return false;
  }

  public async register(user: UserRegisterModel) {
    const register = await userRepository.register(user);

    if (register) {
      return true;
    }

    return false;
  }
}