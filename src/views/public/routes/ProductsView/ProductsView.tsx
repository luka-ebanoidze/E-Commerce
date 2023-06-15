
import { useParams } from "react-router";
import axios from "axios";

import { ProductsContainer } from "@src/components/ProductsContainer";
import { useEffect, useState } from "react";



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

  const [productData, setProductData] = useState([])
  

    useEffect(() => {
      try {
        (async function () {
          const resp = await axios.get(
            `https://dummyjson.com/products/category/${param.category}`
          );
          setProductData(resp.data.products);
         
        })();
      } catch (error) {
        console.log(error);
      }
    }, []);  
    

  return (
    <div className="grid grid-cols-4 gap-4">
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
  );
}
