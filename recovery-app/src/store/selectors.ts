import { selector } from "recoil";
import { settings } from "./atoms";

export const UserMenuButtonClicked = selector({
  key: "UserMenuButtonClicked",
  get: ({ get }) => {
    const path = get(settings);
    console.log(path);
  },
});
