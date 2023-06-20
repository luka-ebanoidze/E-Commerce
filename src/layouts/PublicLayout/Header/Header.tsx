import MainContainer from "@src/components/MainContainer/MainContainer";

import { MainLogo } from "@src/components/MainLogo";
import { Search } from "@src/components/Search";
import { useState } from "react";

import { BsCart3 } from "react-icons/bs";

import { Link } from "react-router-dom";

export function Header() {
  const [clicked, setClicked] = useState(false)

  return (
    <MainContainer>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
            <Link to="/">
              <MainLogo />
            </Link>
            <div className="w-6/12 max-lg:w-8/12 bg-black relative">
              <Search />
            </div>

            <div
              onClick={() => setClicked(true)}
              className="absolute right-5 lg:hidden"
            >
              MENU
            </div>

            <div className="flex items-center lg:order-2 ">
              <Link
                to="/cart"
                className="max-lg:hidden text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <BsCart3 size={20} />
              </Link>
              <Link
                to="/Login"
                className="max-lg:hidden text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                to="/Register"
                className="max-lg:hidden text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>
        {clicked && (
          <div className="w-1/3 h-full bg-orange-500 absolute top-0 right-0 z-40 pt-10">
            <div className="flex flex-col gap-10 items-center lg:order-2 ">
              <div onClick={()=> setClicked(false)} className="absolute top-5 right-5">CLOSE</div>
              <Link
                to="/cart"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <BsCart3 size={20} />
              </Link>
              <Link
                to="/Login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                to="/Register"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </header>
    </MainContainer>
  );
}
