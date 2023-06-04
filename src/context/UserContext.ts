import { createContext } from "react";

import { TUserContextRole, UserContextValue } from "@src/types/user.types";

export const UserContext = createContext<UserContextValue>({
  currentUser: TUserContextRole.USER,
  setCurrentUser: () => {},
});
