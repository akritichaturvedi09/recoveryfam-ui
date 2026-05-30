import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function RelapseRiskPrediction() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Relapse Risk" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">Relapse Risk Prediction</h2>
          <p className="text-gray-400 text-sm">AI Early Warning System</p>
        </div>

        {/* Gauge */}
        <div className="mx-5 bg-white/5 rounded-2xl p-6 mb-4 flex flex-col items-center">
          <p className="text-gray-400 text-xs mb-2">Risk Level</p>
          <p className="text-yellow-400 font-bold text-2xl mb-1">Medium</p>
          <div className="relative w-32 h-16 overflow-hidden">
            <div className="absolute inset-0 rounded-t-full border-8 border-gray-700" />
            <div
              className="absolute inset-0 rounded-t-full border-8 border-yellow-400"
              style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
            />
          </div>
          <p className="text-4xl font-bold text-white mt-2">65%</p>
          <p className="text-gray-400 text-xs">Probability</p>
        </div>

        {/* Risk Factors */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-3">Risk Factors</p>
          {[
            'Increased stress levels',
            'Poor sleep patterns',
            'Social isolation',
            'Recent conflict',
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
              <p className="text-gray-300 text-sm">{f}</p>
            </div>
          ))}
        </div>

        <div className="px-5">
          <button type="button" onClick={() => navigate('/ai-insights')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            View Full Report ›
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
