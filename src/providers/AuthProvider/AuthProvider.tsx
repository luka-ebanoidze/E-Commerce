import { PropsWithChildren, useEffect, useState } from "react";

import { AuthContext } from "@src/context/AuthContext";
import { TAuthorizationStage } from "@src/types/auth.types";
import { TLocalStorage } from "@src/types/localstorage";

export function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED
  );

  useEffect(() => {
    if(localStorage.getItem(TLocalStorage.ACCESSTOKEN)) {
        setStatus(TAuthorizationStage.AUTHORIZED)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
}
