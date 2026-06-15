import { useEffect } from "react";
import { useGameStore } from "@/store/gameStore";

export function ActivityTracker() {
  const updateLastActiveAt = useGameStore((state) => state.updateLastActiveAt);

  useEffect(() => {
    function handleVisibilityChange() {
      if (document.hidden) {
        updateLastActiveAt();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [updateLastActiveAt]);

  return null;
}
