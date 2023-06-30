import { createContext } from "react";

type AdminContextValue = {
  reload: boolean;
  setReload: any;
};

export const AdminContext = createContext<AdminContextValue>({
  reload: true,
  setReload: () => {},
});
