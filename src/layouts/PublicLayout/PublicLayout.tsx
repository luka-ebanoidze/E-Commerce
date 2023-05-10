import { Footer } from "./Footer";
import { Header } from "./Header";

import { Outlet } from "react-router-dom";

import MainContainer from "@src/components/MainContainer/MainContainer";

export function PublicLayout() {
  return (
    <div>
      <Header />
      <div className="bg-[blue] flex justify-center w-full">
        <MainContainer>
          <Outlet />
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}
