import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navigation } from "@src/components/Navigation";
import { ProductsContainer } from "@src/components/ProductsContainer";

import { GiHamburgerMenu } from "react-icons/gi";
import { Pagination } from "@src/components/Pagination";
import { useGetProducts } from "@src/hooks/useGetProducts";

export default function SearchedView() {
  const param = useParams();
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState(1);

  const limit = 9;

  const [clicked, setClicked] = useState(false);

  const {
    products: { data, loading },
    totalNum: { totalNum },
  } = useGetProducts(activePage, limit, param.value);

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
      <div className="flex flex-wrap justify-center gap-10 bg-gray-200">
        {data?.map((product: any) => (
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
      <Pagination
        setActivePage={setActivePage}
        total={totalNum}
        limit={limit}
      />
    </div>
  );
}
