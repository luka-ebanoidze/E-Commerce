import { lazy } from "react"
import { Routes,Route } from "react-router-dom"
import { PublicLayout } from "@src/layouts/PublicLayout"

const HomeView = lazy(() => import("./routes/HomeView"));
const ProductsView = lazy(() => import("./routes/ProductsView"));
const ProductView = lazy(() => import("./routes/ProductView"));
const LoginView = lazy(() => import("./routes/LoginView"));
const RegisterView = lazy(() => import("./routes/RegisterView"));
const CartView = lazy(() => import("./routes/CartView"));


export function PublicRoutes() {
  return (
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
  );
}
