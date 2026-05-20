import { AppLayout } from "@/components/layout/AppLayout";
import { CoinButton } from "@/components/game/CoinButton";
import { GameHeader } from "@/components/game/GameHeader";

export default function App() {
  return (
    <AppLayout>
      <GameHeader />
      <CoinButton />
    </AppLayout>
  );
}
