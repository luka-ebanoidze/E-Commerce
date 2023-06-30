const pages: any = [];

for (let i = 0; i < 5; i++) {
  pages.push(i);
}

export function Pagination(props: any) {
  const { setActivePage, total, limit } = props;
  
  const pages: any = []

  for(let i = 1; i <= Math.ceil(total / limit); i++) {
    pages.push(i)
  }
  
  return (
    <div className="flex flex-wrap justify-center gap-3 m-5">
      {pages.map((index: number) => (
        <div
          onClick={() => {
            setActivePage(index);
          }}
          className="w-[50px] h-[50px] bg-blue-600 text-white flex justify-center items-center max-lg:w-[35px] max-lg:h-[35px]"
          key={index}
        >
          {index}
        </div>
      ))}
    </div>
  );
}
