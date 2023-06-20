import { useContext, useEffect, useState } from "react";
import { NavContext } from "../context/NavContext";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { useNavigate } from "react-router";

import { categories } from "@src/config/categories";

export function NavContents({ category }: any) {
  const navigate = useNavigate();

  const [navigation, setNavigation] = useState(categories)

  useEffect(()=>{
    if(localStorage.getItem('navigation')) {
      setNavigation(JSON.parse(localStorage.getItem("navigation")!));
    } else {
      setNavigation(categories)
    }
  },[])
  

  const { activeCategory } = useContext(NavContext);

  return (
    <div className="bg-fuchsia-400 xl:h-full w-full absolute right-[-100%] top-[0] z-30 max-xl:right-0 max-xl:top-[100%] ">
      {navigation.map((el: any) => {
        if (el.category === activeCategory) {
          return (
            <div key={el.category}>
              {el.products.map((product: any) => {
                return (
                  <div
                    onClick={() => {
                      navigate(
                        `/${product.category}/${product.title}/${product.id}`
                      );
                    }}
                    key={product.title}
                  >
                    {product.title}
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
}
