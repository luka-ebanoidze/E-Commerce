import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { useNavigate } from "react-router";

export function NavContents({ category }: any) {
  const navigate = useNavigate();
  const {
    products: { data, loading },
  } = useGetProducts();

  const { activeCategory } = useContext(NavContext);

  return (
    <div className="bg-fuchsia-400 h-full w-full absolute right-[-100%] top-[0] z-30">
      {data?.products.map((product: any) => {
        if (product.category === activeCategory) {
          return (
            <div
              onClick={() => {           
                navigate(`/${product.category}/${product.title}/${product.id}`)
              }}
              key={product.id}
            >
              {product.title}
            </div>
          );
        }
      })}
    </div>
  );
}
