import { create } from "zustand";

export const SessionStore = create((set) => ({
  session: "Not Logged",
  setSession: (newSession) => set(() => ({ session: newSession })),
}));
