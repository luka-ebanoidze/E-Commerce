import { instance } from "@src/utils/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

import { AuthContext } from "@src/context/AuthContext";

import { BsCart3 } from "react-icons/bs";

import { NavHeader } from "@src/components/NavHeader";
import { SimilarProducts } from "./SimilarProducts";


export default function ProductView() {
  const { addItem } = useCart();
  const { t } = useTranslation();
  const { status } = useContext(AuthContext);

  const productId = useParams();
  
  const [productData, setProductData] = useState<{
    id: any;
    thumbnail: any;
    title: any;
    description: any;
    price: any;
    category: any;
  }>({
    id: undefined,
    thumbnail: undefined,
    title: undefined,
    description: undefined,
    price: undefined,
    category: undefined,
  });


  useEffect(() => {

    try {
      (async function () {
        const resp = await instance.get(
          `/products/${productId.id}`
        );
        setProductData(resp.data);
        
      })();
    } catch (error) {
      console.log(error);
    }
  }, [productId]);

  return (
    <div className="mt-20 ">
      <NavHeader />
      <div className="flex bg-white rounded-xl justify-around my-[70px] max-xl:gap-5 max-xl:items-center max-xl:flex-col">
        <div>
          <img
            className="w-[450px] h-[450px] max-xl:h-[375px] max-xl:w-[375px] max-sm:h-[300px] max-sm:w-[325px]"
            src="https://hbr.org/resources/images/article_assets/2020/04/Apr20_07_1162572100.jpg"
            alt="product"
          />
        </div>
        <div className="flex flex-col justify-around items-center mt-5 max-xl:h-[350px]">
          <h1 className="text-5xl">{productData.title}</h1>
          <p className="text-m">{productData.description}</p>
          <h2 className="text-xl">{productData.price}</h2>
          <div className="flex gap-[70px] items-center">
            <button className="text-xl border-solid rounded-full hover:cursor-pointer px-6 py-2 border-[3px] border-gray-600">
              {status === "authorized" ? (
                <Link to="/payment">{t("btnText.buy")}</Link>
              ) : (
                <Link to="/login">{t("btnText.buy")}</Link>
              )}
            </button>
            <div>
              <button
                className="relative"
                onClick={() => {
                  addItem(productData);
                }}
              >
                <div className="absolute w-[20px] h-[20px] text-white pb-[2px] top-[-40%] right-[-40%] bg-gray-600 rounded-full flex justify-center items-center">
                  +
                </div>
                <BsCart3 size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts category={productData.category} />
    </div>
  );
}
