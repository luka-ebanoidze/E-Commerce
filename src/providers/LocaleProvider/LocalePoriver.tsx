import { PropsWithChildren, useState } from "react";

import { IntlProvider } from "react-intl";

import { LocaleContext } from "@src/context/LocaleContext";

import en from "./translations/en.json";
import ge from "./translations/ge.json";

export function LocalePoriver({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<"en" | "ge">("en");

  const messages = { en, ge };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
