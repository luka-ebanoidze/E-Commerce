import { useState } from "react";

import axios from "axios";

import { useTranslation } from "react-i18next";

export function CreateProduct(props: any) {
  const {t} = useTranslation()
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
          <p>{t("label.title")}</p>
          <input
            value={title}
            onChange={(e) => setTile(e.target.value)}
            type="text"
            className="w-full"
          />
        </div>
        <div>
          <p>{t("label.desc")}</p>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="w-full"
          />
        </div>
        <div>
          <p>{t("label.price")}</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            className="w-full"
          />
        </div>
        <div>
          <p>{t("label.category")}</p>
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
        {t("btnText.create")}
      </button>
    </div>
  );
}
