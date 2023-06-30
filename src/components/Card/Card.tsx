import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Card({ children }: Props) {
  return (
    <div className="w-full flex flex-col items-center h-full bg-[#fff] rounded-xl">{children}</div>
  );
}
