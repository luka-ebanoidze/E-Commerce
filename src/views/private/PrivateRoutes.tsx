import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { TUserContextRole } from "@src/types/user.types";
import { PrivateRoute } from "./PrivateRoute";

type PrivateRouteProps = {
  currentUser: TUserContextRole;
};

const ProfileView = lazy(() => import("./routes/ProfileView"));
const AdminView = lazy(() => import("./routes/AdminPanelView"));



export function PrivateRoutes({ currentUser }: PrivateRouteProps) {
  return (
    <Routes>
      <Route
        path="/profile"
        element={
          <PrivateRoute
            currentUser={currentUser}
            roles={[...Object.values(TUserContextRole)]}
            children={<ProfileView />}
          />
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute
            currentUser={currentUser}
            roles={[TUserContextRole.ADMIN]}
            children={<AdminView />}
          />
        }
      />
    </Routes>
  );
}