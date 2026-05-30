import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const patterns = [
  'Financial requests happen more on weekends.',
  'Relapses often follow family conflicts.',
  'Stress increases in the evening.',
  'You feel more calm after journaling.',
]

export default function PatternAnalysis() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Pattern Analysis" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">Pattern Analysis</h2>
          <p className="text-gray-400 text-sm">Understanding your patterns.</p>
        </div>

        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4">
          <p className="text-gray-400 text-xs uppercase mb-3">Common Patterns</p>
          {patterns.map((p, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 rounded-full bg-purple-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-300 text-xs font-bold">{i + 1}</span>
              </div>
              <p className="text-gray-300 text-sm">{p}</p>
            </div>
          ))}
        </div>

        <button type="button" onClick={() => navigate('/voice-journal')}
          className="mx-5 bg-purple-600/10 border border-purple-500/30 rounded-2xl p-4 mb-4 text-left hover:bg-purple-600/20 transition-colors">
          <p className="text-purple-300 text-xs font-bold uppercase mb-1">AI Observation ›</p>
          <p className="text-gray-200 text-sm">Explored feelings of guilt and stress in recent entries.</p>
          <p className="text-purple-400 text-xs mt-1">Tap to open Voice Journal</p>
        </button>

        <div className="px-5">
          <button type="button" onClick={() => navigate('/ai-insights')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            View Detailed Analysis ›
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
