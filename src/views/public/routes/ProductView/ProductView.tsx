import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BsCart3 } from "react-icons/bs";

import { NavHeader } from "@src/components/NavHeader";
import { SimilarProducts } from "./SimilarProducts";

export default function ProductView() {
  const productId = useParams();
  const [productData, setProductData] = useState<{
    id: any;
    thumbnail: any;
    title: any;
    description: any;
    price: any;
  }>({
    id: undefined,
    thumbnail: undefined,
    title: undefined,
    description: undefined,
    price: undefined,
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
    <>
      <NavHeader />
      <div className="flex bg-[red] justify-around my-[70px]">
        <div>
          <img
            className="w-[500px] h-[500px]"
            src={productData.thumbnail}
            alt="product"
          />
        </div>
        <div className="flex flex-col justify-around items-center mt-5">
          <h1 className="text-5xl">{productData.title}</h1>
          <p className="text-m">{productData.description}</p>
          <h2 className="text-xl">{productData.price}</h2>
          <div className="flex gap-[70px] items-center">
            <h2 className="text-xl">Buy Now</h2>
            <div>
              <Link to='/cart'>
                <BsCart3 size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </>
  );
}
