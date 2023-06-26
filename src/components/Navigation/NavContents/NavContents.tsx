import { useNavigate } from "react-router";

export function NavContents({ category, products }: any) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-3 rounded-xl xl:h-full w-full absolute right-[-100%] top-[0] z-30 max-xl:right-0 max-xl:top-[100%] ">
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
