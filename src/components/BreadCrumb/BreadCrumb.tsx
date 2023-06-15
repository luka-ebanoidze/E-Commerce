import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


import { FcNext } from "react-icons/fc";

export function BreadCrumb() {
  const navigate = useNavigate()
  const params = useParams();
  const arr = Object.entries(params);

  if (arr[arr.length - 1][0] === "id") {
    arr.pop();
  }

  return (
    <div className="flex items-center">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </div>
      <span className="mx-3">
        <FcNext />
      </span>
      {arr.map((item: any, index: number) => (
        <div className="flex items-center" key={item}>
          <div onClick={()=> {navigate(`/products/${item[1]}`)}}>{item[1]}</div>
          <div className="mx-3">
            {index !== arr.length - 1 && (
              <span>
                <FcNext />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}