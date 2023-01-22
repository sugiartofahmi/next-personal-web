import { Children, FC, ReactNode } from "react";

type ContentLayoutType = {
  children: ReactNode;
};
const ContentLayout: FC<ContentLayoutType> = ({ children }) => {
  return (
    <section className="flex px-10 py-10 flex-col gap-y-5 bg-gray-300 rounded-lg drop-shadow-lg">
      {children}
    </section>
  );
};
export default ContentLayout;
