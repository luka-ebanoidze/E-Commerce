import { TCategory } from "@src/types/category";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

import { NavContents } from "../../NavContents";

export function NavCategory({ category }: any) {
  const { activeCategory, setActiveCategory } = useContext(NavContext);

  return (
    <div
      className=""
      onMouseEnter={() => {
        setActiveCategory(category);
      }}
      onMouseLeave={() => {
        setActiveCategory("");
      }}
    >
      <div>{category}</div>
      {activeCategory === category && <NavContents />}
    </div>
  );
}
