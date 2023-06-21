import { TCategory } from "@src/types/category";
import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";

import { NavContents } from "../../NavContents";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

import { AiFillCaretDown } from "react-icons/ai";

export function NavCategory({ category }: any) {
  const { activeCategory, setActiveCategory } = useContext(NavContext);
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="w-full h-[30px]   flex justify-between"
      onMouseEnter={() => {
        setActiveCategory(category);
        console.log(activeCategory);
      }}
      onClick={() => {
        setActiveCategory(category);
      }}
      onMouseLeave={() => {
        setActiveCategory("");
      }}
    >
      <div
        className=""
        onClick={() => {
          navigate(`products/${category}`);
        }}
      >
        {category}
      </div>
      <div
        onClick={() => {
          setActiveCategory(category);
          setClicked(!clicked);
        }}
        className="absolute right-5 hidden max-md:flex"
      >
        <AiFillCaretDown size={20} />
      </div>
      {activeCategory === category && clicked && (
        <div
          onMouseEnter={() => {
            setActiveCategory(activeCategory);
          }}
        >
          <NavContents category={activeCategory} />
        </div>
      )}
    </div>
  );
}
