import { atom } from "recoil";

export const themeState = atom({
  key: "theme-state",
  default: JSON.parse(localStorage.getItem("theme")) || "dark",
});
