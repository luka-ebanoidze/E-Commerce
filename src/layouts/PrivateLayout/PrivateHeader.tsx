import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";

import { AuthContext } from "@src/context/AuthContext";
import { CurrentUserContext } from "@src/providers/CurrentUserProvider/CurrentUserProvider";

import { TAuthorizationStage } from "@src/types/auth.types";

import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

import { LanguageChanger } from "@src/components/LanguageChanger";
import { MainLogo } from "@src/components/MainLogo";
import { Search } from "@src/components/Search";

export function PrivateHeader() {
  const { t } = useTranslation();
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
    <div className="bg-white h-[60px] fixed mb-5 z-50 w-full flex justify-center items-center border-slid border-b-[3px] border-gray-700">
      <header className="w-[70%]">
        <nav className="w-full border-gray-200 py-2.5  ">
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
              className="absolute right-2 2xl:hidden"
            >
              <GiHamburgerMenu size={20} />
            </div>

            <div className="absolute right-3 max-2xl:hidden">
              <LanguageChanger />
            </div>

            <div className="flex items-center lg:order-2 ">
              <Link
                to="/cart"
                className="max-2xl:hidden relative text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                <div className="absolute bg-gray-700 flex justify-center items-center top-[-15%] text-white right-[1%] rounded-full h-[25px] w-[25px]">
                  {totalItems}
                </div>
                <BsCart3 size={20} />
              </Link>
              <Link
                to="/profile"
                className="max-2xl:hidden text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                {t("btnText.profile")}
              </Link>
              <Link
                onClick={() => handleLogout()}
                to="/"
                className="max-2xl:hidden text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                {t("btnText.logOut")}
              </Link>
              {currentUser.user_role === "ADMIN" && (
                <Link
                  to="/admin"
                  className=" max-2xl:hidden text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
                >
                  {t("btnText.admin")}
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
                className="relative text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                <div className="absolute bg-gray-700 flex justify-center items-center top-[-15%] text-white right-[1%] rounded-full h-[20px] w-[20px]">
                  {totalItems}
                </div>
                <BsCart3 size={20} />
              </Link>
              <Link
                to="/profile"
                className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none"
              >
                {t("btnText.profile")}
              </Link>
              {currentUser.user_role === "ADMIN" && (
                <Link
                  to="/admin"
                  className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
                >
                  {t("btnText.admin")}
                </Link>
              )}
              <Link
                onClick={() => handleLogout()}
                to="/"
                className=" text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                {t("btnText.logOut")}
              </Link>
              <LanguageChanger />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
