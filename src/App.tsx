import { useContext, Suspense, lazy, useEffect } from "react";

import { AuthContext } from "./context/AuthContext";
import { TAuthorizationStage } from "./types/auth.types";

import { UserContext } from "./context/UserContext";
import { TUserContextRole } from "./types/user.types";

import { Routes, Route, Navigate } from "react-router-dom";

import { PublicRoutes } from "./views/public/PublicRoutes";
import { PrivateRoutes } from "./views/private/PrivateRoutes";

import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import { PublicLayout } from "./layouts/PublicLayout";

const HomeView = lazy(() => import("./views/public/routes/HomeView"));

function App() {
  const { status } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  console.log(status);


  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route
          element={
            status === "authorized" ? <PrivateLayout /> : <PublicLayout />
          }
        >
          <Route
            path="/*"
            element={
              <>
                <PublicRoutes />
                {status === "authorized" && (
                  <PrivateRoutes currentUser={currentUser} />
                )}
              </>
            }
          />
          {/* <Route path="*" element={<HomeView />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
