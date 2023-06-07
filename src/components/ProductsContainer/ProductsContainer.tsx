import { BsCart3 } from "react-icons/bs";
import { Rating } from "@mui/material";
import { useState } from "react";

type TProducts = {
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
};

export function ProductsContainer(props: TProducts) {
  const { title, thumbnail, price, rating } = props;
  //   console.log(raiting);

  function AddToCart() {
    console.log("added to cart");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-red-500 h-[500px] rounded-lg">
      <h1 className="text-2xl h-[100px] text-center">{title}</h1>
      <img className="h-[270px] w-11/12" src={thumbnail} alt="thumbnail" />
      <p className="text-xl">{price}</p>
      <div className="w-11/12 flex justify-between">
        <Rating name="half-rating" defaultValue={rating} precision={0.1} />
        <button onClick={AddToCart}>
          <BsCart3 size={25} />
        </button>
      </div>
    </div>
  );
}
