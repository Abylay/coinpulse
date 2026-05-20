export function GameHeader() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-400">Welcome back</p>
        <h1 className="text-3xl font-bold">🪙 CoinPulse</h1>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-2 backdrop-blur">
        <p className="text-xs text-slate-400">Level</p>
        <p className="text-lg font-bold">1</p>
      </div>
    </header>
  );
}
