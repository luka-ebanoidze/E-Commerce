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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0ZDJlMjZhLTI2MzAtNDcyNS1hMDFkLTNiODI0YTZkNDc0MiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY4NzcyNjY0NSwiZXhwIjoxNjg3ODEzMDQ1fQ.5Y2kyLbzG1jYfqf5xiJBY4p0WQj5lZPnrf7HYKkbRUM`,
          },
        }
      );
      
    } catch (error) {
      console.log(error);
    }
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
