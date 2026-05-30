import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { AddModal } from '../components/AddModal'

const initial = [
  { date: 'May 5, 2024', text: 'Financial support boundary\nI will not lend cash again.' },
  { date: 'Apr 22, 2024', text: 'Communication boundary\nI will not engage in yelling.' },
  { date: 'Apr 10, 2024', text: 'Visitation boundary\nVisits only with supervision.' },
  { date: 'Mar 28, 2024', text: 'Curfew boundary\nMust be home by 10PM.' },
]

export default function BoundaryHistory() {
  const [entries, setEntries] = useState(initial)
  const [showModal, setShowModal] = useState(false)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] min-h-0">
        <TopBar title="Boundary History" />
        <div className="px-5 pb-2 shrink-0">
          <p className="text-gray-400 text-sm">Your boundaries over time.</p>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 flex flex-col gap-3 pb-2">
          {entries.map((e, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-4 border-l-4 border-purple-500">
              <p className="text-gray-400 text-xs mb-1">{e.date}</p>
              {e.text.split('\n').map((line, j) => (
                <p key={j} className={j === 0 ? 'text-white text-sm font-semibold' : 'text-gray-300 text-xs mt-0.5'}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="px-5 py-3 shrink-0 pb-16">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
          >
            + Add New Boundary
          </button>
        </div>
      </div>
      <BottomNav />

      {showModal && (
        <AddModal
          title="Add New Boundary"
          fields={[
            { key: 'title', label: 'Boundary Title', placeholder: 'e.g. Financial support boundary' },
            { key: 'description', label: 'Boundary Statement', placeholder: 'e.g. I will not lend cash again.' },
          ]}
          onSave={data => {
            const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
            setEntries(p => [{ date: today, text: `${data.title || 'New Boundary'}\n${data.description || ''}` }, ...p])
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </MobileFrame>
  )
}
