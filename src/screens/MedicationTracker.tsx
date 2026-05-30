import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { AddModal } from '../components/AddModal'

const initial = [
  { name: 'Sertraline 50mg', time: '8:00 AM', taken: true },
  { name: 'Hydroxyzine 25mg', time: '2:00 PM', taken: true },
  { name: 'Melatonin 3mg', time: '9:00 PM', taken: false },
]

export default function MedicationTracker() {
  const [meds, setMeds] = useState(initial)
  const [showModal, setShowModal] = useState(false)

  const markTaken = (i: number) => setMeds(p => p.map((m, idx) => idx === i ? { ...m, taken: true } : m))

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Medication Tracker" />
        <div className="flex items-center justify-between px-5 mb-4">
          <p className="text-white font-semibold">Today</p>
        </div>

        <div className="flex-1 px-5 flex flex-col gap-3">
          {meds.map((m, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-4 rounded-2xl border ${m.taken ? 'border-green-500/30 bg-green-500/10' : 'border-white/10 bg-white/5'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${m.taken ? 'bg-green-500/20' : 'bg-gray-700'}`}>
                💊
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{m.name}</p>
                <p className="text-gray-400 text-xs">{m.time}</p>
              </div>
              <button type="button" onClick={() => markTaken(i)}
                className={`text-xs font-semibold px-2 py-1 rounded-full transition-colors ${m.taken ? 'bg-green-500/20 text-green-400' : 'bg-purple-600 text-white hover:bg-purple-500'}`}>
                {m.taken ? 'Taken ✓' : 'Take Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="mx-5 bg-white/5 rounded-2xl p-4 my-4">
          <p className="text-gray-400 text-xs mb-1">Medication Insights</p>
          <p className="text-white text-sm">You've been consistent for <span className="text-green-400 font-bold">14 days</span></p>
        </div>

        <div className="px-5">
          <button type="button" onClick={() => setShowModal(true)}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            + Add Medication
          </button>
        </div>
      </div>
      <BottomNav />

      {showModal && (
        <AddModal
          title="Add Medication"
          fields={[
            { key: 'name', label: 'Medication Name', placeholder: 'e.g. Sertraline 50mg' },
            { key: 'time', label: 'Time to Take', type: 'time' },
          ]}
          onSave={data => setMeds(p => [...p, { name: data.name || 'New Medication', time: data.time, taken: false }])}
          onClose={() => setShowModal(false)}
        />
      )}
    </MobileFrame>
  )
}
