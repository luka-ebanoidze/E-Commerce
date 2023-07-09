import { instance } from "@src/utils/axiosInstance";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function DeleteProduct(props: any) {
  const { t } = useTranslation();
  const { setReload, reload } = props;

  const [error, setError] = useState("")
  const [id, setId] = useState("");

  async function deleteProduct() {
    if(id === "") {
      setError('Type Something')
    }
    try {
      if (id !== "") {
        setReload(!reload);
        const resp = await instance.delete(`/products/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("acces-token")}`,
          },
        });
        if(resp) {
          setError('Successfully Deleted')
        }
        setId("")
      }
    } catch (error) {
      setError("something went wrong")
    }
  }

  return (
    <div className="w-full p-5 rounded-xl bg-gray-200 flex gap-5 items-center justify-between max-md:flex-col">
      <div className="w-full">
        <div>
          <p>Id</p>
          <input
            required
            className="w-full"
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
          />
          <span className="text-[red]">{error}</span>
        </div>
      </div>
      <button
        className="border-solid border-[3px] bg-white border-blue-600 flex justify-center items-center py-2 px-10 rounded-full"
        onClick={() => {
          deleteProduct();
        }}
      >
        {t("btnText.delete")}
      </button>
    </div>
  );
}
