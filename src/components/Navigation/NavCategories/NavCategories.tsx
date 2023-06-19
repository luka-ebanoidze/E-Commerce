import { useGetCategories } from "@src/hooks/useGetCategories";
import { useEffect, useState } from "react";

import { categories } from "@src/config/categories";

import { NavCategory } from "./NavCategory";

export function NavCategories() {

  return (
    <div className="flex flex-col">
      <div className=" bg-orange-500">
        Navigation <span>Everything</span>
      </div>
      <div>
        {categories.map((el: any, index: any) => (
          <NavCategory key={index} category={el.category} />
        ))}
      </div>
    </div>
  );
}
