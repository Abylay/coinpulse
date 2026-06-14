import { useState } from "react";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import type { AppTab } from "@/types/navigation";
import { AppLayout } from "@/components/layout/AppLayout";
import { CoinButton } from "@/components/game/CoinButton";
import { GameHeader } from "@/components/game/GameHeader";
import { GameStats } from "@/components/game/GameStats.tsx";
import { XPBar } from "@/components/game/XPBar";
import { ShopScreen } from "@/components/shop/ShopScreen";
import { PassiveIncomeEngine } from "@/components/game/PassiveIncomeEngine";

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>("home");
  return (
    <AppLayout>
      {activeTab === "home" && (
        <>
          <GameHeader />

          <GameStats />

          <XPBar />

          <CoinButton />

          <PassiveIncomeEngine />
        </>
      )}

      {activeTab === "shop" && <ShopScreen />}

      <BottomNavigation activeTab={activeTab} onChangeTab={setActiveTab} />
    </AppLayout>
  );
}
