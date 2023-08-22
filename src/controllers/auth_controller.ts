import LocalStorage from "../data/local_storage";
import AuthRules from "../rules/auth_rules";

export default class AuthController implements AuthRules {
  constructor(localStorage: LocalStorage) {
    this.localStorage = localStorage;
  }

  token: string = "AUTH_TOKEN";
  localStorage: LocalStorage;

  public authSession(): boolean {
    const auth = this.localStorage.get(this.token);

    if (auth[this.token] != undefined) {
      return true;
    }

    return false
  }
}
