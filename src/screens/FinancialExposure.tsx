import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function FinancialExposure() {
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Financial Exposure" />
        <div className="flex items-center justify-between px-5 mb-4">
          <p className="text-white font-semibold">This Month</p>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400"><path d="M7 10l5 5 5-5z" /></svg>
        </div>

        {/* Total */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-1">Total Exposure</p>
          <p className="text-white font-bold text-3xl">$1,850</p>
          <p className="text-red-400 text-xs mt-1">+11% from last month</p>
        </div>

        {/* Donut chart placeholder */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4 flex items-center gap-6">
          <div className="relative w-24 h-24 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#7C3AED" strokeWidth="18" strokeDasharray="88 220" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#EF4444" strokeWidth="18" strokeDasharray="55 220" strokeDashoffset="-88" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#F59E0B" strokeWidth="18" strokeDasharray="77 220" strokeDashoffset="-143" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            {[['Cash Given', '$800', 'bg-purple-500'], ['Bail/Fines', '$600', 'bg-red-500'], ['Treatment', '$450', 'bg-yellow-500']].map(([l, v, c]) => (
              <div key={l} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${c}`} />
                <p className="text-gray-300 text-xs">{l}</p>
                <p className="text-white text-xs font-semibold ml-auto">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trend */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4">
          <p className="text-gray-400 text-xs mb-3">Exposure Trend</p>
          <div className="flex items-end gap-1.5 h-16">
            {[30, 50, 40, 70, 55, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-purple-600 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
