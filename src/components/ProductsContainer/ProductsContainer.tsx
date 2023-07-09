import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

import { BsCart3 } from "react-icons/bs";

import { Rating } from "@mui/material";

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
  

  function MoveToSingleProduct(id: number, category: any, title: any) {
    navigate(`/${category}/${title}/${id}`);
  }

  return (
    <div className="w-[400px] flex flex-col items-center justify-between bg-white h-[410px] pb-2 rounded-lg overflow-hidden hover:cursor-pointer">
      <div
        onClick={() => MoveToSingleProduct(id, category, title)}
        className="flex flex-col items-center w-full"
      >
        <h1 className="text-xl bg-blue-600 w-full flex justify-center items-center h-[60px] text-center">
          {title}
        </h1>
        <img
          className="h-[270px] border-solid border-black border-2 mb-2 "
          // src={thumbnail}
          src="https://hbr.org/resources/images/article_assets/2020/04/Apr20_07_1162572100.jpg"
          alt="thumbnail"
        />
        <p className="text-xl">{price}</p>
      </div>
      <div className="w-11/12 flex justify-between items-center">
        <Rating name="half-rating" defaultValue={rating} precision={0.1} />
        <button
          className="relative"
          onClick={() => {
            addItem(item);
          }}
        >
          <div className="absolute w-[20px] h-[20px] text-white pb-[2px] top-[-40%] right-[-40%] bg-blue-600 rounded-full flex justify-center items-center">
            +
          </div>
          <BsCart3 size={25} />
        </button>
      </div>
    </div>
  );
}
