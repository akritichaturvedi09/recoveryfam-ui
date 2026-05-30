import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const groups = [
  { name: 'Parents of Adult Children', members: '6.2k members', last: 'Session: Tomorrow' },
  { name: 'Spouses After Relapse', members: '4.1k members', last: 'Session: May 10' },
  { name: 'Families & Fentanyl Crisis', members: '4.3k members', last: 'Session: May 15' },
  { name: 'Recovery Stories', members: '', last: 'Share your journey' },
]

export default function Community() {
  const [tab, setTab] = useState('Groups')
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Community" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">You are not alone.</p>
        </div>
        <div className="flex gap-2 px-5 mb-4">
          {['Groups', 'Events', 'Mentors'].map((t) => (
            <button type="button" key={t} onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {groups.map((g) => (
            <button type="button" key={g.name} onClick={() => navigate('/support-chat')}
              className="bg-white/5 rounded-2xl p-4 flex items-center gap-3 text-left hover:bg-white/10 transition-colors w-full">
              <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {g.name[0]}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{g.name}</p>
                <p className="text-gray-400 text-xs">{g.members}</p>
                <p className="text-purple-300 text-xs">{g.last}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500 flex-shrink-0">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </button>
          ))}
        </div>
        <div className="px-5 py-3 flex gap-2">
          <button type="button" onClick={() => navigate('/support-chat')}
            className="flex-1 py-3.5 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
            Create Post
          </button>
          <button type="button" onClick={() => navigate('/workshops')}
            className="px-4 py-3.5 rounded-2xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
            Events
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
