import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const tools = {
  Audio: [
    { icon: '🎵', title: 'Calm Music', desc: 'Soothing instrumental music' },
    { icon: '🌊', title: 'Nature Sounds', desc: 'Rain, ocean, forest & more' },
    { icon: '📖', title: 'Calming Stories', desc: 'Guided relaxation stories' },
  ],
  Visual: [
    { icon: '🌅', title: 'Affirmations', desc: 'Positive daily affirmations' },
    { icon: '🏃', title: 'Relaxing Visuals', desc: 'Peaceful animations' },
  ],
  Activities: [
    { icon: '✍️', title: 'Journaling', desc: 'Write your thoughts' },
    { icon: '🧩', title: 'Puzzles', desc: 'Distract and refocus' },
  ],
}

export default function CalmingTools() {
  const [tab, setTab] = useState<keyof typeof tools>('Audio')

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Calming Tools" />
        <div className="px-5 pb-2">
          <p className="text-gray-400 text-sm">Tools to help you relax and reset.</p>
        </div>
        <div className="flex gap-2 px-5 mb-4">
          {(Object.keys(tools) as (keyof typeof tools)[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {tools[tab].map(tool => (
            <div key={tool.title} className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-4">
              <span className="text-2xl">{tool.icon}</span>
              <div>
                <p className="text-white text-sm font-semibold">{tool.title}</p>
                <p className="text-gray-400 text-xs">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
