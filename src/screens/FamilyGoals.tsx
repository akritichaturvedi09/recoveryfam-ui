import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import { AddModal } from '../components/AddModal'

const initial = [
  { title: 'Improve communication', desc: 'Talk calmly without yelling', progress: 76, active: true },
  { title: 'Create financial stability', desc: 'Reduce financial stress', progress: 90, active: true },
  { title: 'Support recovery', desc: 'Encourage treatment', progress: 45, active: true },
  { title: 'Self care priority', desc: 'Practice self care', progress: 100, active: false },
]

export default function FamilyGoals() {
  const [tab, setTab] = useState('Active')
  const [goals, setGoals] = useState(initial)
  const [showModal, setShowModal] = useState(false)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Family Goals" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Work towards a healthier future.</p>
        </div>
        <div className="flex gap-2 px-5 mb-4">
          {['Active', 'Completed'].map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {goals.filter(g => tab === 'Active' ? g.active : !g.active).map((g, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-4">
              <p className="text-white text-sm font-semibold mb-0.5">{g.title}</p>
              <p className="text-gray-400 text-xs mb-3">{g.desc}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${g.progress}%` }} />
                </div>
                <span className="text-purple-300 text-xs font-semibold">{g.progress}%</span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-5 py-3">
          <button type="button" onClick={() => setShowModal(true)}
            className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            + Add New Goal
          </button>
        </div>
      </div>
      <BottomNav />

      {showModal && (
        <AddModal
          title="Add Goal"
          fields={[
            { key: 'title', label: 'Goal Title', placeholder: 'e.g. Better communication' },
            { key: 'desc', label: 'Description', placeholder: 'e.g. Talk calmly every day' },
          ]}
          onSave={data => setGoals(p => [...p, { title: data.title || 'New Goal', desc: data.desc || '', progress: 0, active: true }])}
          onClose={() => setShowModal(false)}
        />
      )}
    </MobileFrame>
  )
}
