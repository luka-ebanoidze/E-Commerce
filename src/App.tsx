import { useContext, Suspense, lazy, useState, useEffect } from "react";

import { AuthContext } from "./context/AuthContext";
import { UserContext } from "./context/UserContext";
import { TUserContextRole } from "./types/user.types";

import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./views/private/PrivateRoute";
import { PublicRoutes } from "./views/public/routes/PublicRoutes";
import { PrivateRoutes } from "./views/private/PrivateRoutes";
// import { PrivateRoutes } from "./views/private/PrivateRoutes";

import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import { PublicLayout } from "./layouts/PublicLayout";

import { TLocalStorage } from "./types/localstorage";
import { TAuthorizationStage } from "./types/auth.types";
import { CurrentUserContext } from "./providers/CurrentUserProvider/CurrentUserProvider";
const AdminView = lazy(() => import("./views/private/routes/AdminPanelView"));
const ProfileView = lazy(() => import("./views/private/routes/ProfileView"));
const PaymentView = lazy(() => import("./views/private/routes/PaymentView"));

function App() {
  const [pending, setPending] = useState(true);
  // const { setCurrentUser } = useContext(UserContext);
  // const { setStatus } = useContext(AuthContext);
  const { status } = useContext(AuthContext);
  // const { currentUser } = useContext(UserContext);
  const { currentUser } = useContext(CurrentUserContext);
  // console.log(currentUser.user_role);
  // console.log(status, "status");
  // console.log(pending);

  useEffect(() => {
    if (currentUser.user_role !== "") {
      setPending(false);
      console.log("daiesta");
    }
  }, [currentUser]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route
          element={
            status === "authorized" ? <PrivateLayout /> : <PublicLayout />
          }
        >
          {PublicRoutes}
          
          {status === "authorized" && (
            <>
              <Route path="/profile" element={<ProfileView />} />
              <Route path="/payment" element={<PaymentView />} />
            </>
          )}

          {currentUser.user_role === "ADMIN" && (
            <Route path="/admin" element={<AdminView />} />
          )}

          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
