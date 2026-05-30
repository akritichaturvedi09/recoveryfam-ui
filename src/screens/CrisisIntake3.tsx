import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'

const options = ['Son', 'Daughter', 'Spouse', 'Brother', 'Sister', 'Parent', 'Other']

export default function CrisisIntake3() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] min-h-0">
        <TopBar backRoute="/crisis/2" />
        <div className="px-5 pb-4 shrink-0">
          <h2 className="text-xl font-bold text-white mb-1">Who is this person to you?</h2>
          <p className="text-gray-400 text-sm">You can change this later in family settings.</p>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 flex flex-col gap-2 pb-2">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => setSelected(o)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all w-full ${
                selected === o
                  ? 'border-purple-500 bg-purple-600/20 text-white'
                  : 'border-white/10 bg-white/5 text-gray-300'
              }`}
            >
              <span className="text-sm font-medium">{o}</span>
              {selected === o && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-400">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </button>
          ))}
        </div>
        <div className="px-5 py-4 shrink-0">
          <button
            type="button"
            onClick={() => navigate('/crisis/4')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </MobileFrame>
  )
}
