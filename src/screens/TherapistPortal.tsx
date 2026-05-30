import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const families = [
  { name: "Alex's Family", risk: 'Medium', next: 'Next session: Tomorrow', color: 'text-yellow-400' },
  { name: "Sarah's Family", risk: 'High', next: 'Next session: May 10', color: 'text-red-400' },
  { name: "Michael's Family", risk: 'Low', next: 'Next session: May 22', color: 'text-green-400' },
]

export default function TherapistPortal() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Therapist Portal" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">Therapist View</h2>
          <p className="text-gray-400 text-sm">My Families (24)</p>
        </div>

        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {families.map((f) => (
            <button type="button" key={f.name} onClick={() => navigate('/therapist-notes')}
              className="bg-white/5 rounded-2xl p-4 flex items-center gap-3 text-left hover:bg-white/10 transition-colors w-full">
              <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {f.name[0]}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{f.name}</p>
                <p className={`text-xs font-medium ${f.color}`}>Risk: {f.risk}</p>
                <p className="text-gray-400 text-xs">{f.next}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </button>
          ))}
        </div>

        <div className="px-5 py-3 flex gap-2">
          <button type="button" onClick={() => navigate('/video-sessions')}
            className="flex-1 py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            Video Sessions
          </button>
          <button type="button" onClick={() => navigate('/therapist-notes')}
            className="flex-1 py-3.5 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
            Notes
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
