import { useParams } from "react-router";
import { instance } from "@src/utils/axiosInstance";
import { useEffect, useState } from "react";

import { ProductsContainer } from "@src/components/ProductsContainer";
import { NavHeader } from "@src/components/NavHeader";

export default function ProductsView() {
  const param = useParams();
  

  // const [productData, setProductData] = useState<{
  //   id: any;
  //   thumbnail: any;
  //   title: any;
  //   description: any;
  //   price: any;
  // }>({
  //   id: undefined,
  //   thumbnail: undefined,
  //   title: undefined,
  //   description: undefined,
  //   price: undefined,
  // });

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    try {
      (async function () {
        const resp = await instance.get(
          `/products?category=${param.category}`
        );
        
        setProductData(resp.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="mt-20 h-[100vh]">
      <NavHeader />
      <div className="grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1">
        {productData.map((product: any) => (
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
