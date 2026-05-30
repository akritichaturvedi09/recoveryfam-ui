import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const steps = [
  { num: 5, sense: 'things you can see', checked: 5 },
  { num: 4, sense: 'things you can touch', checked: 4 },
  { num: 3, sense: 'things you can hear', checked: 3 },
  { num: 2, sense: 'things you can smell', checked: 2 },
  { num: 1, sense: 'thing you can taste', checked: 1 },
]

export default function GroundingExercises() {
  const [checked, setChecked] = useState<number[]>([])

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Grounding" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">5-4-3-2-1</h2>
          <p className="text-gray-400 text-sm">Grounding Technique</p>
          <p className="text-gray-400 text-sm mt-1">Name the following around you:</p>
        </div>

        <div className="px-5 flex flex-col gap-3 mt-2">
          {steps.map(s => (
            <div key={s.num} className="bg-white/5 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-semibold text-sm">{s.num} {s.sense}</p>
                <span className="text-purple-300 text-sm font-bold">{checked.filter(c => Math.floor(c / 10) === s.num).length}/{s.num}</span>
              </div>
              <div className="flex gap-2">
                {Array.from({ length: s.num }).map((_, i) => {
                  const id = s.num * 10 + i
                  const isChecked = checked.includes(id)
                  return (
                    <button
                      key={i}
                      onClick={() => setChecked(p => isChecked ? p.filter(x => x !== id) : [...p, id])}
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${isChecked ? 'border-purple-500 bg-purple-600' : 'border-gray-600'}`}
                    >
                      {isChecked && <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 mt-4">
          <p className="text-center text-green-400 text-sm font-medium">Well done! You're grounded. 🌿</p>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
