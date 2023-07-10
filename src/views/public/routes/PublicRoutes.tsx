import { lazy } from "react";
import { Route } from "react-router-dom";

const HomeView = lazy(() => import("./HomeView"));
const ProductsView = lazy(() => import("./ProductsView"));
const ProductView = lazy(() => import("./ProductView"));
const LoginView = lazy(() => import("./LoginView"));
const RegisterView = lazy(() => import("./RegisterView"));
const CartView = lazy(() => import("./CartView"));
const ContactUsView = lazy(() => import("./ContactUsView"));
const SearchedView = lazy(() => import("./SearchedView"));
const FilteredView = lazy(() => import("./FilteredView"));

export const PublicRoutes = [
  <Route path="/" element={<HomeView />} key={1} />,
  <Route path="/:category/:product/:id" element={<ProductView />} key={2} />,
  <Route path="/products/:category" element={<ProductsView />} key={3} />,
  <Route path="/login" element={<LoginView />} key={4} />,
  <Route path="/register" element={<RegisterView />} key={5} />,
  <Route path="/cart" element={<CartView />} key={6} />,
  <Route path="/contactus" element={<ContactUsView />} key={7} />,
  <Route path="/search/:value" element={<SearchedView />} key={8} />,
  <Route path="/filter/:value1/:value2" element={<FilteredView />} key={9} />,
];
