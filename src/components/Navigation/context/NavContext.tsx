import { PropsWithChildren, createContext, useState } from "react";

type NavContextValue = {
  activeCategory: string;
  setActiveCategory: any;
};

export const NavContext = createContext<NavContextValue>({
  activeCategory: "",
  setActiveCategory: () => {},
});
