import { useContext } from "react";
import { AuthContext } from "@src/context/AuthContext";
import { TAuthorizationStage } from "@src/types/auth.types";
import { Link } from "react-router-dom";

import { UserContext } from "@src/context/UserContext";


import MainContainer from "@src/components/MainContainer/MainContainer";

import { MainLogo } from "@src/components/MainLogo";
import { Search } from "@src/components/Search";
import { BsCart3 } from "react-icons/bs";
import { CurrentUserContext } from "@src/providers/CurrentUserProvider/CurrentUserProvider";

export function PrivateHeader() {
  const { setStatus } = useContext(AuthContext);
  const { currentUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    localStorage.removeItem('acces-token');
    setStatus(TAuthorizationStage.UNAUTHORIZED);
  };


  return (
    <MainContainer>
      <header>
        <nav className="bg-gray-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/">
              <MainLogo />
            </Link>
            <div className="w-6/12 bg-black relative">
              <Search />
            </div>
            <div className="flex items-center lg:order-2">
              <Link
                to="/cart"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <BsCart3 size={20} />
              </Link>
              <Link
                to="/profile"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Profile
              </Link>
              <Link
                onClick={() => handleLogout()}
                to="/"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log out
              </Link>
              {currentUser.user_role === "ADMIN" && (
                <Link
                  to="/admin"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </MainContainer>
  );
}
