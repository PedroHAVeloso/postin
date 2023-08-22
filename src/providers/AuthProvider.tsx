import AuthController from "../controllers/auth_controller";
import CookieData from "../data/cookie_data";

type AuthProviderProps = {
  children: React.ReactNode;
}

export default function AuthProvider(props: AuthProviderProps) {
  const authStorage = new CookieData();
  const authController = new AuthController(authStorage);
  const auth = authController.authSession();

  if (auth) {
    return props.children
  }

  return <h1>...</h1>
}