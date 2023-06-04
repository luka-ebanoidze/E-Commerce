import { PropsWithChildren } from "react";

import { UserProvider } from "./UserProvider";
import { AuthProvider } from "./AuthProvider";

export function Providers({ children }: PropsWithChildren) {
  return <AuthProvider>
    <UserProvider>{children}</UserProvider>
  </AuthProvider>;
}
