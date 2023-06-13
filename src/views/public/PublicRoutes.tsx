import { lazy } from "react";
import { Route } from "react-router-dom";

const HomeView = lazy(() => import("./routes/HomeView"));
const ProductsView = lazy(() => import("./routes/ProductsView"));
const ProductView = lazy(() => import("./routes/ProductView"));
const LoginView = lazy(() => import("./routes/LoginView"));
const RegisterView = lazy(() => import("./routes/RegisterView"));
const CartView = lazy(() => import("./routes/CartView"));

export const PublicRoutes = [
  <Route path="/" element={<HomeView />} key={1} />,
  <Route path="/products/:id" element={<ProductView />} key={2} />,
  <Route path="/products" element={<ProductsView />} key={3} />,
  <Route path="/login" element={<LoginView />} key={4} />,
  <Route path="/register" element={<RegisterView />} key={5} />,
  <Route path="/cart" element={<CartView />} key={6} />,
];
