import PersonLoginModel from "../models/person_login_model";

export default interface PersonStorage {
  login(person: PersonLoginModel): [token: string] | false;
  register(): [token: string] | false;
}