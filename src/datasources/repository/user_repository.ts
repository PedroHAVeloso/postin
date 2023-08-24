import PersonStorage from "./person_storage";

export default class UserRepository implements PersonStorage {
  login(): false | [token: string] {
    return false;
  }

  register(): false | [token: string] {
    return false;
  }
}