import AuthController from "../controllers/auth_controller";
import CookieData from "../datasources/local/cookie_data";
import { Navigate } from "react-router-dom";

type AuthProviderProps = {
  noAuthRedirect: string;
  children: React.ReactNode;
}

export default function AuthProvider(props: AuthProviderProps) {
  const authStorage = new CookieData();
  const authController = new AuthController(authStorage);
  const auth = authController.authSession();

  if (auth) {
    return props.children;
  }

  return <Navigate to={props.noAuthRedirect} />
}