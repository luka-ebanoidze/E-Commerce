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
      <div>
        <div className="w-full h-[100vh] bg-purple-500 flex flex-col items-center justify-evenly">
          <div className="w-2/3 bg-red-400">
            <AdminSearch />
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => {
                setAction("create");
                setClicked(true);
              }}
              className="bg-green-500"
            >
              Create Product
            </button>
            <button
              onClick={() => {
                setAction("change");
                setClicked(true);
              }}
              className="bg-blue-500"
            >
              Change Product
            </button>
            <button
              onClick={() => {
                setAction("delete");
                setClicked(true);
              }}
              className="bg-red-500"
            >
              Delete Product
            </button>
          </div>
          {clicked && (
            <div>
              {action === "create" && <CreateProduct setClicked={setClicked} />}
              {action === "change" && <ChangeProduct setClicked={setClicked} />}
              {action === "delete" && <DeleteProduct setClicked={setClicked} />}
              {<button onClick={() => setClicked(false)}>Close</button>}
            </div>
          )}
        </div>
      </div>
    </AdminContext.Provider>
  );
}
