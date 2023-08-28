import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

type AuthProviderProps = {
  noAuthRedirect: string;
  authNeed?: boolean;
  children: React.ReactNode;
}

export default function AuthProvider({ noAuthRedirect, authNeed = true, children }: AuthProviderProps) {
  const auth = Cookies.get('auth-token');

  if (authNeed) {
    if (auth != null) {
      return children;
    } else {
      return <Navigate to={noAuthRedirect} />
    }
  }

  if (auth == null) {
    return children;
  } else {
    return <Navigate to={noAuthRedirect} />
  }
}