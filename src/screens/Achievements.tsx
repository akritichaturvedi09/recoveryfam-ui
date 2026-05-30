import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const badges = [
  { icon: '🛡️', label: 'Boundary Builder', desc: 'Set 10 strong boundaries', earned: true },
  { icon: '⭐', label: 'Consistency Star', desc: '7-day check-in streak', earned: true },
  { icon: '🏆', label: 'Crisis Navigator', desc: 'Completed 5 crisis flows', earned: true },
  { icon: '💜', label: 'Self Care Hero', desc: 'Logged 30 self care days', earned: false },
  { icon: '🤝', label: 'Community Pillar', desc: 'Helped 10 members', earned: false },
  { icon: '📖', label: 'Journal Master', desc: '50 voice entries', earned: false },
]

export default function Achievements() {
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Achievements" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Celebrate your progress!</p>
        </div>
        <div className="px-5 grid grid-cols-3 gap-3 overflow-y-auto no-scrollbar">
          {badges.map((b, i) => (
            <div key={i} className={`flex flex-col items-center gap-2 p-3 rounded-2xl ${b.earned ? 'bg-purple-600/20 border border-purple-500/30' : 'bg-white/5 border border-white/5 opacity-50'}`}>
              <span className="text-3xl">{b.icon}</span>
              <p className="text-white text-xs font-semibold text-center leading-tight">{b.label}</p>
              <p className="text-gray-400 text-xs text-center leading-tight">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="px-5 py-3">
          <button className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            View All Achievements
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
