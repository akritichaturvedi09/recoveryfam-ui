import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const responses = ['Calm & Loving', 'Firm & Direct', 'Compassionate Boundary']

export default function BoundaryBuilder() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Boundary Builder" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">BoundaryBuilder™</h2>
          <p className="text-gray-400 text-sm">Get the right words for tough moments.</p>
        </div>

        {/* Chat bubble */}
        <div className="mx-5 bg-orange-500/20 border border-orange-500/30 rounded-2xl p-4 mb-4">
          <p className="text-orange-300 text-sm italic">"He is asking for money again and getting angry."</p>
        </div>

        <div className="px-5 mb-3">
          <p className="text-gray-400 text-xs mb-3">Here are 3 response options based on your goal:</p>
          <div className="flex flex-col gap-2">
            {responses.map((r) => (
              <button
                key={r}
                onClick={() => setSelected(r)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all ${
                  selected === r
                    ? 'border-purple-500 bg-purple-600/20 text-white'
                    : 'border-white/10 bg-white/5 text-gray-300'
                }`}
              >
                <span className="text-sm font-medium">{r}</span>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="mx-5 mt-auto flex items-center gap-2 bg-white/5 rounded-2xl px-4 py-3">
          <input
            className="flex-1 bg-transparent text-gray-300 text-sm outline-none placeholder-gray-600"
            placeholder="Ask anything..."
          />
          <button type="button" aria-label="Send message" className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
