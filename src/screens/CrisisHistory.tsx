import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const entries = [
  { date: 'May 18, 2024', label: 'Relapse', severity: 'High Risk', color: 'text-red-400 bg-red-500/10' },
  { date: 'Apr 28, 2024', label: 'Asking for money', severity: 'Medium Risk', color: 'text-yellow-400 bg-yellow-500/10' },
  { date: 'Apr 15, 2024', label: 'Emotional breakdown', severity: 'Medium Risk', color: 'text-yellow-400 bg-yellow-500/10' },
  { date: 'Apr 2, 2024', label: 'Missing/Disappeared', severity: 'High Risk', color: 'text-red-400 bg-red-500/10' },
  { date: 'Mar 29, 2024', label: 'Overdose fear', severity: 'High Risk', color: 'text-red-400 bg-red-500/10' },
]

export default function CrisisHistory() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Crisis History" />
        <div className="flex gap-2 px-5 mb-4">
          {['Recent', 'All'].map(t => (
            <button type="button" key={t} className={`px-4 py-1.5 rounded-full text-sm font-medium ${t === 'Recent' ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'}`}>{t}</button>
          ))}
        </div>
        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {entries.map((e, i) => (
            <button type="button" key={i} onClick={() => navigate('/sos')}
              className="bg-white/5 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors w-full text-left">
              <div>
                <p className="text-gray-400 text-xs mb-1">{e.date}</p>
                <p className="text-white text-sm font-semibold">{e.label}</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${e.color}`}>{e.severity}</span>
            </button>
          ))}
        </div>
        <div className="px-5 py-3">
          <button type="button" onClick={() => navigate('/relapse-risk')}
            className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            View Risk Report ›
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
