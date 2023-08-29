export default class UserRegisterModel {
  constructor(email: string, password: string, username: string) {
    this.email = email;
    this.password = password;
    this.username = username;
  }

  email: string;
  password: string;
  username: string;
} 