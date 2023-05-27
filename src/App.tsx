import { lazy, Suspense, useCallback, useContext } from "react";

import { AuthContext } from "./context/AuthContext";
import { TAuthorizationStage } from "./types/auth.types";

import { UserContext } from "./context/UserContext";
import { TUserContextRole } from "./types/user.types";

import { Routes, Route, Navigate } from "react-router-dom";

import { PublicLayout } from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";


const HomeView = lazy(() => import("./views/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsView"));
const ProductView = lazy(() => import("./views/ProductView"));
const LoginView = lazy(() => import("./views/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const CartView = lazy(() => import("./views/CartView"));
const ProfileView = lazy(() => import("./views/ProfileView"));
const AdminPanelView = lazy(() => import("./views/AdminPanelView"));

function App() {
  const { status } = useContext(AuthContext);
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  console.log(status);
  


  const handleRoutes = useCallback((status: TAuthorizationStage) => {
    switch (status) {
      case TAuthorizationStage.AUTHORIZED: {
        return (
          <Routes>
            <Route element={<PrivateLayout />}>
              <Route path="/" element={<div>Authorized</div>} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/profile" element={<ProfileView />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        );
      }
      case TAuthorizationStage.UNAUTHORIZED: {
        return (
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomeView />} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        );
      }
    }
  }, []);

  return (
    <Suspense fallback={<div>loading...</div>}>{handleRoutes(status)}</Suspense>
  );
}

export default App;
