import { useEffect } from "react";

type TCategory = {
  id: string;
  category: string;
  products: any;
};

export const categories: TCategory[] = [
  {
    id: "1",
    category: "smartphones",
    products: [
      { id: "1", title: "iPhone 9" },
      { id: "2", title: "iPhone X" },
      { id: "3", title: "Samsung Universe 9" },
      { id: "4", title: "OPPOF19" },
      { id: "5", title: "Huawei P30" },
    ],
  },
  {
    id: "2",
    category: "laptops",
    products: [
      { id: "6", title: "MacBook Pro" },
      { id: "7", title: "Samsung Galaxy Book" },
      { id: "8", title: "Microsoft Surface Laptop 4" },
      { id: "9", title: "Infinix INBOOK" },
      { id: "10", title: "HP Pavilion 15-DK1056WM" },
    ],
  },
  {
    id: "3",
    category: "fragrances",
    products: [
      { id: "11", title: "perfume Oil" },
      { id: "12", title: "Brown Perfume" },
      { id: "13", title: "Fog Scent Xpressio Perfume" },
      { id: "14", title: "Non-Alcoholic Concentrated Perfume Oil" },
      { id: "15", title: "Eau De Perfume Spray" },
    ],
  },
];

