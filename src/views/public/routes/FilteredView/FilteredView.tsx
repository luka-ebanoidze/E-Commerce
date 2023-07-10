import { useParams } from "react-router";
import { instance } from "@src/utils/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navigation } from "@src/components/Navigation";
import { ProductsContainer } from "@src/components/ProductsContainer";

import { GiHamburgerMenu } from "react-icons/gi";

export default function FilteredView() {
  const param: any = useParams();

  const navigate = useNavigate();

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

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    try {
      (async function () {
        try {
            const resp = await instance.get(`/products`);

            setProductData(
              resp.data.filter(
                (product: any) =>
                  product.price > param.value1 && product.price < param.value2
              )
            );
        } catch (error) {
            
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="my-20 h-[100vh]">
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
      <div className="grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1">
        {productData.map((product: any) => (
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
    </div>
  );
}
