export default interface PersonStorage {
  login(): [token: string] | false;
  register(): [token: string] | false;
}