import { BreadCrumb } from "../BreadCrumb";

export function NavHeader() {
  return (
    <div className="w-full h-[80px] bg-[gray] my-12 flex items-center justify-between px-14">
      <button>Navigation</button>
      <BreadCrumb />
    </div>
  );
}
