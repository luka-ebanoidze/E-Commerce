import { PropsWithChildren } from "react";

import { UserProvider } from "./UserProvider";
import { AuthProvider } from "./AuthProvider";
import { CurrentUserProvider } from "./CurrentUserProvider";
import { LocalePoriver } from "./LocaleProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <LocalePoriver>
      <CurrentUserProvider>
        <AuthProvider>
          <UserProvider>{children}</UserProvider>
        </AuthProvider>
      </CurrentUserProvider>
    </LocalePoriver>
  );
}
