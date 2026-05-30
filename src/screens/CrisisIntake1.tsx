import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'

const options = [
  { icon: '🔄', label: 'Relapse' },
  { icon: '💰', label: 'Asking for money' },
  { icon: '❓', label: 'Missing / Disappeared' },
  { icon: '😨', label: 'Overdose fear' },
  { icon: '⚠️', label: 'Violence / Threat' },
  { icon: '🚫', label: 'Refusing treatment' },
  { icon: '💔', label: 'Emotional breakdown' },
  { icon: '🏥', label: 'Rehab confusion' },
]

export default function CrisisIntake1() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] min-h-0">
        <TopBar backRoute="/onboarding" />
        <div className="px-5 pb-4 shrink-0">
          <h2 className="text-xl font-bold text-white mb-1">What's happening right now?</h2>
          <p className="text-gray-400 text-sm">Help us understand so we can guide you better.</p>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 flex flex-col gap-2 pb-2">
          {options.map((o) => (
            <button
              key={o.label}
              type="button"
              onClick={() => setSelected(o.label)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all text-left w-full ${
                selected === o.label
                  ? 'border-purple-500 bg-purple-600/20 text-white'
                  : 'border-white/10 bg-white/5 text-gray-300'
              }`}
            >
              <span className="text-lg">{o.icon}</span>
              <span className="text-sm font-medium">{o.label}</span>
            </button>
          ))}
        </div>
        <div className="px-5 py-4 shrink-0">
          <button
            type="button"
            onClick={() => navigate('/crisis/2')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </MobileFrame>
  )
}
