import { PropsWithChildren } from "react";

import { UserProvider } from "./UserProvider";
import { AuthProvider } from "./AuthProvider";
import { CurrentUserProvider } from "./CurrentUserProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <CurrentUserProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </CurrentUserProvider>
  );
}
