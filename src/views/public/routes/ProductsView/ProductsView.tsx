import { useParams } from "react-router";
import { instance } from "@src/utils/axiosInstance";
import { useEffect, useState } from "react";

import { ProductsContainer } from "@src/components/ProductsContainer";
import { NavHeader } from "@src/components/NavHeader";

import { TProduct } from "@src/types/product.types";

export default function ProductsView() {
  const param = useParams();

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    try {
      (async function () {
        const resp = await instance.get(`/products?category=${param.category}`);

        setProductData(resp.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [param.category]);

  return (
    <div className="mt-20 min-h-[100vh] pb-10">
      <NavHeader />
      <div className="flex flex-wrap justify-center gap-5">
        {productData.map((product: TProduct) => (
          <ProductsContainer
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            rating={product.rating}
            id={product.id}
            item={product}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}
