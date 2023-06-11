import { Card } from "@src/components/Card/Card";

import { useGetProducts } from "@src/hooks/useGetProducts";
import { ProductsContainer } from "@src/components/ProductsContainer";

export function HomeContent() {
  const {
    products: { data, loading },
  } = useGetProducts();

  type TProducts = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    rating: number;
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
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
}
