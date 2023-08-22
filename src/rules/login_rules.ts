export default interface LoginRules {
  email: string;
  password: string;

  login(): boolean;
}