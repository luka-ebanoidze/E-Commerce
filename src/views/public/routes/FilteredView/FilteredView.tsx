import { useParams } from "react-router";
import { instance } from "@src/utils/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navigation } from "@src/components/Navigation";
import { ProductsContainer } from "@src/components/ProductsContainer";

import { GiHamburgerMenu } from "react-icons/gi";

export default function FilteredView() {
  const param: any = useParams();

  const pageSize = 9

  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productData, setProductData] = useState([]);

   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;

   const currentProducts = productData.slice(startIndex, endIndex);

  const pages: any = [];

  for (let i = 1; i <= Math.ceil(total / 9); i++) {
    pages.push(i);
  }


  const [clicked, setClicked] = useState(false);

  // const [productData, setProductData] = useState<{
  //   id: any;
  //   thumbnail: any;
  //   title: any;
  //   description: any;
  //   price: any;
  // }>({
  //   id: undefined,
  //   thumbnail: undefined,
  //   title: undefined,
  //   description: undefined,
  //   price: undefined,
  // });

  

  useEffect(() => {
    try {
      (async function () {
        try {
          const resp = await instance.get(`/products`);
          setTotal(resp.data.length);

          setProductData(
            resp.data.filter(
              (product: any) =>
                product.price > param.value1 && product.price < param.value2
            )
          );
        } catch (error) {}
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="my-20 min-h-[100vh]">
      <div className="w-full h-[80px] bg-gray-700 my-12 flex items-center justify-between px-14 max-lg:px-0 max-lg:flex-col-reverse max-lg:items-start max-sm:h-[50px] max-sm:justify-center">
        <div className="relative pl-3">
          <button onClick={() => setClicked(!clicked)}>
            <GiHamburgerMenu size={30} />
          </button>
          <div className="absolute w-[800px] max-xl:w-[450px] max-md:w-[350px] max-sm:w-[180px] z-50">
            {clicked && <Navigation />}
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="text-white"
        >
          Home
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {currentProducts.map((product: any) => (
          <ProductsContainer
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            rating={product.rating}
            id={product.id}
            item={product}
            category={product.category}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 m-5">
        {pages.map((index: number) => (
          <div
            key={index}
            onClick={() => setCurrentPage(index)}
            className="w-[50px] h-[50px] bg-gray-600 text-white flex justify-center items-center max-lg:w-[35px] max-lg:h-[35px]"
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}
