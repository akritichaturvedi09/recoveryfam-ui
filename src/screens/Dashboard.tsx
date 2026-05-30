import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import BottomNav from '../components/BottomNav'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <h1 className="text-white font-bold text-lg">Good Morning, Alex 👋</h1>
          <button type="button" onClick={() => navigate('/settings')}
            className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
            A
          </button>
        </div>

        {/* Stability Score Card — clickable → family map */}
        <button type="button" onClick={() => navigate('/family-map')}
          className="mx-5 bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-4 mb-4 text-left w-[calc(100%-40px)] hover:opacity-90 transition-opacity">
          <p className="text-purple-200 text-xs mb-1">Family Stability Score</p>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-bold text-white">72</span>
            <span className="text-purple-300 text-sm mb-1">Stable</span>
          </div>
          <p className="text-green-400 text-xs mt-1">+4 from last week ›</p>
        </button>

        {/* Today's Focus → boundary builder */}
        <button type="button" onClick={() => navigate('/boundary-builder')}
          className="mx-5 bg-white/5 rounded-2xl p-4 mb-3 text-left w-[calc(100%-40px)] hover:bg-white/10 transition-colors">
          <p className="text-gray-400 text-xs mb-1">Today's Focus</p>
          <p className="text-white font-semibold text-sm">Maintain boundaries ›</p>
          <p className="text-gray-400 text-xs">Stay calm. You're doing the right things.</p>
        </button>

        {/* Current Risk Level → relapse risk */}
        <button type="button" onClick={() => navigate('/relapse-risk')}
          className="mx-5 bg-white/5 rounded-2xl p-4 mb-3 text-left w-[calc(100%-40px)] hover:bg-white/10 transition-colors">
          <p className="text-gray-400 text-xs mb-2">Current Risk Level</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-yellow-400 rounded-full" />
            </div>
            <span className="text-yellow-400 text-xs font-semibold">Moderate ›</span>
          </div>
          <p className="text-gray-500 text-xs mt-1">Tap to view full report</p>
        </button>

        {/* Recent Activity */}
        <div className="mx-5 mb-3">
          <p className="text-gray-400 text-xs mb-2">Recent Activity</p>
          {[
            { label: 'Boundary set', time: '2h ago', icon: '🛡️', route: '/boundary-history' },
            { label: 'Journal Entry', time: '5h ago', icon: '📝', route: '/voice-journal' },
          ].map((a) => (
            <button type="button" key={a.label} onClick={() => navigate(a.route)}
              className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 mb-2 w-full hover:bg-white/10 transition-colors">
              <span>{a.icon}</span>
              <span className="text-white text-sm flex-1 text-left">{a.label}</span>
              <span className="text-gray-500 text-xs">{a.time} ›</span>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mx-5 mb-3">
          <p className="text-gray-400 text-xs mb-2">Quick Actions</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'SOS', route: '/sos', icon: '🆘', color: 'bg-red-600 hover:bg-red-500' },
              { label: 'Check-In', route: '/daily-checkin', icon: '✅', color: 'bg-purple-600 hover:bg-purple-500' },
              { label: 'Journal', route: '/voice-journal', icon: '🎙️', color: 'bg-indigo-600 hover:bg-indigo-500' },
            ].map((q) => (
              <button type="button" key={q.label} onClick={() => navigate(q.route)}
                className={`${q.color} rounded-xl py-3 flex flex-col items-center gap-1 transition-colors`}>
                <span className="text-xl">{q.icon}</span>
                <span className="text-white text-xs font-medium">{q.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mx-5 mb-3">
          <p className="text-gray-400 text-xs mb-2">Features</p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: '🗺️', label: 'Family Map', route: '/family-map' },
              { icon: '💰', label: 'Financial', route: '/financial-guardrails' },
              { icon: '🏥', label: 'Therapist', route: '/therapist-portal' },
              { icon: '🎵', label: 'Music', route: '/music' },
              { icon: '😊', label: 'Mood', route: '/mood-tracker' },
              { icon: '💊', label: 'Meds', route: '/medication-tracker' },
              { icon: '🛡️', label: 'Safety', route: '/safety-plan' },
              { icon: '📚', label: 'Resources', route: '/workshops' },
            ].map((f) => (
              <button type="button" key={f.route} onClick={() => navigate(f.route)}
                className="flex flex-col items-center gap-1 bg-white/5 rounded-xl py-3 hover:bg-white/10 transition-colors">
                <span className="text-xl">{f.icon}</span>
                <span className="text-white text-[10px] text-center leading-tight">{f.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
