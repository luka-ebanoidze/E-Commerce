import axios from "axios";
import { useState, useEffect } from "react";

export function useGetCategories() {
  const [categories, setCategories] = useState<{
    data?: any;
    loading: boolean;
    error?: string;
  }>({
    data: undefined,
    loading: false,
    error: undefined,
  });

  const getCategories = async () => {
    try {
      setCategories((prev) => ({ ...prev, loading: true }));
      const resp = await axios.get("https://dummyjson.com/products/categories");
      setCategories((prev) => ({ ...prev, loading: false, data: resp.data }));
    } catch (error: any) {
      setCategories((prev) => ({ ...prev, error: error.message }));
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  

  return { categories };
}
