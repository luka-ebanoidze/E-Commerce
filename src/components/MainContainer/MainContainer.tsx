import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainContainer({ children }: Props) {
  return <div className="w-[70%] bg-[orange] m-auto">{children}</div>;
}
