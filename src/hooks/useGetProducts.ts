import axios from "axios";
import { useState, useEffect } from "react";

export function useGetProducts(page = 1, limit = 0) {
  const [totalNum, setTotalNum] = useState<{ totalNum: any }>({
    totalNum: undefined,
  });

  const [products, setProducts] = useState<{
    data?: any;
    loading: boolean;
    error?: string;
  }>({
    data: undefined,
    loading: false,
    error: undefined,
  });

  //droebiti totalis dasatvleli
  const getTotal = async () => {
    try {
      const resp = await axios.get(`http://localhost:3001/products`);
      setTotalNum({ totalNum: resp.data.length });
    } catch (error: any) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      setProducts((prev) => ({ ...prev, loading: true }));
      const resp = await axios.get(
        `http://localhost:3001/products?skip=${(page - 1) * limit}&take=${limit}`
      );

      // setTotalNum({ totalNum: resp.data.total });
      setProducts((prev) => ({ ...prev, loading: false, data: resp.data }));
    } catch (error: any) {
      console.log("ara");

      setProducts((prev) => ({ ...prev, error: error.message }));
    }
  };

  useEffect(() => {
    getTotal();
    getProducts();
  }, [page, limit]);

  return { products, totalNum };
}
