import React, { useState } from "react";

import { categories } from "@src/config/categories";
import { TCategory } from "@src/types/category";

export function CreateProduct(props: any) {
  const { setClicked } = props;

  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function createProduct() {
    console.log(categories.find((el) => el.category === category));
    if (categories.find((el) => el.category === category)) {
      categories
        .find((el) => el.category === category)
        ?.products.push({ id: '999', title: title });
    } else {
      categories.push({
        id: "new id",
        category: category,
        products: [{ id: "new product id", title: title }],
      });
    }

    // console.log(title, "title");
    // console.log(desc, "desc");
    // console.log(price, "price");
    // console.log(category, "category");
    localStorage.setItem("navigation", JSON.stringify(categories));
  }

  return (
    <div className="w-1/3 bg-orange-300 flex justify-between">
      <div>
        <div>
          <p>Title</p>
          <input
            value={title}
            onChange={(e) => setTile(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <p>Description</p>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <p>Price</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <p>Category</p>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <button
        onClick={() => {
          createProduct();
          setClicked(false);
        }}
      >
        Create
      </button>
    </div>
  );
}
