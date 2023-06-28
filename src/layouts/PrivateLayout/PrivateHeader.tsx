import { useContext, useState } from "react";
import { AuthContext } from "@src/context/AuthContext";
import { TAuthorizationStage } from "@src/types/auth.types";
import { Link } from "react-router-dom";

import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

import { MainLogo } from "@src/components/MainLogo";
import { Search } from "@src/components/Search";
import { CurrentUserContext } from "@src/providers/CurrentUserProvider/CurrentUserProvider";
import { useCart } from "react-use-cart";

export function PrivateHeader() {
  const { setStatus } = useContext(AuthContext);
  const { currentUser } = useContext(CurrentUserContext);

  const [clicked, setClicked] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("acces-token");
    setStatus(TAuthorizationStage.UNAUTHORIZED);
  };

  const { totalItems } = useCart();

  return (
    <div className="bg-white fixed mb-5 z-50 w-full flex justify-center border-slid border-b-[3px] border-blue-600">
      <header className="w-[70%]">
        <nav className="w-full border-gray-200 py-2.5 dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center">
            <Link to="/">
              <MainLogo />
            </Link>
            <div
              className={`${
                searching && "max-sm:absolute"
              } w-6/12 max-lg:w-8/12 relative `}
            >
              {searching && (
                <div
                  onClick={() => setSearching(false)}
                  className="absolute sm:hidden left-[-20%] top-2"
                >
                  <GrFormClose size={25} />
                </div>
              )}
              <Search searching={searching} setSearching={setSearching} />
            </div>

            <div
              onClick={() => setClicked(true)}
              className="absolute right-5 lg:hidden"
            >
              <GiHamburgerMenu size={20} />
            </div>

            <div className="flex items-center lg:order-2 ">
              <Link
                to="/cart"
                className="max-lg:hidden relative text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <div className="absolute bg-blue-600 flex justify-center items-center top-[-15%] text-white right-[1%] rounded-full h-[25px] w-[25px]">
                  {totalItems}
                </div>
                <BsCart3 size={20} />
              </Link>
              <Link
                to="/profile"
                className="max-lg:hidden text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Profile
              </Link>
              <Link
                onClick={() => handleLogout()}
                to="/"
                className="max-lg:hidden text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log out
              </Link>
              {currentUser.user_role === "ADMIN" && (
                <Link
                  to="/admin"
                  className=" max-lg:hidden text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>
        </nav>
        {clicked && (
          <div className="w-1/3 max-sm:w-2/3 h-full bg-white absolute top-0 right-0 z-40 pt-10">
            <div className="flex flex-col h-[100vh] bg-white gap-10 items-center lg:order-2 pt-10">
              <div
                onClick={() => setClicked(false)}
                className="absolute top-5 right-5"
              >
                <GrFormClose size={25} />
              </div>
              <Link
                to="/cart"
                className="relative text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <div className="absolute bg-blue-600 flex justify-center items-center top-[-15%] text-white right-[1%] rounded-full h-[20px] w-[20px]">
                  {totalItems}
                </div>
                <BsCart3 size={20} />
              </Link>
              <Link
                to="/profile"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Profile
              </Link>
              {currentUser.user_role === "ADMIN" && (
                <Link
                  to="/admin"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Admin Panel
                </Link>
              )}
              <Link
                onClick={() => handleLogout()}
                to="/"
                className=" text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log out
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
