import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AdminPanelView = lazy(() => import("./routes/AdminPanelView"));
const UserView = lazy(() => import("./routes/UserView"));

import { TUserContextRole } from "@src/types/user.types";
import PrivateLayout from "@src/layouts/PrivateLayout/PrivateLayout";
import { PrivateRoute } from "./PrivateRoute";

type PrivateRouteProps = {
  currentUser: TUserContextRole;
};



export function PrivateRoutes({ currentUser }: PrivateRouteProps) {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route
          path="/user-view"
          element={
            <PrivateRoute
              currentUser={currentUser}
              roles={[...Object.values(TUserContextRole)]}
              children={<UserView />}
            />
          }
        />
        <Route
          path="/admin-view"
          element={
            <PrivateRoute
              currentUser={currentUser}
              roles={[TUserContextRole.ADMIN]}
              children={<AdminPanelView />}
            />
          }
        />
      </Route>
    </Routes>
  );
}
