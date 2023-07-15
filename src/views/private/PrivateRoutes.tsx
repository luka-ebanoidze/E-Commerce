import { lazy } from "react";
import { Route } from "react-router-dom";

const ProfileView = lazy(() => import("./routes/ProfileView"));

export const PrivateRoutes = [<Route path="/profile" element={<ProfileView />} key={1} />];
