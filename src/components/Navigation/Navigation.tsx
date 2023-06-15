import { Card } from "../Card";

import { NavContents } from "./NavContents";
import { NavCategories } from "./NavCategories";
import { useState } from "react";

import { NavContext } from "./context/NavContext";

export function Navigation() {
  const [activeCategory, setActiveCategory] = useState<string>("");

  return (
    <NavContext.Provider value={{ activeCategory, setActiveCategory }}>
      <div className="w-1/3 bg-green-300 flex relative">
        <Card>
          <NavCategories />
        </Card>
      </div>
    </NavContext.Provider>
  );
}
