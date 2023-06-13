import { Navigate } from "react-router-dom";
import { TUserContextRole } from "@src/types/user.types";
import { PropsWithChildren, useContext } from "react";


type PrivateRouteProps = {
  roles: TUserContextRole[];
  currentUser: TUserContextRole;
};

export function PrivateRoute({
  currentUser,
  roles,
  children,
}: PropsWithChildren<PrivateRouteProps>) {

  if (roles.includes(currentUser)) {
    return <>{children}</>;
  }

  return <Navigate to="/" />;
}
