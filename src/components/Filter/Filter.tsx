import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Filter(props: any) {
  const { t } = useTranslation();
  const { setFilteredArray } = props;

  const [filterFirstValue, SetfilterFirstValue] = useState("0");
  const [filterSecondValue, SetfilterSecondValue] = useState("0");

  const getProducts = async () => {
    try {
      const resp = await axios.get(`http://localhost:3001/products`);
      setFilteredArray(
        resp.data.filter(
          (product: any) =>
            product.price > filterFirstValue &&
            product.price < filterSecondValue
        )
      );
    } catch (error: any) {
      console.log(error);
    }
  };

  function FilterByPrice(val1: any, val2: any) {
    getProducts();
  }

  return (
    <div className="min-h-[100px] mb-8 w-full bg-gray-700 flex justify-around items-center">
      <div className="flex gap-3 items-center max-xl:flex-col">
        <p className="text-white font-bold">{t("filterComp.filterBy")} :</p>
        <div className="flex gap-3 max-md:flex-col max-md:items-end">
          <span className="flex items-center">
            <p className="text-white font-bold mr-3">
              {t("filterComp.from")} :
            </p>
            <input
              className="pl-2 py-1"
              onChange={(e) => SetfilterFirstValue(e.target.value)}
              value={filterFirstValue}
              type="number"
              required
            />
          </span>
          <span className="flex items-center">
            <p className="text-white font-bold mr-3">{t("filterComp.to")} :</p>
            <input
              className="pl-2 py-1"
              onChange={(e) => SetfilterSecondValue(e.target.value)}
              value={filterSecondValue}
              type="number"
              required
            />
          </span>
        </div>
        <button
          className="border-solid border-blue-600 border-[4px] bg-white px-10 py-2 rounded-full"
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
