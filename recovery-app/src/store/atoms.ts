import { atom } from "recoil";
import { IUser } from "../../@types/models";

// export const user = atom({ key: "user", default: "" });

export const user = atom({
  key: "userInfo",
  default: {
    id: 109393565192571700735,
    loggedIn: true,
    darkMode: true,
  },
});
