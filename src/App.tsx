import { useEffect, useState } from "react";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import type { AppTab } from "@/types/navigation";
import { AppLayout } from "@/components/layout/AppLayout";
import { CoinButton } from "@/components/game/CoinButton";
import { GameHeader } from "@/components/game/GameHeader";
import { GameStats } from "@/components/game/GameStats.tsx";
import { XPBar } from "@/components/game/XPBar";
import { ShopScreen } from "@/components/shop/ShopScreen";
import { PassiveIncomeEngine } from "@/components/game/PassiveIncomeEngine";
import { useGameStore } from "@/store/gameStore";
import { ActivityTracker } from "@/components/game/ActivityTracker";

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>("home");
  const applyOfflineProgress = useGameStore(
    (state) => state.applyOfflineProgress,
  );

  useEffect(() => {
    applyOfflineProgress();
  }, [applyOfflineProgress]);

  return (
    <AppLayout>
      {activeTab === "home" && (
        <>
          <GameHeader />

          <GameStats />

          <XPBar />

          <CoinButton />
        </>
      )}

      {activeTab === "shop" && <ShopScreen />}

      <BottomNavigation activeTab={activeTab} onChangeTab={setActiveTab} />
      <PassiveIncomeEngine />
      <ActivityTracker />
    </AppLayout>
  );
}
