import "flag-icon-css/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";
import useOnclickOutside from "react-cool-onclickoutside";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ge",
    name: "ქართული",
    country_code: "ge",
  },
];
export function LanguageChanger() {
  const [isopen, setIsopen] = useState<boolean>(false);
  const [currentCode, setCurrentCode] = useState<string>("");
  const [currentName, setCurrentName] = useState("string");
  const currentLanguageCode = cookies.get("i18next") || "en";

  useEffect(() => {
    if (currentLanguageCode === "ge") {
      setCurrentCode("ge");
      setCurrentName("ქართული");
    } else {
      setCurrentCode("gb");
      setCurrentName("English");
    }
  }, [currentCode]);

  const ref = useOnclickOutside(() => {
    setIsopen(false);
  });
  return (
    <div ref={ref} className="relative  flex flex-col items-right">
      <button
        onClick={() => setIsopen(!isopen)}
        id="dropdownDefaultButton"
        className="inline-flex bg-gray-200 justify-center  rounded-md  px-2 py-1.5 text-[black] shadow-sm ring-1 "
        type="button"
      >
        <div className="flex items-center">
          <span className={`flag-icon flag-icon-${currentCode} mx-2`}></span>
          <span>{currentName}</span>
        </div>
        <svg
          className="w-4  ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isopen && (
        <div
          id="dropdown"
          className="absolute right-0 z-10 mt-10 w-full items-center  origin-top-right rounded-md bg-gray-200 "
        >
          <ul className="text-sm mb-0">
            {languages.map(({ code, name, country_code }) => (
              <li
                onClick={() => {
                  setIsopen(false), setCurrentCode(country_code);
                }}
                key={country_code}
                style={{
                  opacity: currentLanguageCode === code ? 0.5 : 1,
                }}
              >
                <div
                  className={classNames(
                    "block  py-2 hover:bg-gray-100 rounded ",
                    {
                      disabled: currentLanguageCode === code,
                    }
                  )}
                  onClick={() => {
                    i18next.changeLanguage(code);
                  }}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
