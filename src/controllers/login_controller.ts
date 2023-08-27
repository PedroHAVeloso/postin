import CookieData from "../datasources/local/cookie_data";
import PersonLoginModel from "../datasources/models/person_login_model";
import PersonStorage from "../datasources/repository/person_storage";
import LoginRules from "../rules/login_rules";

export default class LoginController implements LoginRules {
  constructor(personStorage: PersonStorage, personModel: PersonLoginModel) {
    this.personStorage = personStorage;
    this.email = personModel.email;
    this.password = personModel.password;
  }

  personStorage: PersonStorage;

  email: string;
  password: string;

  public async login(): Promise<boolean> {
    const login = await this.personStorage.login(new PersonLoginModel(this.email, this.password));

    console.log(login);

    if (login != false && login['login'] != false) {
      return login['token'];
    }

    return false;
  }
}