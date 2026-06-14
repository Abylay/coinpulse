export const GAME_CONFIG = {
  xpPerClick: 10,
  xpToLevel: 100,

  upgradeCost: 50,
  minerCost: 100,
};

export interface GameData {
  coins: number;

  xp: number;

  level: number;

  combo: number;

  clickPower: number;

  passiveIncome: number;

  lastActiveAt: number;
}
