import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";


export function AdminSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);




  const { reload, setReload } = useContext(AdminContext);
  
  const navigate = useNavigate();

  async function searchProducts() {
    try {
      const resp = await axios.get(
        `http://localhost:3001/products?search=${searchValue}`
      );   
      
      setProducts(resp.data);
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchProducts();
    
  }, [searchValue, reload]);

  return (
    <div className="w-full border-4">
      <form>
        <div className="flex w-full">
          <div className="w-full">
            <input
              type="search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              id="search-dropdown"
              className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-400 focus:ring-500 focus:border-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-500 outline-none"
              placeholder="Search..."
              required
            />
          </div>
        </div>
      </form>
      <div className="w-full bg-green-500 flex flex-col gap-3">
        {searchValue !== "" &&
          products.slice(0, 5).map((product: any) => (
            <div
              className="flex justify-between items-center pr-10"
              key={product.id}
            >
              <div className="w-[100px] h-[100px] bg-blue-500 object-cover">
                <img src={product.thumbnail} className="w-full h-full" />
              </div>
              <div>{product.id}</div>
              <div>{product.title}</div>
              <div>{product.price} $</div>
            </div>
          ))}
        {searchValue !== "" && products.length === 0 && <div>not found</div>}
      </div>
    </div>
  );
}
