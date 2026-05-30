import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'

const options = [
  { label: 'First time', desc: 'This is new' },
  { label: 'Occasionally', desc: 'A few times' },
  { label: 'Repeatedly', desc: 'Many times' },
  { label: 'Ongoing for years', desc: "It's been a pattern" },
]

export default function CrisisIntake4() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] min-h-0">
        <TopBar backRoute="/crisis/3" />
        <div className="px-5 pb-4 shrink-0">
          <h2 className="text-xl font-bold text-white mb-1">Has this happened before?</h2>
          <p className="text-gray-400 text-sm">This helps us assess the situation.</p>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 flex flex-col gap-3 pb-2">
          {options.map((o) => (
            <button
              key={o.label}
              type="button"
              onClick={() => setSelected(o.label)}
              className={`flex items-center justify-between px-4 py-4 rounded-xl border transition-all text-left w-full ${
                selected === o.label
                  ? 'border-purple-500 bg-purple-600/20'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div>
                <p className="text-white font-semibold text-sm">{o.label}</p>
                <p className="text-gray-400 text-xs">{o.desc}</p>
              </div>
              {selected === o.label && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-400 shrink-0">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </button>
          ))}
        </div>
        <div className="px-5 py-4 shrink-0">
          <button
            type="button"
            onClick={() => navigate('/crisis/5')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </MobileFrame>
  )
}
