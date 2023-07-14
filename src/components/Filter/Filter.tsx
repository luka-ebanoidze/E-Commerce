import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Filter() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [filterFirstValue, SetfilterFirstValue] = useState("0");
  const [filterSecondValue, SetfilterSecondValue] = useState("0");

  function FilterByPrice(val1: string, val2: string) {
    if (val1 !== val2 && val1 < val2) {
      navigate(`filter/${val1}/${val2}`);
    }
  }

  return (
    <div className="min-h-[100px] border-solid border-[4px] rounded-xl border-white mb-8 w-full bg-gray-700 flex justify-around items-center">
      <div className="flex gap-8 items-center max-sm:flex-col max-md:gap-2">
        <div className="flex gap-3  max-s1:flex-col">
          <p className="text-white text-md">{t("filterComp.filterBy")} :</p>
          <input
            onChange={(e) => SetfilterSecondValue(e.target.value)}
            type="range"
            id="price-range"
            name="price-range"
            min="0"
            max="5000"
            step="10"
            className="accent-black"
          />
          <div className="w-[40px] text-white">{filterSecondValue}</div>
        </div>

        <button
          className="border-solid border-gray-600 border-[4px] bg-white px-10 py-2 rounded-full"
          onClick={() => {
            FilterByPrice(filterFirstValue, filterSecondValue);
          }}
        >
          {t("btnText.filter")}
        </button>
      </div>
    </div>
  );
}
