import { create } from "zustand";

interface GameState {
  coins: number;

  tapCoin: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  coins: 0,

  tapCoin: () =>
    set((state) => ({
      coins: state.coins + 1,
    })),
}));
