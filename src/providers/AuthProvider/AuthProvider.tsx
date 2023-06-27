import { PropsWithChildren, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { AuthContext } from "@src/context/AuthContext";
import { TAuthorizationStage } from "@src/types/auth.types";

export function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED
  );

   useEffect(() => {
     const token = localStorage.getItem("acces-token");
     if (token) {
       const decodedToken = jwt_decode(token);

       setStatus(TAuthorizationStage.AUTHORIZED)
     }
   }, []);

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
}
