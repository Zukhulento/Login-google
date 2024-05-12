import { create } from "zustand";

export const UserStore = create((set) => ({
  user: {
    name: "",
    email: "",
    photo: "",
  },
  setUser: (newUserData) => set(() => ({ user: newUserData })),
}));
