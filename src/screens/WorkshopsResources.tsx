import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const resources = [
  { title: 'Setting Boundaries Without Guilt', type: 'Live Workshop', date: 'May 20', duration: '' },
  { title: 'Understanding Addiction Cycle', type: 'Article', date: '', duration: '5 min read' },
  { title: 'Financial Boundaries That Work', type: 'Article', date: '', duration: '8 min read' },
  { title: 'Crisis Communication Toolkit', type: 'PDF', date: '', duration: '5 pages' },
]

export default function WorkshopsResources() {
  const [tab, setTab] = useState('Workshops')
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Resources" />
        <div className="flex gap-2 px-5 mb-4">
          {['Workshops', 'Articles', 'Videos'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                tab === t ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {resources.map((r) => (
            <button type="button" key={r.title} onClick={() => navigate('/support-chat')}
              className="bg-white/5 rounded-2xl p-4 flex gap-3 text-left hover:bg-white/10 transition-colors w-full">
              <div className="w-12 h-12 rounded-xl bg-purple-700 flex items-center justify-center text-white text-lg flex-shrink-0">
                {r.type === 'PDF' ? '📄' : r.type === 'Article' ? '📖' : '🎥'}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold leading-tight">{r.title}</p>
                <p className="text-purple-300 text-xs mt-1">{r.type}</p>
                <p className="text-gray-500 text-xs">{r.date || r.duration}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
