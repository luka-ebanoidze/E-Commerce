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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0ZDJlMjZhLTI2MzAtNDcyNS1hMDFkLTNiODI0YTZkNDc0MiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY4NzcyNjY0NSwiZXhwIjoxNjg3ODEzMDQ1fQ.5Y2kyLbzG1jYfqf5xiJBY4p0WQj5lZPnrf7HYKkbRUM`,
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
      </div>
      <button
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
