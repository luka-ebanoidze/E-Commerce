import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Search(props: any) {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const { searching, setSearching } = props;

  async function searchProducts() {
    try {
      const resp = await axios.get(
        `https://dummyjson.com/products/search?q=${searchValue}`
      );
      setProducts(resp.data?.products);
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchProducts();
  }, [searchValue]);

  function navigateToSearchedProducts(keyWord: any) {
    navigate(`/products/${keyWord}`);
  }

  return (
    <div className="w-full max-sm:relative max-sm:top-0">
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
                searching ? "max-sm:block" : "max-sm:hidden"
              } block p-2.5 w-full  z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-400 focus:ring-500 focus:border-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-500 outline-none`}
              placeholder="Search..."
              required
            />
            <button
              onClick={() => {
                navigateToSearchedProducts(searchValue);
                setSearching(true);
              }}
              type="submit"
              className={`${
                searching
                  ? "max-sm:absolute right-[-9%] z-20 max-sm:rounded-l-0"
                  : "max-sm:rounded-l-lg"
              } sm:absolute top-0 right-[-2%] z-20 p-2.5 text-sm font-medium text-white bg-blue-600 rounded-r-lg border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700`}
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
      <div className="absolute w-full z-50 bg-green-500 flex flex-col gap-3">
        {searchValue !== "" &&
          products.slice(0, 5).map((product: any) => (
            <div
              className="flex justify-between items-center pr-10"
              key={product.id}
            >
              <div className="w-[100px] h-[100px] bg-blue-500 object-cover">
                <img src={product.thumbnail} className="w-full h-full" />
              </div>
              <div>{product.title}</div>
              <div>{product.price} $</div>
            </div>
          ))}
        {searchValue !== "" && products.length === 0 && <div>not fount</div>}
      </div>
    </div>
  );
}
