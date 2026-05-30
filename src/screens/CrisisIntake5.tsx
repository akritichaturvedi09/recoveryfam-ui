import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'

const options = [
  { label: 'Yes', desc: 'They are safe', icon: '✅', color: 'border-green-500 bg-green-500/10' },
  { label: 'Unsure', desc: "I'm not sure", icon: '❓', color: 'border-yellow-500 bg-yellow-500/10' },
  { label: 'No', desc: 'They are in danger', icon: '🚨', color: 'border-red-500 bg-red-500/10' },
]

export default function CrisisIntake5() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] min-h-0">
        <TopBar backRoute="/crisis/4" />
        <div className="px-5 pb-4 shrink-0">
          <h2 className="text-xl font-bold text-white mb-1">Are they currently safe?</h2>
          <p className="text-gray-400 text-sm">Your answer helps us assess the risk.</p>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 flex flex-col gap-3 pb-2">
          {options.map((o) => (
            <button
              key={o.label}
              type="button"
              onClick={() => setSelected(o.label)}
              className={`flex items-center gap-4 px-4 py-4 rounded-xl border-2 transition-all text-left w-full ${
                selected === o.label ? o.color : 'border-white/10 bg-white/5'
              }`}
            >
              <span className="text-2xl">{o.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm">{o.label}</p>
                <p className="text-gray-400 text-xs">{o.desc}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="px-5 py-4 shrink-0">
          <button
            type="button"
            onClick={() => navigate('/guidance')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
          >
            Get Guidance
          </button>
        </div>
      </div>
    </MobileFrame>
  )
}
