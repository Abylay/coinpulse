import { useGameStore } from "@/store/gameStore";

export function WelcomeBack() {
  const offlineCoins = useGameStore((state) => state.offlineCoins);

  const clearOfflineCoins = useGameStore((state) => state.clearOfflineCoins);

  if (offlineCoins <= 0) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
      "
    >
      <div
        className="
          rounded-3xl
          bg-slate-900
          p-8
          text-center
        "
      >
        <h2 className="mb-4 text-3xl font-bold">👋 Welcome Back</h2>

        <p className="mb-6 text-slate-400">You earned</p>

        <p className="mb-6 text-5xl font-bold text-yellow-400">
          +{offlineCoins} 🪙
        </p>

        <button
          onClick={clearOfflineCoins}
          className="
            rounded-2xl
            bg-yellow-400
            px-6
            py-3
            font-semibold
            text-black
          "
        >
          Collect
        </button>
      </div>
    </div>
  );
}
