import { useState } from "react";

import axios from "axios";

export function CreateProduct(props: any) {
  const { setClicked } = props;

  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  async function createProduct() {
    try {
      const resp = await axios.post(
        "http://localhost:3001/products",
        {
          title: title,
          description: desc,
          price: +price,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("acces-token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full justify-between items-center bg-gray-200 flex gap-5 p-5 rounded-xl max-lg:flex-col">
      <div className="w-2/4 flex flex-col gap-3 max-lg:w-full">
        <div className="w-full">
          <p>Title</p>
          <input
            value={title}
            onChange={(e) => setTile(e.target.value)}
            type="text"
            className="w-full"
          />
        </div>
        <div>
          <p>Description</p>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="w-full"
          />
        </div>
        <div>
          <p>Price</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            className="w-full"
          />
        </div>
        <div>
          <p>Category</p>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="w-full"
          />
        </div>
      </div>
      <button
        className="border-solid border-[3px] bg-white border-blue-600 flex justify-center items-center py-2 px-10 rounded-full"
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
