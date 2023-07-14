import { useNavigate } from "react-router";

import { GrFormClose } from "react-icons/gr";

export function NavContents({ category, products, setClosed }: any) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-solid border-gray-700 border-[3px] p-3 rounded-xl lg:h-full w-full absolute right-[-100%] top-[0] z-30 max-xl:right-0 max-xl:top-[100%] ">
      <div
        onClick={() => setClosed(true)}
        className="absolute top-1 right-1 hidden max-xl:flex"
      >
        <GrFormClose size={20} />
      </div>
      {products.map((product: any, index: any) => (
        <div
          onClick={() => {
            navigate(`/${category}/${product.title}/${product.id}`);
          }}
          key={index}
        >
          {product.title}
        </div>
      ))}
    </div>
  );
}
