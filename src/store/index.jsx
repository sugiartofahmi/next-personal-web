import { atom } from "recoil";

export const navState = atom({
  key: "nav-state",
  default: [
    {
      element: "Home",
      path: "/",
      isActive: false,
    },
    {
      element: "About",
      path: "/about",
      isActive: false,
    },
    {
      element: "Projects",
      path: "/projects",
      isActive: false,
    },
  ],
});
