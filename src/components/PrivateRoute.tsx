import type { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import type { RootState } from "../store";

function PrivateRoute({ children }: PropsWithChildren) {
  const isLoggedIn = useSelector((state: RootState) => !!state.user); //Context, Redux
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
