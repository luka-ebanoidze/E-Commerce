import { useState } from "react";
import { instance } from "@src/utils/axiosInstance";
import { useTranslation } from "react-i18next";

export function CreateProduct() {
  const { t } = useTranslation();

  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [error, setError] = useState("");

  async function createProduct(e: any) {
    e.preventDefault();
    try {
      const resp = await instance.post(
        `/products`,
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
      if (resp) {
        setError("Succesfully Created");
        setTile("")
        setDesc("")
        setCategory("")
        setPrice("")
      }
    } catch (error) {
      setError("Something went wrong");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        createProduct(e);
      }}
    >
      <div className="w-full justify-between items-center bg-gray-200 flex gap-5 p-5 rounded-xl max-lg:flex-col">
        <div className="w-2/4 flex flex-col gap-3 max-lg:w-full">
          <div className="w-full">
            <p>{t("label.title")}</p>
            <input
              value={title}
              onChange={(e) => setTile(e.target.value)}
              type="text"
              className="w-full"
              required
            />
          </div>
          <div>
            <p>{t("label.desc")}</p>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              className="w-full"
              required
            />
          </div>
          <div>
            <p>{t("label.price")}</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className="w-full"
              required
            />
          </div>
          <div>
            <p>{t("label.category")}</p>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="w-full"
              required
            />
          </div>
          <span className="text-[red]">{error}</span>
        </div>
        <button
          className="border-solid border-[3px] bg-white border-blue-600 flex justify-center items-center py-2 px-10 rounded-full"
          type="submit"
        >
          {t("btnText.create")}
        </button>
      </div>
    </form>
  );
}
