import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BsCart3 } from "react-icons/bs";

import { NavHeader } from "@src/components/NavHeader";
import { SimilarProducts } from "./SimilarProducts";
import { NavContext } from "@src/components/Navigation/context/NavContext";
import { useCart } from "react-use-cart";

export default function ProductView() {

  const { addItem } = useCart();

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


  return (
    <div className="mt-20 ">
      <NavHeader />
      <div className="flex bg-white rounded-xl justify-around my-[70px] max-xl:gap-5 max-xl:items-center max-xl:flex-col">
        <div>
          <img
            className="w-[450px] h-[450px] max-xl:h-[375px] max-xl:w-[375px] max-sm:h-[300px] max-sm:w-[325px]"
            src={productData.thumbnail}
            alt="product"
          />
        </div>
        <div className="flex flex-col justify-around items-center mt-5 max-xl:h-[350px]">
          <h1 className="text-5xl">{productData.title}</h1>
          <p className="text-m">{productData.description}</p>
          <h2 className="text-xl">{productData.price}</h2>
          <div className="flex gap-[70px] items-center">
            <button className="text-xl border-solid rounded-full hover:cursor-pointer px-6 py-2 border-[3px] border-blue-600">
              Buy Now
            </button>
            <div>
              <button
                className="relative"
                onClick={() => {
                  addItem(productData);
                }}
              >
                <div className="absolute w-[20px] h-[20px] text-white pb-[2px] top-[-40%] right-[-40%] bg-blue-600 rounded-full flex justify-center items-center">
                  +
                </div>
                <BsCart3 size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </div>
  );
}
