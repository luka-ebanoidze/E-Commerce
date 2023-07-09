import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CreateProduct } from "./components/CreateProduct";
import { ChangeProduct } from "./components/ChangeProduct";
import { DeleteProduct } from "./components/DeleteProduct";
import { AdminSearch } from "./components/AdminSearch";

export default function AdminPanelView() {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState(false);
  const [action, setAction] = useState("");
  const [reload, setReload] = useState(false);

  return (
    <div className="pt-20">
      <div className="w-full py-10 min-h-[100vh] flex flex-col gap-10 items-center justify-evenly">
        <div className="w-2/3 max-2xl:w-full">
          <AdminSearch reload={reload} />
        </div>
        <div className="flex gap-5 max-sm:flex-col">
          <button
            onClick={() => {
              setAction("create");
              setClicked(true);
            }}
            className="bg-green-500 p-3 min-w-[120px] rounded-full text-white"
          >
            {t("btnText.create")}
          </button>
          <button
            onClick={() => {
              setAction("change");
              setClicked(true);
            }}
            className="bg-blue-500 p-3 min-w-[120px] rounded-full text-white"
          >
            {t("btnText.change")}
          </button>
          <button
            onClick={() => {
              setAction("delete");
              setClicked(true);
            }}
            className="bg-red-500 p-3 min-w-[120px] rounded-full text-white"
          >
            {t("btnText.delete")}
          </button>
        </div>
        {clicked && (
          <div className="w-2/4 flex flex-col gap-5 items-center max-lg:w-3/4 max-sm:w-full">
            {action === "create" && <CreateProduct />}
            {action === "change" && (
              <ChangeProduct setReload={setReload} reload={reload} />
            )}
            {action === "delete" && (
              <DeleteProduct setReload={setReload} reload={reload} />
            )}
            {
              <button
                onClick={() => setClicked(false)}
                className="w-full border-solid border-[3px] bg-white border-blue-600 flex justify-center items-center py-1 rounded-full"
              >
                {t("btnText.close")}
              </button>
            }
          </div>
        )}
      </div>
    </div>
  );
}
