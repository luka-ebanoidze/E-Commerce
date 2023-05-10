import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { PublicLayout } from "./layouts/PublicLayout";

const HomeView = lazy(() => import("./views/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsView"));
const ProductView = lazy(() => import("./views/ProductView"));
const LoginView = lazy(() => import("./views/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const CartView = lazy(() => import("./views/CartView"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/cart" element={<CartView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
