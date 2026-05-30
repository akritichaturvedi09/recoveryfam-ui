import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function FinancialGuardrails() {
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Financial Guardrails" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">Financial Guardrails</h2>
          <p className="text-gray-400 text-sm">Protect your family.</p>
        </div>

        {/* Month selector */}
        <div className="mx-5 flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 mb-3">
          <p className="text-white text-sm font-medium">This Month</p>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>

        {/* Stats */}
        <div className="mx-5 grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/5 rounded-2xl p-4">
            <p className="text-gray-400 text-xs mb-1">Cash Requests</p>
            <p className="text-white font-bold text-xl">$1,200</p>
            <p className="text-red-400 text-xs">+15% from last month</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-4">
            <p className="text-gray-400 text-xs mb-1">Incidents</p>
            <p className="text-white font-bold text-xl">3</p>
            <p className="text-yellow-400 text-xs">This month</p>
          </div>
        </div>

        {/* Bar chart placeholder */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-3">Monthly Trend</p>
          <div className="flex items-end gap-2 h-16">
            {[40, 60, 45, 80, 55, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-purple-600 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => (
              <span key={m} className="text-gray-500 text-xs">{m}</span>
            ))}
          </div>
        </div>

        {/* Risk Alerts */}
        <div className="mx-5 bg-red-500/10 border border-red-500/30 rounded-2xl p-4">
          <p className="text-red-400 font-bold text-xs uppercase mb-2">Risk Alerts</p>
          {[
            'Repeated cash support detected',
            'Consider alternative support',
            'Review financial boundaries',
          ].map((a) => (
            <div key={a} className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              <p className="text-gray-300 text-xs">{a}</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
