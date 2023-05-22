import { useContext, useEffect } from "react";
import { AuthContext, TAuthorizationStage } from "@src/context/AuthContext";
import { TLocalStorage } from "@src/types/localstorage";
import { Link } from "react-router-dom";

import MainContainer from "@src/components/MainContainer/MainContainer";

import { MainLogo } from "@src/components/MainLogo";
import { Search } from "@src/components/Search";
import { BsCart3 } from "react-icons/bs";

import { private_axios } from "@src/utils/private_axios";

export function PrivateHeader() {
  const { setStatus } = useContext(AuthContext);

  const getCurrentUser = async () => {
    const resp = await private_axios('/users/current-user')
  }

  const handleLogout = () => {
    localStorage.removeItem(TLocalStorage.ACCESSTOKEN);
    setStatus(TAuthorizationStage.UNAUTHORIZED);
  };

//   useEffect(()=> {
//     getCurrentUser()
//   },[])
//   fixing

  return (
    <MainContainer>
      <header>
        <nav className="bg-gray-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <MainLogo />
            <Search />
            <div className="flex items-center lg:order-2">
              <Link
                to="/cart"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <BsCart3 size={20} />
              </Link>
              <Link
                to="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Profile
              </Link>
              <Link
                onClick={() => handleLogout()}
                to="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log out
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </MainContainer>
  );
}
