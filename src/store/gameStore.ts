import { create } from "zustand";

interface GameState {
  coins: number;

  xp: number;

  level: number;

  combo: number;

  tapCoin: () => void;
}

const XP_PER_CLICK = 10;

const XP_TO_LEVEL = 100;

export const useGameStore = create<GameState>((set) => ({
  coins: 0,

  xp: 0,

  level: 1,

  combo: 1,

  tapCoin: () =>
    set((state) => {
      const nextXp = state.xp + XP_PER_CLICK;

      const shouldLevelUp = nextXp >= XP_TO_LEVEL;

      const nextCombo = state.combo >= 10 ? 10 : state.combo + 0.1;

      return {
        coins: state.coins + 1,

        xp: shouldLevelUp ? nextXp - XP_TO_LEVEL : nextXp,

        level: shouldLevelUp ? state.level + 1 : state.level,

        combo: Number(nextCombo.toFixed(1)),
      };
    }),
}));
