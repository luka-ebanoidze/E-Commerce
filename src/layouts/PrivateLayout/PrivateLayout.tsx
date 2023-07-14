import { Outlet } from "react-router-dom";
import { PrivateHeader } from "./PrivateHeader";
import { Footer } from "../PublicLayout/Footer";

import MainContainer from "@src/components/MainContainer/MainContainer";

export default function PrivateLayout() {
  
  return (
    <div>
      <PrivateHeader />
      <div className="bg-gray-200 flex justify-center w-full">
        <MainContainer>
          <Outlet />
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}
