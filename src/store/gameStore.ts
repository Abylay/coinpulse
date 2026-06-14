import { create } from "zustand";
import { GAME_CONFIG } from "@/config/game";

interface GameState {
  coins: number;

  xp: number;

  level: number;

  combo: number;

  clickPower: number;

  passiveIncome: number;

  lastActiveAt: number;

  tapCoin: () => void;

  buyUpgrade: () => void;

  addPassiveCoins: () => void;

  buyMiner: () => void;
}

const XP_PER_CLICK = GAME_CONFIG.xpPerClick;

const XP_TO_LEVEL = GAME_CONFIG.xpToLevel;

export const useGameStore = create<GameState>((set) => ({
  coins: 0,

  xp: 0,

  level: 1,

  combo: 1,

  clickPower: 1,

  passiveIncome: 0,

  lastActiveAt: Date.now(),

  tapCoin: () =>
    set((state) => {
      const nextXp = state.xp + XP_PER_CLICK;

      const shouldLevelUp = nextXp >= XP_TO_LEVEL;

      const nextCombo = state.combo >= 10 ? 10 : state.combo + 0.1;

      return {
        coins: state.coins + state.clickPower,

        xp: shouldLevelUp ? nextXp - XP_TO_LEVEL : nextXp,

        level: shouldLevelUp ? state.level + 1 : state.level,

        combo: Number(nextCombo.toFixed(1)),
      };
    }),

  buyUpgrade: () =>
    set((state) => {
      const UPGRADE_COST = GAME_CONFIG.upgradeCost;

      if (state.coins < UPGRADE_COST) {
        return state;
      }

      return {
        coins: state.coins - UPGRADE_COST,

        clickPower: state.clickPower + 1,
      };
    }),

  addPassiveCoins: () =>
    set((state) => ({
      coins: state.coins + state.passiveIncome,
    })),

  buyMiner: () =>
    set((state) => {
      if (state.coins < GAME_CONFIG.minerCost) {
        return state;
      }

      return {
        coins: state.coins - GAME_CONFIG.minerCost,

        passiveIncome: state.passiveIncome + 1,
      };
    }),
}));
