import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { AddModal } from '../components/AddModal'

const hotlines = [
  { name: '988 Suicide & Crisis Lifeline', number: '988' },
  { name: 'SAMHSA National Helpline', number: '1-800-662-4357' },
  { name: 'National Domestic Violence', number: '1-800-799-7233' },
  { name: 'Police Control', number: '1-800-222-1222' },
]

const initialContacts = [
  { name: 'Dad', number: '555-321-4441' },
  { name: 'Sister', number: '555-987-4453' },
  { name: 'Best Friend', number: '555-780-1980' },
]

export default function EmergencyContacts() {
  const [contacts, setContacts] = useState(initialContacts)
  const [showModal, setShowModal] = useState(false)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Emergency Contacts" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Quick access — every second counts.</p>
        </div>

        <div className="px-5 mb-4">
          <p className="text-gray-400 text-xs uppercase mb-2">Emergency Hotlines</p>
          <div className="flex flex-col gap-2">
            {hotlines.map(h => (
              <div key={h.name} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                <p className="text-white text-sm flex-1 pr-2">{h.name}</p>
                <a href={`tel:${h.number}`} className="text-purple-400 text-sm font-semibold">{h.number}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 mb-4">
          <p className="text-gray-400 text-xs uppercase mb-2">My Contacts</p>
          <div className="flex flex-col gap-2">
            {contacts.map(c => (
              <div key={c.name} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-white text-xs font-bold">{c.name[0]}</div>
                  <p className="text-white text-sm">{c.name}</p>
                </div>
                <a href={`tel:${c.number}`} className="text-purple-400 text-sm">{c.number}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5">
          <button type="button" onClick={() => setShowModal(true)}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            + Add Contact
          </button>
        </div>
      </div>
      <BottomNav />

      {showModal && (
        <AddModal
          title="Add Contact"
          fields={[
            { key: 'name', label: 'Name', placeholder: 'e.g. Mom' },
            { key: 'number', label: 'Phone Number', placeholder: 'e.g. 555-123-4567' },
          ]}
          onSave={data => setContacts(p => [...p, { name: data.name || 'Contact', number: data.number || '' }])}
          onClose={() => setShowModal(false)}
        />
      )}
    </MobileFrame>
  )
}
