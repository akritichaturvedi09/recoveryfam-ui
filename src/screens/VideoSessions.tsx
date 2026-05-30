import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const history = [
  { date: 'May 8, 2024', duration: '45 min' },
  { date: 'May 1, 2024', duration: '45 min' },
]

export default function VideoSessions() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Video Sessions" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Connect with your therapist.</p>
        </div>

        <div className="mx-5 bg-purple-600/20 border border-purple-500/30 rounded-2xl p-4 mb-4">
          <p className="text-purple-300 text-xs font-bold uppercase mb-2">Upcoming Session</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold">Dr</div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Dr. Sarah Johnson</p>
              <p className="text-gray-400 text-xs">May 15, 2024 • 10:00 – 11:00 AM</p>
            </div>
          </div>
          <button type="button" onClick={() => navigate('/therapist-portal')}
            className="mt-3 w-full py-3 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 transition-colors">
            Join Session ›
          </button>
        </div>

        <div className="px-5">
          <p className="text-gray-400 text-xs uppercase mb-2">Session History</p>
          <div className="flex flex-col gap-2">
            {history.map((h, i) => (
              <button type="button" key={i} onClick={() => navigate('/therapist-notes')}
                className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors w-full">
                <p className="text-white text-sm">{h.date}</p>
                <p className="text-gray-400 text-xs">{h.duration} ›</p>
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 mt-4">
          <button type="button" onClick={() => navigate('/therapist-notes')}
            className="w-full py-3.5 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
            View All Sessions ›
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
