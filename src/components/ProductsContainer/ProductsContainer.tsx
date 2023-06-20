import { BsCart3 } from "react-icons/bs";
import { Rating } from "@mui/material";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useCart } from "react-use-cart";
import { NavContext } from "../Navigation/context/NavContext";

type TProducts = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  item: any;
  category: any;
};

export function ProductsContainer(props: TProducts) {
  const { addItem } = useCart();

  const navigate = useNavigate();
  const { title, thumbnail, price, rating, id, item, category } = props;

  function AddToCart() {
    console.log("added");
  }

  function MoveToSingleProduct(id: number, category: any, title: any) {
    console.log(title);
    
    navigate(`/${category}/${title}/${id}`);
  }

  // const { activeCategory } = useContext(NavContext);
  // console.log(id);

  return (
    <div className="flex flex-col items-center justify-between bg-red-500 h-[410px] pb-2 rounded-lg overflow-hidden hover:cursor-pointer max-lg:h-[350px] max-sm:h-[300px]">
      <div
        onClick={() => MoveToSingleProduct(id, category, title)}
        className="flex flex-col items-center w-full"
      >
        <h1 className="text-xl h-[60px] text-center">{title}</h1>
        <img
          className="h-[250px] w-11/12 mb-2 max-lg:h-[200px] max-sm:h-[150px]"
          src={thumbnail}
          alt="thumbnail"
        />
        <p className="text-xl">{price}</p>
      </div>
      <div className="w-11/12 flex justify-between items-center bg-green-300">
        <Rating name="half-rating" defaultValue={rating} precision={0.1} />
        <button
          onClick={() => {
            AddToCart();
            addItem(item);
          }}
        >
          <BsCart3 size={25} />
        </button>
      </div>
    </div>
  );
}
