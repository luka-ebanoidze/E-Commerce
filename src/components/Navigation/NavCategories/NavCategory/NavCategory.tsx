import { TCategory } from "@src/types/category";
import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";

import { NavContents } from "../../NavContents";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

export function NavCategory({ category }: any) {
  const { activeCategory, setActiveCategory } = useContext(NavContext);
  const navigate = useNavigate()
  

  const [clicked,setClicked] = useState()
  

  return (

      <div
        className="bg-green-500 w-full flex justify-between"
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
          onClick={() => {
            navigate(`products/${category}`);
          }}
        >
          {category}
        </div>
        <div onClick={()=> setActiveCategory(category)} className="absolute right-0 hidden max-md:flex">click</div>
      <div
        onMouseEnter={() => {
          setActiveCategory(activeCategory);
        }}
      >
        <NavContents category={activeCategory} />
      </div>
      {/* {activeCategory === category && (
        <div onMouseEnter={()=> {
          setActiveCategory(category);
        }}>
          <NavContents category={category} />
        </div>
      )} */}
    </div>
  );
}
