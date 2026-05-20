import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0b1120] text-white overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6">
        {children}
      </div>
    </main>
  );
}
