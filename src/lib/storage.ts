import type { GameData } from "@/types/game";

const STORAGE_KEY = "coinpulse";

export function saveGame(data: GameData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadGame(): GameData | null {
  const rawData = localStorage.getItem(STORAGE_KEY);

  if (!rawData) {
    return null;
  }

  try {
    return JSON.parse(rawData);
  } catch {
    return null;
  }
}
