import { useState } from "react";

export function DeleteProduct(props: any) {
  const { setClicked } = props;

  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  function deleteProduct() {
    console.log(id, "id");
    console.log(title, "title");
    console.log(desc, "desc");
    console.log(price, "price");
  }

  return (
    <div className="w-1/3 bg-orange-300 flex justify-between">
      <div>
        <div>
          <p>Id</p>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
          />
        </div>
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
      </div>
      <button
        onClick={() => {
          deleteProduct();
          setClicked(false);
        }}
      >
        Delete
      </button>
    </div>
  );
}
