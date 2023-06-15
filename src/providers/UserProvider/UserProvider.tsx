import { PropsWithChildren, useState } from "react";

import { UserContext } from "@src/context/UserContext";
import { TUserContextRole } from "@src/types/user.types";
import axios from "axios";
import { TLocalStorage } from "@src/types/localstorage";

export function UserProvider({ children }: PropsWithChildren) {

  const [currentUser, setCurrentUser] = useState<TUserContextRole>(
    TUserContextRole.USER  
  );

  
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}
