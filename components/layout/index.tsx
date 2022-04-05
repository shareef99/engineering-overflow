import { FC } from "react";
import Header from "./Header";

interface Props {
  children: FC;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-[15%]">{children}</main>
    </>
  );
};

export default Layout;
