import { Card } from "../Card";

import { NavContents } from "./NavContents";
import { NavCategories } from "./NavCategories";
import { useEffect, useState } from "react";

import { NavContext } from "./context/NavContext";
import axios from "axios";

export function Navigation() {
  const [activeCategory, setActiveCategory] = useState<string>("");

  return (
    <NavContext.Provider value={{ activeCategory, setActiveCategory }}>
      <div className="w-1/3 flex relative max-xl:w-full">
        <Card>
          <NavCategories />
        </Card>
      </div>
    </NavContext.Provider>
  );
}
