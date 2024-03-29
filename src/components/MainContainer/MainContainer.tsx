import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainContainer({ children }: Props) {
  return <div className="w-[70%] max-sm:w-[85%] m-auto">{children}</div>;
}
