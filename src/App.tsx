import { useContext, Suspense, lazy } from "react";

import { AuthContext } from "./context/AuthContext";
import { UserContext } from "./context/UserContext";
import { TUserContextRole } from "./types/user.types";

import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./views/private/PrivateRoute";
import { PublicRoutes } from "./views/public/PublicRoutes";
import { PrivateRoutes } from "./views/private/PrivateRoutes";
// import { PrivateRoutes } from "./views/private/PrivateRoutes";


import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import { PublicLayout } from "./layouts/PublicLayout";


import { TLocalStorage } from "./types/localstorage";
import { TAuthorizationStage } from "./types/auth.types";
const AdminView = lazy(() => import("./views/private/routes/AdminPanelView"));
const ProfileView = lazy(() => import("./views/private/routes/ProfileView"));




function App() {
  // const { setCurrentUser } = useContext(UserContext);
  // const { setStatus } = useContext(AuthContext);
  const { status } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  // console.log(status);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route
          element={
            status === "authorized" ? <PrivateLayout /> : <PublicLayout />
          }
        >
          {PublicRoutes}


          {status === "authorized" ? (
            <>
              <Route path="/profile" element={<ProfileView />} />
            </>
          ) : (
            <></>
          )}

          {status === "authorized" && (
            <Route path="/profile" element={<ProfileView />} />

          )}

          {currentUser === "admin" && (
            <Route path="/admin" element={<AdminView />} />
          )}

          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
