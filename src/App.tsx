import { AppLayout } from "@/components/layout/AppLayout";
import { CoinButton } from "@/components/game/CoinButton";
import { GameHeader } from "@/components/game/GameHeader";
import { GameStats } from "@/components/game/GameStats.tsx";
import { XPBar } from "@/components/game/XPBar";

export default function App() {
  return (
    <AppLayout>
      <GameHeader />

      <GameStats />

      <XPBar />

      <CoinButton />
    </AppLayout>
  );
}
