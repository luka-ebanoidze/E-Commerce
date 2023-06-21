import React, { useEffect, useState } from "react";

export function Filter(props: any) {
  const { setFilterKey } = props;

  const [filterFirstValue, SetfilterFirstValue] = useState("0");
  const [filterSecondValue, SetfilterSecondValue] = useState("0");

  function FilterByPrice(val1: any, val2: any) {
    // console.log(val1);
    // console.log(val2);
    setFilterKey([val1, val2]);
  }

  useEffect(() => {
    FilterByPrice(filterFirstValue, filterSecondValue);
  }, [filterFirstValue, filterSecondValue]);

  return (
    <div className="h-[100px] mb-8 w-full bg-gray-700 flex justify-around items-center">
      Filter
      {/* <div className="flex gap-3">
        <p>Filter By Price :</p>
        <span className="flex">
          <p>From :</p>
          <input
            onChange={(e) => SetfilterFirstValue(e.target.value)}
            value={filterFirstValue}
            type="number"
            required
          />
        </span>
        <span className="flex">
          <p>To :</p>
          <input
            onChange={(e) => SetfilterSecondValue(e.target.value)}
            value={filterSecondValue}
            type="number"
            required
          />
        </span>
        <button
          onClick={() => {
            FilterByPrice(filterFirstValue, filterSecondValue);
          }}
        >
          Filter
        </button>
      </div>
      <div>
        <p>Filter By RATE :</p>
      </div> */}
    </div>
  );
}
