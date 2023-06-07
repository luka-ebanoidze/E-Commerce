import { useContext, Suspense, lazy, useEffect } from "react";

import { AuthContext } from "./context/AuthContext";

import { UserContext } from "./context/UserContext";
import { TUserContextRole } from "./types/user.types";

import { Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./views/private/PrivateRoute";
import { PublicRoutes } from "./views/public/PublicRoutes";
// import { PrivateRoutes } from "./views/private/PrivateRoutes";

import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import { PublicLayout } from "./layouts/PublicLayout";

import ProfileView from "./views/private/routes/ProfileView";
import AdminView from "./views/private/routes/AdminPanelView";
import { PrivateRoutes } from "./views/private/PrivateRoutes";
import axios from "axios";
import { TLocalStorage } from "./types/localstorage";

function App() {
  const { setCurrentUser } = useContext(UserContext);
  const { status } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  // console.log(status);

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

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route
          element={
            status === "authorized" ? <PrivateLayout /> : <PublicLayout />
          }
        >
          {PublicRoutes}
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

          <Route path="/" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
