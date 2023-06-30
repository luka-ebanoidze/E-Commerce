import { useGetProducts } from "@src/hooks/useGetProducts";
import { useState } from "react";

import { FcNext, FcPrevious } from "react-icons/fc";

export function Slider() {
  const {
    products: { data },
  } = useGetProducts(1, 3);

  // const images = data?[1].thumbnail;
  
  const [currentIndex, setCurrentIndex] = useState(0);

  function Next() {
    setCurrentIndex(currentIndex + 1);
    // if (currentIndex === images.length - 1) {
    //   setCurrentIndex(0);
    // }
  }

  function Previous() {
    setCurrentIndex(currentIndex - 1);
    // if (currentIndex === 0) {
    //   setCurrentIndex(images.length - 1);
    // }
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden w-3/4 h-[400px] relative max-xl:w-full max-xl:h-[350px] max-lg:h-[300px] max-sm:h-[250px]">
      {/* <img className="w-full h-full" src={images?.[currentIndex]} alt="" /> */}
      <img className="w-full h-full" />

      <div
        className="absolute inset-y-2/4 left-5 text-3xl text-white hover:cursor-pointer"
        onClick={() => Previous()}
      >
        <FcPrevious color="red" />
      </div>
      <div
        className="absolute inset-y-2/4 right-5 text-3xl hover:cursor-pointer"
        onClick={() => Next()}
      >
        <FcNext />
      </div>
    </div>
  );
}
