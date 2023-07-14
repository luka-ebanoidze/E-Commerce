import { useParams, useNavigate } from "react-router-dom";

import { GrFormNext } from "react-icons/gr";

export function BreadCrumb() {
  const navigate = useNavigate();
  const params = useParams();
  const arr = Object.entries(params);

  if (arr[arr.length - 1][0] === "id") {
    arr.pop();
  }

  return (
    <div className="flex items-center max-sm:hidden">
      <div
        className="max-sm:text-sm text-white"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </div>
      <span className="mx-3">
        <GrFormNext />
      </span>
      {arr.map((item: any, index: number) => (
        <div className="flex items-center" key={item}>
          <div
            className="max-sm:text-sm text-white"
            onClick={() => {
              if (item[0] !== "product") {
                navigate(`/products/${item[1]}`);
              }
            }}
          >
            {item[1]}
          </div>
          <div className="mx-3">
            {index !== arr.length - 1 && (
              <span>
                <GrFormNext />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
