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
import { TAuthorizationStage } from "./types/auth.types";

function App() {
  const { setCurrentUser } = useContext(UserContext);
  const { setStatus } = useContext(AuthContext);

  const { status } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  console.log(status);

  async function fetchData() {
    
    if (localStorage.getItem("acces-token")) {
      const info = await axios.get("http://localhost:8080/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("acces-token")}`,
        },
      });
      setStatus(TAuthorizationStage.AUTHORIZED);
      if (info.data?.firstName === "admin" && info.data?.lastName === "admin") {
        setCurrentUser(TUserContextRole.ADMIN);
      } 
      console.log(info);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route
          element={
            status === "authorized" ? <PrivateLayout /> : <PublicLayout />
          }
        >
          {PublicRoutes}

          {status === "unauthorized" ? (
            <>
              <Route path="/profile" element={<ProfileView />} />
            </>
          ) : (
            <></>
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
