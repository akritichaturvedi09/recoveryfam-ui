import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const items = [
  { icon: '📅', label: 'Daily Check-In', route: '/daily-checkin' },
  { icon: '😊', label: 'Mood Tracker', route: '/mood-tracker' },
  { icon: '😴', label: 'Sleep & Stress', route: '/sleep-stress' },
  { icon: '💊', label: 'Medication Tracker', route: '/medication-tracker' },
  { icon: '💸', label: 'Financial Exposure', route: '/financial-exposure' },
  { icon: '🛡️', label: 'Safety Plan', route: '/safety-plan' },
  { icon: '📞', label: 'Emergency Contacts', route: '/emergency-contacts' },
  { icon: '🧘', label: 'Calming Tools', route: '/calming-tools' },
  { icon: '🌬️', label: 'Breathwork', route: '/breathwork' },
  { icon: '🌿', label: 'Grounding Exercises', route: '/grounding' },
  { icon: '🆘', label: 'SOS Emergency', route: '/sos' },
  { icon: '📜', label: 'Crisis History', route: '/crisis-history' },
  { icon: '📋', label: 'Boundary History', route: '/boundary-history' },
  { icon: '💬', label: 'Communication Log', route: '/communication-log' },
  { icon: '🎯', label: 'Family Goals', route: '/family-goals' },
  { icon: '📈', label: 'Progress Timeline', route: '/progress-timeline' },
  { icon: '🏆', label: 'Achievements', route: '/achievements' },
  { icon: '🔔', label: 'Reminders & Alerts', route: '/reminders' },
  { icon: '🤖', label: 'AI Insights', route: '/ai-insights' },
  { icon: '🔍', label: 'Pattern Analysis', route: '/pattern-analysis' },
  { icon: '📝', label: 'Therapist Notes', route: '/therapist-notes' },
  { icon: '🎥', label: 'Video Sessions', route: '/video-sessions' },
  { icon: '🗄️', label: 'Documents Vault', route: '/documents-vault' },
  { icon: '👥', label: 'Support Group Chat', route: '/support-chat' },
  { icon: '⚙️', label: 'Settings & Privacy', route: '/settings' },
]

export default function MoreScreen() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 min-h-0">
        <TopBar title="More" />
        <div className="flex-1 px-5 overflow-y-auto no-scrollbar min-h-0">
          <div className="grid grid-cols-3 gap-3 pb-4">
            {items.map(item => (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className="flex flex-col items-center gap-2 bg-white/5 rounded-2xl p-3 hover:bg-white/10 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white text-xs text-center leading-tight">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
