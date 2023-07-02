import { useEffect, useState } from "react";
import { instance } from "@src/utils/axiosInstance";
import { useTranslation } from "react-i18next";

import { NavCategory } from "./NavCategory";

export function NavCategories() {
  const {t} = useTranslation()
  const [currentCategories, setCategories] = useState<any>([]);

  const getProducts = async () => {
    const categories: any = [];

    try {
      const resp = await instance.get(`/products`);

      if (resp.data) {
        resp.data?.map((product: any) => {
          if (categories.find((el: any) => el.category === product.category)) {
            categories
              .find((el: any) => el.category === product.category)
              .products.push({ title: product.title, id: product.id });
          } else {
            categories.push({
              category: product.category,
              products: [{ title: product.title, id: product.id }],
            });
          }
        });
      }

      setCategories(categories);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex w-full flex-col">
      <div className="h-[50px] text-white font-bold tracking-widest rounded-t-xl bg-blue-600 flex justify-center items-center">
        {t('navigation')}
      </div>
      <div className="w-full py-1 pl-3 divide-y max-xl:divide-y-0 max-md:divide-y flex flex-col  hover:cursor-pointer max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1">
        {currentCategories.map((el: any, index: any) => (
          <NavCategory
            key={index}
            category={el.category}
            products={el.products}
          />
        ))}
      </div>
    </div>
  );
}
