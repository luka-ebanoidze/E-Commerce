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
    <div>
      <div className="h-[200px] flex justify-around items-center">
        <div className="flex flex-col gap-10">
          <h1>Total Price: {cartTotal}</h1>
          <h1>Total Items: {totalItems}</h1>
        </div>
        <div>Buy Now</div>
      </div>
      <div className="flex flex-col gap-10 py-5">
        {items.map((item: any) => (
          <div
            className=" bg-red-300 flex justify-around items-center"
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
            <div className="flex w-[300px] h-[100px] justify-between bg-green-200 flex-col">
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
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <button onClick={()=> {emptyCart()}}>Clear Cart</button>
      </div>
    </div>
  );
}
