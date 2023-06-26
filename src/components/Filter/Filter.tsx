import axios from "axios";
import { useEffect, useState } from "react";

export function Filter(props: any) {
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
    <div className="h-[100px] mb-8 w-full bg-gray-700 flex justify-around items-center">
      <div className="flex gap-3">
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
    </div>
  );
}
