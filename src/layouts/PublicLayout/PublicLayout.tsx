import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

import MainContainer from "@src/components/MainContainer/MainContainer";

export function PublicLayout() {
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="flex justify-center w-full">
        <MainContainer>
          <Outlet />
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}
