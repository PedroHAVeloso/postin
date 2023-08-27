import PersonLoginModel from "../models/person_login_model";

export default interface PersonStorage {
  login(person: PersonLoginModel): Promise<any>;
  register(): [token: string] | false;
}