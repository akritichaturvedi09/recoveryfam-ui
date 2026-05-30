import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const milestones = [
  { date: 'May 12', label: 'Started productive conversation', tag: 'Communication', done: true },
  { date: 'May 8', label: 'Joined online support group', tag: 'Community', done: true },
  { date: 'Apr 9', label: 'Started setting strong boundaries', tag: 'Boundary Builder', done: true },
  { date: 'Apr 3', label: 'Practiced self care', tag: 'Self Care', done: true },
  { date: 'Mar 20', label: 'Reached out for help', tag: 'Support', done: false },
]

export default function ProgressTimeline() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Progress Timeline" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Your progress matters.</p>
        </div>
        <div className="flex-1 px-5 overflow-y-auto no-scrollbar">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-900" />
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4 mb-6 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${m.done ? 'bg-purple-600' : 'bg-gray-700'}`}>
                  {m.done ? (
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-500" />
                  )}
                </div>
                <div className="flex-1 bg-white/5 rounded-2xl p-3">
                  <p className="text-gray-400 text-xs mb-0.5">{m.date}</p>
                  <p className="text-white text-sm font-medium">{m.label}</p>
                  <span className="text-purple-300 text-xs">{m.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 py-3">
          <button type="button" onClick={() => navigate('/achievements')}
            className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            View Achievements ›
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
