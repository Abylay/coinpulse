import { motion } from "framer-motion";

import { useGameStore } from "@/store/gameStore";

const UPGRADE_COST = 50;

export function ShopScreen() {
  const coins = useGameStore((state) => state.coins);

  const clickPower = useGameStore((state) => state.clickPower);

  const buyUpgrade = useGameStore((state) => state.buyUpgrade);

  const passiveIncome = useGameStore((state) => state.passiveIncome);

  const buyMiner = useGameStore((state) => state.buyMiner);

  const canBuy = coins >= UPGRADE_COST;

  return (
    <div className="flex-1">
      <h2
        className="
          mb-6
          text-3xl
          font-bold
        "
      >
        🛒 Shop
      </h2>

      <motion.div
        whileHover={{
          y: -4,
        }}
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/60
          p-5
          backdrop-blur-xl
        "
      >
        <div
          className="
            mb-4
            flex
            items-start
            justify-between
          "
        >
          <div>
            <p
              className="
                mb-1
                text-sm
                text-slate-400
              "
            >
              Upgrade
            </p>

            <h3
              className="
                text-2xl
                font-bold
              "
            >
              ⚡ Power Tap
            </h3>
          </div>

          <button onClick={buyMiner}>Buy Miner</button>

          <div
            className="
              rounded-2xl
              bg-slate-800
              px-3
              py-1
              text-sm
            "
          >
            x{clickPower}
          </div>
        </div>

        <p
          className="
            mb-6
            text-slate-400
          "
        >
          Increase coins earned per tap.
        </p>

        <button
          onClick={buyUpgrade}
          disabled={!canBuy}
          className={`
            w-full
            rounded-2xl
            py-3
            font-semibold
            transition-all

            ${
              canBuy
                ? "bg-yellow-400 text-black hover:scale-[1.02]"
                : "bg-slate-800 text-slate-500"
            }
          `}
        >
          Upgrade — {UPGRADE_COST} 🪙
        </button>
      </motion.div>
    </div>
  );
}
