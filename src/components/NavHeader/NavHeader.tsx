import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { BreadCrumb } from "../BreadCrumb";
import { Navigation } from "../Navigation";

export function NavHeader() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="w-full h-[80px] bg-gray-700 my-12 flex items-center justify-between px-14 max-lg:px-0  max-sm:h-[50px] ">
      <div className="relative pl-3">
        <button onClick={() => setClicked(!clicked)}><GiHamburgerMenu size={30} /></button>
        <div className="absolute w-[800px] max-xl:w-[450px] max-md:w-[350px] max-sm:w-[180px] z-50">
          {clicked && <Navigation />}
        </div>
      </div>
      <BreadCrumb />
    </div>
  );
}
