import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { AddModal } from '../components/AddModal'

const initial = [
  { label: 'Daily Check-In', time: 'Every day at 8:00 AM', on: true },
  { label: 'Medication Reminder', time: 'Every night at 9:00 PM', on: true },
  { label: 'Self Care Reminder', time: 'Every Sunday at 7:00 PM', on: false },
  { label: 'Support Group Reminder', time: 'Every Wednesday at 6:00 PM', on: true },
]

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle} aria-label={on ? 'Turn off' : 'Turn on'}
      className={`w-11 h-6 rounded-full transition-colors relative ${on ? 'bg-purple-600' : 'bg-gray-600'}`}>
      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${on ? 'left-5' : 'left-0.5'}`} />
    </button>
  )
}

export default function RemindersAlerts() {
  const [items, setItems] = useState(initial)
  const [showModal, setShowModal] = useState(false)

  const toggle = (i: number) => setItems(p => p.map((r, idx) => idx === i ? { ...r, on: !r.on } : r))

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Reminders & Alerts" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Stay on track with gentle reminders.</p>
        </div>
        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {items.map((r, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 rounded-2xl px-4 py-4">
              <div>
                <p className="text-white text-sm font-semibold">{r.label}</p>
                <p className="text-gray-400 text-xs">{r.time}</p>
              </div>
              <Toggle on={r.on} onToggle={() => toggle(i)} />
            </div>
          ))}
        </div>
        <div className="px-5 py-3">
          <button type="button" onClick={() => setShowModal(true)}
            className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            + Add Reminder
          </button>
        </div>
      </div>
      <BottomNav />

      {showModal && (
        <AddModal
          title="Add Reminder"
          fields={[
            { key: 'label', label: 'Reminder Name', placeholder: 'e.g. Morning Meditation' },
            { key: 'freq', label: 'Frequency', type: 'select', options: ['Every day', 'Every week', 'Weekdays only', 'Weekends only'] },
            { key: 'time', label: 'Time', type: 'time' },
          ]}
          onSave={data => setItems(p => [...p, { label: data.label || 'New Reminder', time: `${data.freq} at ${data.time}`, on: true }])}
          onClose={() => setShowModal(false)}
        />
      )}
    </MobileFrame>
  )
}
