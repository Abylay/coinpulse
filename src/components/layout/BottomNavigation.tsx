import { motion } from "framer-motion";

import type { AppTab } from "@/types/navigation";

interface BottomNavigationProps {
  activeTab: AppTab;

  onChangeTab: (tab: AppTab) => void;
}

const tabs: {
  id: AppTab;

  label: string;

  icon: string;
}[] = [
  {
    id: "home",
    label: "Home",
    icon: "🪙",
  },

  {
    id: "shop",
    label: "Shop",
    icon: "🛒",
  },

  {
    id: "profile",
    label: "Profile",
    icon: "👤",
  },
];

export function BottomNavigation({
  activeTab,
  onChangeTab,
}: BottomNavigationProps) {
  return (
    <nav
      className="
        mt-8
        grid
        grid-cols-3
        gap-2
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-2
        backdrop-blur-xl
      "
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onChangeTab(tab.id)}
            className={`
              relative
              rounded-2xl
              px-4
              py-3
              transition-all

              ${isActive ? "bg-slate-800 text-white" : "text-slate-400"}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-slate-800
                "
              />
            )}

            <div className="relative z-10">
              <div className="text-xl">{tab.icon}</div>

              <div className="text-xs">{tab.label}</div>
            </div>
          </motion.button>
        );
      })}
    </nav>
  );
}
