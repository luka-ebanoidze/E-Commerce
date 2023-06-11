import { TLocalStorage } from "@src/types/localstorage";
import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

type TProduct = {
  id: any;
  thumbnail: string;
};

export default function ProductView() {
  const productId = useParams();
  const [productData, setProductData] = useState<{
    id: any;
    thumbnail: any;
    title: any;
    description: any;
  }>({
    id: undefined,
    thumbnail: undefined,
    title: undefined,
    description: undefined,
  });

  useEffect(() => {
    try {
      (async function () {
        const resp = await axios.get(
          `https://dummyjson.com/products/${productId.id}`
        );
        setProductData(resp.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(productData);

  return (
    <div className="flex">
      <div>
        <img src={productData.thumbnail} alt="" />
      </div>
      <div>
        <h1>{productData.title}</h1>
        <p>{productData.description}</p>
      </div>
    </div>
  );
}
