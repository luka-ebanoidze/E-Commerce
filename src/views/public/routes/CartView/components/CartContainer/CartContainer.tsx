import { useNavigate } from "react-router-dom";

import { Rating } from "@mui/material";

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

  return (
    <div className=" flex flex-col items-center border-solid  border-[3px] border-gray-400 justify-between gap-2  pb-2 rounded-lg overflow-hidden hover:cursor-pointer">
      <div
        onClick={() => MoveToSingleProduct(id, category)}
        className="flex flex-col items-center "
      >
        <h1 className="text-2xl w-full flex justify-center items-center bg-blue-600 h-[70px] text-center">
          {title}
        </h1>
        <img
          className="h-[270px] mb-3 max-sm:h-[230px] max-s1:h-[200px] max-s2:h-[180px]"
          // src={thumbnail}
          src="https://hbr.org/resources/images/article_assets/2020/04/Apr20_07_1162572100.jpg"
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
