import { createContext } from "react";

import { AuthContextValue, TAuthorizationStage } from "@src/types/auth.types";

export const AuthContext = createContext<AuthContextValue>({
  status: TAuthorizationStage.UNAUTHORIZED,
  setStatus: () => {},
});
