import { BsCart3 } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { Rating } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type TProducts = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
};

export function CartContainer(props: TProducts) {
  const navigate = useNavigate();
  const { title, thumbnail, price, rating, id } = props;

  function AddToCart() {
    console.log("added");
  }

  function MoveToSingleProduct(id: number) {
    navigate(`/products/${id}`);
  }



  return (
      <div className="flex flex-col items-center justify-between gap-2 bg-red-500 h-[450px] pb-2 rounded-lg overflow-hidden hover:cursor-pointer">
        <div
          onClick={() => MoveToSingleProduct(id)}
          className="flex flex-col items-center bg-blue-300 w-full"
        >
          <h1 className="text-2xl h-[90px] text-center">{title}</h1>
          <img
            className="h-[270px] w-11/12 mb-3"
            src={thumbnail}
            alt="thumbnail"
          />
          <p className="text-xl">{price}</p>
        </div>
        <div className="w-11/12 flex justify-between items-center bg-green-300">
          <Rating name="half-rating" defaultValue={rating} precision={0.1} />
        </div>
      </div>
  );
}