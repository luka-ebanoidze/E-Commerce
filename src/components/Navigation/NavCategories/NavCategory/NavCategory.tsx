import { TCategory } from "@src/types/category";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

import { NavContents } from "../../NavContents";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

export function NavCategory({ category }: any) {
  const { activeCategory, setActiveCategory } = useContext(NavContext);
  const navigate = useNavigate()
  

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
      <div
        onClick={() => {
          navigate(`products/${category}`);
        }}
      >
        {category}
      </div>
      {activeCategory === category && (
        <div onMouseEnter={()=> {
          setActiveCategory(category);
        }}>
          <NavContents category={category} />
        </div>
      )}
    </div>
  );
}
