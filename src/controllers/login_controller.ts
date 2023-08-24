import PersonStorage from "../datasources/repository/person_storage";
import LoginRules from "../rules/login_rules";

export default class LoginController implements LoginRules {
  constructor(personStorage: PersonStorage) {
    this.personStorage = personStorage;
  }

  personStorage: PersonStorage;

  email: string = '';
  password: string = '';

  public login(): boolean {
    return true;
  }
}