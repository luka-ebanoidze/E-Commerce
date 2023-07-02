import { instance } from "@src/utils/axiosInstance";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useTranslation } from "react-i18next";

export function DeleteProduct(props: any) {
  const { t } = useTranslation();
  const { setClicked } = props;

  const [id, setId] = useState("");

  const { reload, setReload } = useContext(AdminContext);

  async function deleteProduct() {
    const resp = await instance.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("acces-token")}`,
      },
    });
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
        {t("btnText.delete")}
      </button>
    </div>
  );
}
