import PersonLoginModel from "./person_login_model";

export default class UserLoginModel implements PersonLoginModel {
  public constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  email: string;
  password: string;
}