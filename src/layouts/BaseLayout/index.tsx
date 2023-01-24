import { FC, ReactNode } from "react";

type BaseLayoutType = {
  children: ReactNode;
  md: String;
};

const BaseLayout: FC<BaseLayoutType> = ({ children, md }) => {
  return (
    <section className={`md:${md} flex flex-col rounded-lg gap-y-5`}>
      {children}
    </section>
  );
};

export default BaseLayout;
