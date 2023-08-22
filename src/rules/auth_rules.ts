export default interface AuthRules {
  token: string;

  authSession(): boolean;
}