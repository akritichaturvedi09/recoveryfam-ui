import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { AddModal } from '../components/AddModal'

const initial = [
  { type: 'Phone Call', date: 'May 11, 2024 • 1:30 PM', note: 'He was upset and asked for money.' },
  { type: 'Text Message', date: 'May 11, 2024 • 3:45 PM', note: 'I set a boundary about asking for cash.' },
  { type: 'In Person', date: 'May 11, 2024 • 2:00 PM', note: 'Had a more calm conversation.' },
  { type: 'Voicemail', date: 'May 12, 2024 • 11:45 PM', note: 'Left a voicemail.' },
]

export default function CommunicationLog() {
  const [tab, setTab] = useState('All')
  const [logs, setLogs] = useState(initial)
  const [showModal, setShowModal] = useState(false)

  const filtered = tab === 'All' ? logs : logs.filter(l => l.type.toLowerCase().includes(tab.toLowerCase()))

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] min-h-0">
        <TopBar title="Communication Log" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Track important conversations.</p>
        </div>
        <div className="flex gap-2 px-5 mb-4 overflow-x-auto no-scrollbar">
          {['All', 'Phone', 'Text', 'In-Person'].map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${tab === t ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar pb-4">
          {filtered.map((l, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-purple-300 text-xs font-semibold">{l.type}</span>
                <span className="text-gray-500 text-xs">{l.date}</span>
              </div>
              <p className="text-gray-300 text-sm">{l.note}</p>
            </div>
          ))}
        </div>
        <div className="px-5 py-3">
          <button type="button" onClick={() => setShowModal(true)}
            className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            + Log Communication
          </button>
        </div>
      </div>
      <BottomNav />

      {showModal && (
        <AddModal
          title="Log Communication"
          fields={[
            { key: 'type', label: 'Type', type: 'select', options: ['Phone Call', 'Text Message', 'In Person', 'Voicemail'] },
            { key: 'note', label: 'Notes', placeholder: 'What happened?' },
          ]}
          onSave={data => setLogs(p => [{ type: data.type, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), note: data.note || '' }, ...p])}
          onClose={() => setShowModal(false)}
        />
      )}
    </MobileFrame>
  )
}
