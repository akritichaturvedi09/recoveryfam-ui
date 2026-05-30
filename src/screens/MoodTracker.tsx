import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function MoodTracker() {
  const [tab, setTab] = useState('Week')
  const bars = [65, 40, 80, 55, 70, 45, 75]
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Mood Tracker" />
        <div className="flex gap-2 px-5 mb-4">
          {['Week', 'Month', 'Year'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Date range */}
        <p className="text-gray-400 text-xs px-5 mb-3">May 12 – May 18, 2024</p>

        {/* Chart */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4">
          <div className="flex items-end gap-2 h-24 mb-2">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t bg-purple-500" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {days.map(d => <span key={d} className="text-gray-500 text-xs">{d}</span>)}
          </div>
        </div>

        {/* Summary */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-3">
          <p className="text-gray-400 text-xs mb-2">Mood Summary</p>
          <div className="flex justify-between">
            <div><p className="text-gray-400 text-xs">Average Mood</p><p className="text-white font-semibold">Okay 😐</p></div>
            <div><p className="text-gray-400 text-xs">Mood Dominance</p><p className="text-white font-semibold">Good 🙂</p></div>
          </div>
        </div>

        {/* Triggers */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4">
          <p className="text-gray-400 text-xs mb-2">Triggers Noted</p>
          {['Stress', 'Family Conflict', 'Financial Pressure'].map(t => (
            <div key={t} className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <p className="text-gray-300 text-sm">{t}</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
