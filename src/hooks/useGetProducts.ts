import { useState, useEffect } from "react";

import { instance } from "@src/utils/axiosInstance";

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
      const resp = await instance.get(`/products`);
      setTotalNum({ totalNum: resp.data.length });
    } catch (error: any) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      setProducts((prev) => ({ ...prev, loading: true }));
      const resp = await instance.get(
        `/products?skip=${(page - 1) * limit}&take=${limit}`
      );

      // setTotalNum({ totalNum: resp.data.total });
      setProducts((prev) => ({ ...prev, loading: false, data: resp.data }));
    } catch (error: any) {
      setProducts((prev) => ({ ...prev, error: error.message }));
    }
  };

  useEffect(() => {
    getTotal();
    getProducts();
  }, [page, limit]);

  return { products, totalNum };
}
