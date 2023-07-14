import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TPropsCard = {
  href: string | URL;
  image: string;
  description: string;
  title: string;
};
