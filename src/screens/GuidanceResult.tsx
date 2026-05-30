import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'

export default function GuidanceResult() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] px-5 py-6 gap-4 overflow-y-auto no-scrollbar">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-white">Take a breath.</h2>
          <p className="text-gray-300 text-sm mt-1">Here's what matters most right now.</p>
        </div>

        {/* What NOT to do */}
        <div className="bg-red-500/20 border border-red-500/40 rounded-2xl p-4">
          <p className="text-red-400 font-bold text-xs uppercase mb-2">What NOT To Do</p>
          <p className="text-white text-sm">Avoid sending money tonight.</p>
        </div>

        {/* Recommended Next Step → boundary builder */}
        <button type="button" onClick={() => navigate('/boundary-builder')}
          className="bg-green-500/20 border border-green-500/40 rounded-2xl p-4 text-left hover:bg-green-500/30 transition-colors">
          <p className="text-green-400 font-bold text-xs uppercase mb-2">Recommended Next Step ›</p>
          <p className="text-white text-sm">Wait until morning for a calm conversation.</p>
          <p className="text-green-300 text-xs mt-2">Tap to open Boundary Builder</p>
        </button>

        {/* Boundary Script */}
        <div className="bg-purple-600/20 border border-purple-500/40 rounded-2xl p-4">
          <p className="text-purple-300 font-bold text-xs uppercase mb-2">Boundary Script</p>
          <p className="text-gray-200 text-sm italic">
            "I love you deeply, but I cannot continue supporting behavior that harms both of us."
          </p>
          <button type="button" className="mt-2 text-purple-400 text-xs underline">Copy</button>
        </div>

        {/* Financial Risk Alert → financial guardrails */}
        <button type="button" onClick={() => navigate('/financial-guardrails')}
          className="bg-yellow-500/20 border border-yellow-500/40 rounded-2xl p-4 text-left hover:bg-yellow-500/30 transition-colors">
          <p className="text-yellow-400 font-bold text-xs uppercase mb-2">Financial Risk Alert ›</p>
          <p className="text-gray-200 text-sm">Repeated emergency financial support is a recurring crisis pattern.</p>
          <p className="text-yellow-300 text-xs mt-2">Tap to view Financial Guardrails</p>
        </button>

        {/* Actions */}
        <div className="flex gap-3 mt-2">
          {['Hear This', 'Share', 'Save'].map((a) => (
            <button type="button" key={a}
              className="flex-1 py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
              {a}
            </button>
          ))}
        </div>

        <button type="button" onClick={() => navigate('/dashboard')}
          className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors mt-2">
          Go to Dashboard
        </button>
      </div>
    </MobileFrame>
  )
}
