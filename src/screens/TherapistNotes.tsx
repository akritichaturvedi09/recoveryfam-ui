import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { AddModal } from '../components/AddModal'

const initial = [
  { date: 'May 13, 2024', text: 'Good progress on setting boundaries. Keep practicing.' },
  { date: 'May 8, 2024', text: 'Discussed communication strategies.' },
  { date: 'Apr 26, 2024', text: 'Explored feelings of guilt and stress.' },
]

export default function TherapistNotes() {
  const [notes, setNotes] = useState(initial)
  const [showModal, setShowModal] = useState(false)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Therapist Notes" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Private notes from your therapist.</p>
        </div>
        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {notes.map((n, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-4">
              <p className="text-gray-400 text-xs mb-2">{n.date}</p>
              <p className="text-gray-200 text-sm">{n.text}</p>
            </div>
          ))}
        </div>
        <div className="px-5 py-3">
          <button type="button" onClick={() => setShowModal(true)}
            className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            + Add Note
          </button>
        </div>
      </div>
      <BottomNav />

      {showModal && (
        <AddModal
          title="Add Note"
          fields={[
            { key: 'text', label: 'Note', placeholder: 'Write your note here...' },
          ]}
          onSave={data => setNotes(p => [{ date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), text: data.text || '' }, ...p])}
          onClose={() => setShowModal(false)}
        />
      )}
    </MobileFrame>
  )
}
