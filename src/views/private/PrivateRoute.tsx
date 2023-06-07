import { Navigate } from "react-router-dom";
import { TUserContextRole } from "@src/types/user.types";
import { PropsWithChildren, useContext } from "react";
import { UserContext } from "@src/context/UserContext";
import axios from "axios";
import { TLocalStorage } from "@src/types/localstorage";


type PrivateRouteProps = {
  roles: TUserContextRole[];
  currentUser: TUserContextRole;
};

export function PrivateRoute({
  currentUser,
  roles,
  children,
}: PropsWithChildren<PrivateRouteProps>) {
  // const { currentUser } = useContext(UserContext);
  // const { setCurrentUser } = useContext(UserContext);

  // (async function () {
  //   const info = await axios.get("http://localhost:8080/me", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem(
  //         TLocalStorage.ACCESSTOKEN
  //       )}`,
  //     },
  //   });

  //   if (info.data?.firstName === "admin" && info.data?.lastName === "admin") {
  //     setCurrentUser(TUserContextRole.ADMIN);
  //   }
  // })();
  // console.log(currentUser);

  if (roles.includes(currentUser)) {
    return <>{children}</>;
  }

  return <Navigate to="/" />;
}
