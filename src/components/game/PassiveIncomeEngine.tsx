import { useGameStore } from "@/store/gameStore";
import { useEffect } from "react";

export function PassiveIncomeEngine() {
  const passiveIncome = useGameStore((state) => state.passiveIncome);

  const addPassiveCoins = useGameStore((state) => state.addPassiveCoins);

  useEffect(() => {
    if (passiveIncome <= 0) {
      return;
    }

    const interval = setInterval(() => {
      addPassiveCoins();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [passiveIncome, addPassiveCoins]);

  return null;
}
