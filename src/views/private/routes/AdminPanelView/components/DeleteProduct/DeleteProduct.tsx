import axios from "axios";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

import { categories } from "@src/config/categories";

export function DeleteProduct(props: any) {
  const { setClicked } = props;

  const [id, setId] = useState("");

  const { reload, setReload } = useContext(AdminContext);

  // categories.map((category: any) => {
  //   console.log(
  //     category.products.filter(
  //       (product: any) => product.id !== "47cf27fc-48de-47f3-9825-00ad733ff36d"
  //     )
  //   );
  // });

  async function deleteProduct() {
    const resp = await axios.delete(`http://localhost:3001/products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("acces-token")}`,
      },
    });

    // if (resp) {
    //   // categories.push({
    //   //   category: "satesto",
    //   //   products: [{ title: "ckkd", id: "123" }],
    //   // });
    // }
  }

  return (
    <div className="w-full p-5 rounded-xl bg-gray-200 flex gap-5 items-center justify-between max-md:flex-col">
      <div className="w-full">
        <div>
          <p>Id</p>
          <input
          className="w-full"
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <button
        className="border-solid border-[3px] bg-white border-blue-600 flex justify-center items-center py-2 px-10 rounded-full"
        onClick={() => {
          setReload(!reload);
          deleteProduct();
          setClicked(false);
        }}
      >
        Delete
      </button>
    </div>
  );
}
