import React, { useEffect, useState } from "react";

const pages: any = [];
for (let i = 0; i < 5; i++) {
  pages.push(i);
}

// console.log(pages);

export function Pagination(props: any) {
  const { setActivePage, total, limit } = props;
  const [totalPages, setTotalPages] = useState(0);

  let limits = 5

  const pages: any = []

  for(let i = 1; i <= Math.ceil(total / limits); i++) {
    pages.push(i)
  }
  

  return (
    <div className="grid grid-cols-10 gap-3 m-5 max-sm:grid-cols-5">
      {pages.map((index: number) => (
        <div
          onClick={() => {
            setActivePage(index);
          }}
          className="w-[50px] h-[50px] bg-blue-100 flex justify-center items-center max-lg:w-[35px] max-lg:h-[35px]"
          key={index}
        >
          {index}
        </div>
      ))}
    </div>
  );
}
