import { Outlet } from "react-router-dom";
import { PrivateHeader } from "./PrivateHeader";

export default function PrivateLayout() {
  return (
    <div>
      <PrivateHeader />
      <Outlet />
    </div>
  );
}
