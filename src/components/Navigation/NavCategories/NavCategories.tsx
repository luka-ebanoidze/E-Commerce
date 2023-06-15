import { useGetCategories } from "@src/hooks/useGetCategories";
import { useState } from "react";

import { NavCategory } from "./NavCategory";

export function NavCategories() {
  // const [activeCategory, setActiveCategory] = useState<string>("");
  // console.log(activeCategory);

  const {
    categories: { data, loading },
  } = useGetCategories();

  return (
    <div className="flex flex-col">
      <div className=" bg-orange-500">
        Navigation <span>Everything</span>
      </div>
      <div>
        {data?.map((category: any, index: any) => (
          <NavCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
