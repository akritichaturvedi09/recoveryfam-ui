import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const docs = [
  { icon: '📋', name: 'Treatment Plan', date: 'PDF · Mar 12, 2024' },
  { icon: '🏥', name: 'Medical Records', date: 'PDF · Feb 28, 2024' },
  { icon: '⚖️', name: 'Court Documents', date: 'PDF · Feb 10, 2024' },
  { icon: '🛡️', name: 'Insurance Info', date: 'PDF · Sep 10, 2024' },
  { icon: '📝', name: 'Personal Notes', date: 'PDF · Mar 18, 2024' },
]

export default function DocumentsVault() {
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Documents Vault" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Securely store important documents.</p>
        </div>
        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {docs.map((d, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-4">
              <span className="text-2xl">{d.icon}</span>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{d.name}</p>
                <p className="text-gray-400 text-xs">{d.date}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </div>
          ))}
        </div>
        <div className="px-5 py-3">
          <button className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            + Upload Document
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
