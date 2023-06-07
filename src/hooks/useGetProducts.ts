import axios from "axios";
import { useState, useEffect } from "react";
export function useGetProducts() {
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
      const resp = await axios.get("https://dummyjson.com/products");
      setProducts((prev) => ({ ...prev, loading: false, data: resp.data }));
    } catch (error: any) {
      setProducts((prev) => ({ ...prev, error: error.message }));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
}
