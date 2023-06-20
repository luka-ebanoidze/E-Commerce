import { Card } from "@src/components/Card/Card";
import { useEffect, useState } from "react";

import { useGetProducts } from "@src/hooks/useGetProducts";

import { ProductsContainer } from "@src/components/ProductsContainer";
import { Pagination } from "@src/components/Pagination";
import { Filter } from "@src/components/Filter";

export function HomeContent() {
  const [activePage, setActivePage] = useState(1);
  const [filterKey, setFilterKey] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [productss, setProducts] = useState([])

  const limit = 10;

  const {
    products: { data, loading },
    totalNum: { totalNum },
  } = useGetProducts(activePage, limit);
  // setProducts(data)
  // console.log(productss);
  

  // const filtered = [];
  // console.log(filterKey);
  

  // console.log(activePage);

  // console.log(filterKey);

  // useEffect(() => {
  //   setFilteredArr(
  //     data?.products.filter((product: any) => product.price > 500)
  //   );
  //   console.log(filteredArr);
  // }, []);

  // useEffect(()=>{
  //  console.log(
  //    data?.products.filter(
  //      (product: any) =>
  //        product.price > +filterKey[0] && product.price < +filterKey[1]
  //    )
  //  );
  //  setProducts(data)
  //  console.log(data, 'data');
   
  // },[filterKey])


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
        <Filter setFilterKey={setFilterKey} />
        <div className="grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1">
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
        <Pagination
          setActivePage={setActivePage}
          total={totalNum}
          limit={limit}
        />
      </Card>
    </div>
  );
}
