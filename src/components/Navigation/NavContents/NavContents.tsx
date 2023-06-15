import { useContext } from "react";
import { NavContext } from "../context/NavContext";

export function NavContents() {
  const { activeCategory } = useContext(NavContext);
  console.log(activeCategory);
  
  return (
    <div className="bg-fuchsia-400 h-full w-full absolute right-[-100%] top-[0] z-30">
      contentss
    </div>
  );
}
