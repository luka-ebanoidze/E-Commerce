import axios from "axios";
import { useState, useEffect } from "react";
export function useGetProducts(page = 1, limit = 0) {
  const [totalNum, setTotalNum] = useState<{ totalNum: any }>({
    totalNum: undefined,
  });

  // function getSkip(page: number, limit: number) {
  //   // console.log(page, 'page');
  //   // console.log(limit, 'limit');

  //   return (page - 1) * limit;
  // }
  // console.log(getSkip(page, limit), 'skip');

  const [products, setProducts] = useState<{
    data?: any;
    loading: boolean;
    error?: string;
  }>({
    data: undefined,
    loading: false,
    error: undefined,
  });

  const getProducts = async () => {
    try {
      setProducts((prev) => ({ ...prev, loading: true }));
      const resp = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${(page - 1) * limit}`
      );
      setTotalNum({ totalNum: resp.data.total });
      setProducts((prev) => ({ ...prev, loading: false, data: resp.data }));
    } catch (error: any) {
      setProducts((prev) => ({ ...prev, error: error.message }));
    }
  };

  useEffect(() => {
    getProducts();
  }, [page, limit]);

  return { products, totalNum };
}
