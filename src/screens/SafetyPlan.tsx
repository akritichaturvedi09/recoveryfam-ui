import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const sections = [
  { icon: '⚠️', title: 'Warning Signs', desc: 'Identify early signs', color: 'border-yellow-500/30 bg-yellow-500/10', route: '/crisis-history' },
  { icon: '🧘', title: 'Coping Strategies', desc: 'Healthy ways to cope', color: 'border-blue-500/30 bg-blue-500/10', route: '/calming-tools' },
  { icon: '👥', title: 'People I Can Contact', desc: 'Support network', color: 'border-green-500/30 bg-green-500/10', route: '/emergency-contacts' },
  { icon: '🏥', title: 'Professional Help', desc: 'Hotlines & resources', color: 'border-purple-500/30 bg-purple-500/10', route: '/therapist-portal' },
]

export default function SafetyPlan() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Safety Plan" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">Safety Plan</h2>
          <p className="text-gray-400 text-sm">Plan ahead. Stay prepared.</p>
        </div>

        <button type="button" onClick={() => navigate('/sos')}
          className="mx-5 bg-red-500/20 border border-red-500/30 rounded-2xl p-4 mb-4 flex items-center justify-between hover:bg-red-500/30 transition-colors">
          <div>
            <p className="text-white font-semibold text-sm">My Safety Plan</p>
            <p className="text-gray-400 text-xs">Tap for emergency mode</p>
          </div>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-400">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>

        <div className="px-5 flex flex-col gap-3">
          {sections.map(s => (
            <button type="button" key={s.title} onClick={() => navigate(s.route)}
              className={`flex items-center gap-3 px-4 py-4 rounded-2xl border text-left hover:opacity-80 transition-opacity ${s.color}`}>
              <span className="text-2xl">{s.icon}</span>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{s.title}</p>
                <p className="text-gray-400 text-xs">{s.desc}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
