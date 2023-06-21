import { useCart } from "react-use-cart";
import { CartContainer } from "./components/CartContainer";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

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
  // const {
  //   products: { data },
  // } = useGetProducts();

  const {
    isEmpty,
    // totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return <h1 className="text-center">Your Cart Is Empty</h1>;
  }

  return (
    <div className="mt-20">
      <div className="h-[200px] flex justify-around items-center">
        <div className="flex flex-col gap-10">
          <h1 className="px-5 py-2 rounded-full bg-white border-solid border-[4px] border-blue-600">
            Total Price: {cartTotal}
          </h1>
          <h1 className="px-5 py-2 rounded-full bg-white border-solid border-[4px] border-blue-600">
            Total Items: {totalItems}
          </h1>
        </div>
        <div className="px-8 hover:cursor-pointer py-2 rounded-full bg-white border-solid border-[4px] border-blue-600">
          Buy Now
        </div>
      </div>
      <div className="flex flex-col gap-10 py-5">
        {items.map((item: any) => (
          <div
            className=" bg-white rounded-xl flex justify-around items-center max-lg:flex-col max-lg:gap-5 "
            key={item.id}
          >
            <div className="w-[400px]">
              <CartContainer
                key={item.id}
                title={item.title}
                price={item.price}
                thumbnail={item.thumbnail}
                rating={item.rating}
                id={item.id}
              />
            </div>
            <div className="flex w-[300px] h-[100px] justify-between flex-col">
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
              <button className="border-solid font-bold border-[3px] py-2 hover:cursor-pointer rounded-full bg-gray-200 border-blue-600" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <button
        className="border-solid border-[4px] hover:cursor-pointer font-bold py-2 rounded-full bg-white border-blue-600"
          onClick={() => {
            emptyCart();
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
