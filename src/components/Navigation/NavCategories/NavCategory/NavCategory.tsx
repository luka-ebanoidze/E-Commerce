import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";

import { NavContents } from "../../NavContents";
import { useNavigate } from "react-router";

import { AiFillCaretDown } from "react-icons/ai";

export function NavCategory({ category, products }: any) {
  const { activeCategory, setActiveCategory } = useContext(NavContext);
  const navigate = useNavigate();

  // console.log(category, products);

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
