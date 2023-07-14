import { useContext, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { CurrentUserContext } from "./providers/CurrentUserProvider/CurrentUserProvider";

import { PublicRoutes } from "./views/public/routes/PublicRoutes";

import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import { PublicLayout } from "./layouts/PublicLayout";

const AdminView = lazy(() => import("./views/private/routes/AdminPanelView"));
const ProfileView = lazy(() => import("./views/private/routes/ProfileView"));
const PaymentView = lazy(() => import("./views/private/routes/PaymentView"));

function App() {
  const { status } = useContext(AuthContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Suspense fallback={<div></div>}>
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
