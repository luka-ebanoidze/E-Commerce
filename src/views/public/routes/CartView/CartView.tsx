import { useCart } from "react-use-cart";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { AuthContext } from "@src/context/AuthContext";

import { CartContainer } from "./components/CartContainer";

// type TProducts = {
//   id: number;
//   title: string;
//   price: number;
//   thumbnail: string;
//   rating: number;
//   index: number;
//   prod: any;
// };

export default function CartView() {
  
  const { status } = useContext(AuthContext);
  const { t } = useTranslation();

  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return (
      <h1 className="text-white text-4xl max-sm:text-xl h-[100vh] flex justify-center items-center mt-20 text-center ">
        {t("cart.empty")}
      </h1>
    );
  }

  return (
    <div className="mt-20">
      <div className="h-[200px] flex justify-around items-center max-sm:flex-col max-sm:gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="px-5 py-2 rounded-full bg-white border-solid border-[4px] border-blue-600">
            {t("cart.totalPrice")}: {cartTotal}
          </h1>
          <h1 className="px-5 py-2 rounded-full bg-white border-solid border-[4px] border-blue-600">
            {t("cart.totalItems")}: {totalItems}
          </h1>
        </div>
        <div className="px-8 hover:cursor-pointer py-2 rounded-full bg-white border-solid border-[4px] border-blue-600">
          {status === "authorized" ? (
            <Link to="/payment">{t("btnText.buy")}</Link>
          ) : (
            <Link to="/login">{t("btnText.buy")}</Link>
          )}
        </div>
      </div>
      {!totalItems && <div className="h-[500px] w-[500px] bg-black">123</div>}
      <div className="flex flex-col gap-10 py-5">
        {items.map((item: any) => (
          <div
            className=" bg-white py-5 rounded-xl flex justify-around items-center  max-lg:flex-col max-lg:gap-5 "
            key={item.id}
          >
            <div className="w-[400px] max-sm:w-10/12">
              <CartContainer
                key={item.id}
                title={item.title}
                price={item.price}
                thumbnail={item.thumbnail}
                rating={item.rating}
                id={item.id}
                category={item.category}
              />
            </div>
            <div className="flex w-[300px] h-[100px] justify-between flex-col max-sm:w-[150px]">
              <div className="flex justify-between">
                <button
                  className="text-4xl"
                  onClick={() => {
                    updateItemQuantity(item.id, item.quantity + 1);
                  }}
                >
                  <AiFillPlusCircle />
                </button>
                <div className="text-3xl">{item.quantity}</div>
                <button
                  className="text-4xl"
                  onClick={() => {
                    updateItemQuantity(item.id, item.quantity - 1);
                  }}
                >
                  <AiFillMinusCircle />
                </button>
              </div>
              <button
                className="border-solid font-bold border-[3px] py-2 hover:cursor-pointer rounded-full bg-gray-200 border-blue-600"
                onClick={() => removeItem(item.id)}
              >
                {t("btnText.remove")}
              </button>
            </div>
          </div>
        ))}
        <button
          className="border-solid border-[4px] hover:cursor-pointer font-bold py-2 rounded-full bg-white border-blue-600"
          onClick={() => {
            emptyCart();
          }}
        >
          {t("btnText.clear")}
        </button>
      </div>
    </div>
  );
}
