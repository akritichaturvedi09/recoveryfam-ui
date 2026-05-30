import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function VoiceAnalysisResult() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Voice Analysis" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">Reflection Summary</h2>
          <p className="text-gray-400 text-sm">Here's what we noticed.</p>
        </div>

        {/* Emotional State */}
        <div className="mx-5 bg-red-500/10 border border-red-500/30 rounded-2xl p-4 mb-3">
          <p className="text-gray-400 text-xs mb-1">Emotional State</p>
          <p className="text-red-400 font-bold text-lg">High Stress</p>
          <p className="text-gray-400 text-xs">Your voice indicates elevated stress and emotional load.</p>
          <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-red-400 rounded-full" style={{ width: '78%' }} />
          </div>
          <p className="text-gray-500 text-xs mt-1">78%</p>
        </div>

        {/* Key Insights */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-3">
          <p className="text-gray-400 text-xs mb-3">Key Insights</p>
          {[
            'You mentioned feeling exhausted',
            "You're carrying a lot right now",
            'You need support and rest',
          ].map((i) => (
            <div key={i} className="flex items-start gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm">{i}</p>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="mx-5 bg-purple-600/10 border border-purple-500/30 rounded-2xl p-4 mb-4">
          <p className="text-purple-300 text-xs mb-1">Recommendation</p>
          <p className="text-gray-200 text-sm">Take a break, breathe, and consider reaching out to a trusted person.</p>
        </div>

        <div className="px-5">
          <button type="button" onClick={() => navigate('/pattern-analysis')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            View Full Insights ›
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
