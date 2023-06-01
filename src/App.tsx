import { useContext, Suspense, lazy } from "react";

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
const ProductsView = lazy(() => import("./views/public/routes/ProductsView"));
const ProductView = lazy(() => import("./views/public/routes/ProductView"));
const LoginView = lazy(() => import("./views/public/routes/LoginView"));
const RegisterView = lazy(() => import("./views/public/routes/RegisterView"));
const CartView = lazy(() => import("./views/public/routes/CartView"));

const ProfileView = lazy(() => import("./views/private/routes/ProfileView"));
const AdminView = lazy(() => import('./views/private/routes/AdminPanelView'))



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
          <Route path="/" element={<HomeView />} />

          <Route path="/cart" element={<CartView />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />

          {status === "authorized" && (
            <>
              <Route path="/profile" element={<ProfileView />} />
            </>
          )}
          {currentUser === "admin" && (
            <>
              <Route path="/admin" element={<AdminView />} />
            </>
          )}
          <Route path="*" element={<HomeView />} />
        </Route>
      </Routes>
      {/* <PublicRoutes />
        {status === "authorized" ? (
          <PrivateRoutes currentUser={currentUser} />
        ) : (
          <Navigate to={"/"} />
        )} */}
    </Suspense>
  );
}

export default App;
