type TCategory = {
  category: string;
  products: any;
};

export const categories: TCategory[] = [
  {
    category: "smartphones",
    products: [
      { title: "iPhone 9" },
      { title: "iPhone X" },
      { title: "Samsung Universe 9" },
      { title: "OPPOF19" },
      { title: "Huawei P30" },
    ],
  },
  {
    category: "laptops",
    products: [
      { title: "MacBook Pro" },
      { title: "Samsung Galaxy Book" },
      { title: "Microsoft Surface Laptop 4" },
      { title: "Infinix INBOOK" },
      { title: "HP Pavilion 15-DK1056WM" },
    ],
  },
  {
    category: "fragrances",
    products: [
      { title: "perfume Oil" },
      { title: "Brown Perfume" },
      { title: "Fog Scent Xpressio Perfume" },
      { title: "Non-Alcoholic Concentrated Perfume Oil" },
      { title: "Eau De Perfume Spray" },
    ],
  },
];

