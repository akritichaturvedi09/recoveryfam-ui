import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function AIInsights() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="AI Insights" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">AI Insights</h2>
          <p className="text-gray-400 text-sm">Personalized insights for you.</p>
        </div>

        <div className="mx-5 bg-green-500/10 border border-green-500/30 rounded-2xl p-4 mb-4">
          <p className="text-green-400 text-xs font-bold uppercase mb-1">Insight for You</p>
          <p className="text-white text-sm">You are showing great strength in setting boundaries. Keep up the amazing work!</p>
        </div>

        <button type="button" onClick={() => navigate('/boundary-builder')}
          className="mx-5 bg-white/5 rounded-2xl p-4 mb-4 text-left hover:bg-white/10 transition-colors">
          <p className="text-gray-400 text-xs mb-2">Recommended Focus</p>
          <div className="flex items-start gap-3">
            <span className="text-xl">🧘</span>
            <div>
              <p className="text-white text-sm font-semibold">Practice self care ›</p>
              <p className="text-gray-400 text-xs">You have not logged self care today.</p>
            </div>
          </div>
        </button>

        <button type="button" onClick={() => navigate('/community')}
          className="mx-5 bg-white/5 rounded-2xl p-4 mb-4 text-left hover:bg-white/10 transition-colors">
          <p className="text-gray-400 text-xs mb-2">Suggested Action</p>
          <div className="flex items-start gap-3">
            <span className="text-xl">👥</span>
            <div>
              <p className="text-white text-sm font-semibold">Join a support group ›</p>
              <p className="text-gray-400 text-xs">Connecting helps you heal.</p>
            </div>
          </div>
        </button>

        <div className="px-5">
          <button type="button" onClick={() => navigate('/pattern-analysis')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            View All Insights ›
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
