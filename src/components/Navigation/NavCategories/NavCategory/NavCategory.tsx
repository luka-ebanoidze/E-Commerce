import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { NavContext } from "../../context/NavContext";

import { AiFillCaretDown } from "react-icons/ai";

import { NavContents } from "../../NavContents";

export function NavCategory({ category, products }: any) {
  const { activeCategory, setActiveCategory } = useContext(NavContext);
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="w-full h-[30px]   flex justify-between"
      onMouseEnter={() => {
        setActiveCategory(category);
        setClicked(true);
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
          <NavContents category={activeCategory} products={products} />
        </div>
      )}
    </div>
  );
}
