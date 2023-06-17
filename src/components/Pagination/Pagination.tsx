import React, { useEffect, useState } from "react";

const pages: any = [];
for (let i = 0; i < 5; i++) {
  pages.push(i);
}

// console.log(pages);

export function Pagination(props: any) {
  const { setActivePage, total, limit } = props;
  const [totalPages, setTotalPages] = useState(0);

  const pages: any = []

  for(let i = 1; i <= Math.ceil(total / limit); i++) {
    pages.push(i)
  }
  

  return (
    <div className="flex gap-3 m-5">
      {pages.map((index: number) => (
        <div
          onClick={() => {
            setActivePage(index);
          }}
          className="w-[50px] h-[50px] bg-blue-100 flex justify-center items-center"
          key={index}
        >
          {index}
        </div>
      ))}
    </div>
  );
}
