import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'

const options = [
  { label: 'Calm', desc: "I'm okay for now", color: 'bg-green-500/20 border-green-500', dot: 'bg-green-400' },
  { label: 'Concerned', desc: "I'm worried", color: 'bg-yellow-500/20 border-yellow-500', dot: 'bg-yellow-400' },
  { label: 'Panic', desc: 'I feel overwhelmed', color: 'bg-orange-500/20 border-orange-500', dot: 'bg-orange-400' },
  { label: 'Emergency', desc: 'This is urgent', color: 'bg-red-500/20 border-red-500', dot: 'bg-red-400' },
]

export default function CrisisIntake2() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] min-h-0">
        <TopBar backRoute="/crisis/1" />
        <div className="px-5 pb-4 shrink-0">
          <h2 className="text-xl font-bold text-white mb-1">How urgent does this feel?</h2>
          <p className="text-gray-400 text-sm">This helps us prioritize the right support.</p>
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
              <div className={`w-3 h-3 rounded-full shrink-0 ${o.dot}`} />
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
            onClick={() => navigate('/crisis/3')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </MobileFrame>
  )
}
