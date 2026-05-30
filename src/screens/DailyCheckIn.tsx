import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const moods = ['😢', '😟', '😐', '🙂', '😊']

export default function DailyCheckIn() {
  const [mood, setMood] = useState<number | null>(null)
  const [note, setNote] = useState('')

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Daily Check-In" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">How are you feeling today?</h2>
        </div>

        {/* Mood row */}
        <div className="flex justify-around px-5 py-4">
          {moods.map((m, i) => (
            <button type="button" key={i} aria-label={['Sad', 'Worried', 'Okay', 'Good', 'Great'][i]}
              onClick={() => setMood(i)}
              className={`text-3xl transition-transform ${mood === i ? 'scale-125' : 'opacity-50'}`}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="flex justify-around px-5 mb-4">
          {['Sad', 'Worried', 'Okay', 'Good', 'Great'].map((l, i) => (
            <span key={l} className={`text-xs ${mood === i ? 'text-purple-300' : 'text-gray-600'}`}>{l}</span>
          ))}
        </div>

        {/* Note */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-2">What's on your mind?</p>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            className="w-full bg-transparent text-gray-300 text-sm outline-none resize-none placeholder-gray-600 h-20"
            placeholder="Write something to record..."
          />
        </div>

        {/* Today's focus */}
        <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4">
          <p className="text-gray-400 text-xs mb-1">Today's Focus</p>
          <p className="text-white text-sm font-medium">I will practice a healthy boundary.</p>
          <p className="text-gray-400 text-xs mt-2">Small Step</p>
          <p className="text-gray-300 text-sm">Take 3 deep breaths when stressed</p>
        </div>

        <div className="px-5">
          <button className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            Check In
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
