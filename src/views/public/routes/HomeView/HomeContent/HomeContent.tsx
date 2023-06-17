import { Card } from "@src/components/Card/Card";

import { useGetProducts } from "@src/hooks/useGetProducts";
import { ProductsContainer } from "@src/components/ProductsContainer";
import { Pagination } from "@src/components/Pagination";
import { useState } from "react";

export function HomeContent() {
  const [activePage, setActivePage] = useState(1);

  const limit = 10;

  console.log(activePage);
  

  const {
    products: { data, loading },
    totalNum: {totalNum}
  } = useGetProducts(activePage, limit);
  

  type TProducts = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    rating: number;
    item: any;
    category: any;
  };

  return (
    <div className="w-full">
      <Card>
        <div className="grid grid-cols-4 gap-4">
          {data?.products.map((product: TProducts) => {
            return (
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
            );
          })}
        </div>
        <Pagination setActivePage={setActivePage} total={totalNum} limit={limit} />
      </Card>
    </div>
  );
}
