import { create } from "zustand";

type NavState = {
  isActive: boolean;
  setIsActive: () => void;
};

export const useNavState = create<NavState>()(set => ({
  isActive: false,
  setIsActive: () => set(state => ({ isActive: !state.isActive })),
}));
