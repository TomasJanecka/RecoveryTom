import { atom } from "recoil";

// export const user = atom({ key: "user", default: "" });

export const user = atom({
  key: "user",
  default: {
    id: 109393565192571700735,
    loggedIn: true,
    darkMode: true,
  },
});

export const settings = atom({
  key: "settings",
  default: {
    lastDefaultPage: "",
    lastUsersPage: "",
  },
});

export const defaultPage = atom({
  key: "defaultPage",
  default: "user",
});

export const usersPage = atom({
  key: "usersPage",
  default: "home",
});
