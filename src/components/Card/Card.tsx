import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Card({ children }: Props) {
  return (
    <div className="w-full h-full bg-[#fff] rounded-xl">{children}</div>
  );
}
