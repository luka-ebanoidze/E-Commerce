import { createContext } from "react";

export type LocaleContextValue = {
  locale: "en" | "ge";
  setLocale: React.Dispatch<React.SetStateAction<"en" | "ge">>;
};

export const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});
