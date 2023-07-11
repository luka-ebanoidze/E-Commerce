import { ProductsContainer } from "@src/components/ProductsContainer";
import { instance } from "@src/utils/axiosInstance";
import { useEffect, useState } from "react";

export function SimilarProducts(props: any) {
  const { category } = props;
  const [products, setProducts] = useState([]);

  async function getSimilarProducts() {
    try {
      if (category) {
        const resp = await instance.get(
          `/products?take=4&category=${category}`
        );
        setProducts(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSimilarProducts();
  }, [category]);

  return (
    <div className="w-full flex flex-wrap  justify-center gap-5 my-14">
      {products?.map((product: any) => (
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
  );
}
