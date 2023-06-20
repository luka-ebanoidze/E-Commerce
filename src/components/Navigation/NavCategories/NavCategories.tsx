import { useGetCategories } from "@src/hooks/useGetCategories";
import { useContext, useEffect, useState } from "react";

import { categories } from "@src/config/categories";

import { NavCategory } from "./NavCategory";
import { NavContext } from "../context/NavContext";

export function NavCategories() {

  return (
    <div className="flex w-full flex-col bg-cyan-500 gap-3">
      <div className=" bg-orange-500 text-center">
        Navigation
      </div>
      <div className="w-full max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1">
        {categories.map((el: any, index: any) => (
          <NavCategory key={index} category={el.category} />
        ))}
      </div>
    </div>
  );
}
