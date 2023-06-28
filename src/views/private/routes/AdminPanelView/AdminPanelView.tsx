import { useState } from "react";

import { CreateProduct } from "./components/CreateProduct";
import { ChangeProduct } from "./components/ChangeProduct";
import { DeleteProduct } from "./components/DeleteProduct";
import { Search } from "@src/components/Search";
import { AdminSearch } from "./components/AdminSearch";
import { AdminContext } from "./context/AdminContext";



export default function AdminPanelView() {
  const [clicked, setClicked] = useState(false);
  const [action, setAction] = useState("");

  const [reload, setReload] = useState(true);

  return (
    <AdminContext.Provider value={{ reload, setReload }}>
      <div className="pt-20">
        <div className="w-full py-10 min-h-[100vh] flex flex-col gap-10 items-center justify-evenly">
          <div className="w-2/3 max-2xl:w-full">
            <AdminSearch />
          </div>
          <div className="flex gap-5 max-sm:flex-col">
            <button
              onClick={() => {
                setAction("create");
                setClicked(true);
              }}
              className="bg-green-500 p-3 rounded-full text-white"
            >
              Create Product
            </button>
            <button
              onClick={() => {
                setAction("change");
                setClicked(true);
              }}
              className="bg-blue-500 p-3 rounded-full text-white"
            >
              Change Product
            </button>
            <button
              onClick={() => {
                setAction("delete");
                setClicked(true);
              }}
              className="bg-red-500 p-3 rounded-full text-white"
            >
              Delete Product
            </button>
          </div>
          {clicked && (
            <div className="w-2/4 flex flex-col gap-5 items-center max-lg:w-3/4 max-sm:w-full">
              {action === "create" && <CreateProduct setClicked={setClicked} />}
              {action === "change" && <ChangeProduct setClicked={setClicked} />}
              {action === "delete" && <DeleteProduct setClicked={setClicked} />}
              {
                <button
                  className="w-full border-solid border-[3px] bg-white border-blue-600 flex justify-center items-center py-1 rounded-full"
                  onClick={() => setClicked(false)}
                >
                  Close
                </button>
              }
            </div>
          )}
        </div>
      </div>
    </AdminContext.Provider>
  );
}
