import { useGetCategories } from "@src/hooks/useGetCategories";
import { useContext, useEffect, useState } from "react";

import { categories } from "@src/config/categories";

import { NavCategory } from "./NavCategory";
import { NavContext } from "../context/NavContext";

export function NavCategories() {

  return (
    <div className="flex w-full flex-col">
      <div className="h-[50px] text-white font-bold tracking-widest rounded-t-xl bg-blue-600 flex justify-center items-center">
        Navigation
      </div>
      <div className="w-full py-1 pl-3 divide-y flex flex-col  hover:cursor-pointer max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1">
        {categories.map((el: any, index: any) => (
          <NavCategory key={index} category={el.category} />
        ))}
      </div>
    </div>
  );
}
