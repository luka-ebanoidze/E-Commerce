import { instance } from "@src/utils/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { TProduct } from "@src/types/product.types";

export function Search(props: any) {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  const { searching, setSearching } = props;

  async function searchProducts() {
    if (searchValue !== "") {
      setClicked(false);
      try {
        const resp = await instance.get(`/products?search=${searchValue}`);

        setProducts(resp.data);
      } catch (error: any) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    searchProducts();
  }, [searchValue]);

  function navigateToSearchedProducts(keyWord: any) {
    if (products.length !== 0 && searchValue !== "") {
      navigate(`/search/${keyWord}`);
    }
  }

  return (
    <div className="w-full max-sm:relative max-sm:top-0 ">
      <form className="">
        <div className="flex w-full relative">
          <div className="relative w-full flex justify-center">
            <input
              type="search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              id="search-dropdown"
              className={`${
                searching ? "max-sm:block " : "max-sm:hidden "
              }  block p-2.5 w-full  z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-400 focus:ring-500 focus:border-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-500 outline-none`}
              placeholder={t("placeHolder.search")}
              required
            />
            <button
              onClick={() => {
                navigateToSearchedProducts(searchValue);
                setSearching(true);
                setClicked(true);
                setSearchValue("");
              }}
              type="button"
              className={`${
                searching
                  ? "max-sm:absolute right-[-1%] z-20 max-sm:rounded-l-0"
                  : "max-sm:rounded-l-lg"
              } sm:absolute top-0 right-[-2%] z-20 p-2.5 text-sm font-medium text-white bg-gray-700 rounded-r-lg border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700`}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      {!clicked && (
        <div
          className={`absolute w-full ${
            searchValue === "" && "hidden"
          }  p-1 rounded-t-md z-50 bg-gray-200 flex flex-col gap-3`}
        >
          {searchValue !== "" &&
            products.slice(0, 5).map((product: TProduct) => (
              <div
                onClick={() => {
                  setClicked(true);
                  setSearchValue("");
                  navigate(
                    `/${product.category}/${product.title}/${product.id}`
                  );
                }}
                className="flex border-solid gap-5 bg-white  border-gray-500 border-[2px] justify-between items-center"
                key={product.id}
              >
                <div className="w-[100px] h-[100px] bg-gray-500 object-cover">
                  <img
                    src="https://hbr.org/resources/images/article_assets/2020/04/Apr20_07_1162572100.jpg"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="flex  justify-around
               max-md:flex-col max-md:gap-2 w-3/4 max-xl:gap-10 max-xl:w-2/4"
                >
                  <div>{product.title}</div>
                  <div>{product.price} $</div>
                </div>
              </div>
            ))}
          {searchValue !== "" && products.length === 0 && (
            <div className="min-h-[50px] flex items-center pl-5">
              {t("error.PrNotFound")}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
