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
  category: string;
};

export function CartContainer(props: TProducts) {
  const navigate = useNavigate();
  const { title, thumbnail, price, rating, id, category } = props;

  function MoveToSingleProduct(id: number, category: string) {
    navigate(`/products/${category}/${id}`);
  }

  // console.log(title);

  return (
    <div className="flex flex-col items-center border-solid  border-[3px] border-gray-400 justify-between gap-2  pb-2 rounded-lg overflow-hidden hover:cursor-pointer">
      <div
        onClick={() => MoveToSingleProduct(id, category)}
        className="flex flex-col items-center  w-full "
      >
        <h1 className="text-2xl h-[90px] text-center">{title}</h1>
        <img
          className="h-[270px] w-11/12 mb-3 max-sm:w-[300px] max-sm:h-[150px]"
          src={thumbnail}
          alt="thumbnail"
        />
        <p className="text-xl">{price}</p>
      </div>
      <div className="w-11/12 flex justify-between items-center">
        <Rating name="half-rating" defaultValue={rating} precision={0.1} />
      </div>
    </div>
  );
}
