import { useState } from "react";

import { NavContext } from "./context/NavContext";

import { Card } from "../Card";
import { NavCategories } from "./NavCategories";

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
