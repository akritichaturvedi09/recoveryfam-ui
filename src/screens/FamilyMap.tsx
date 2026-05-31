import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const members = [
  { label: 'Mom', color: 'bg-pink-500', top: '8%', left: '50%', route: '/therapist-portal' },
  { label: 'Dad', color: 'bg-blue-500', top: '50%', right: '8%', route: '/therapist-portal' },
  { label: 'Sam', color: 'bg-orange-500', bottom: '8%', left: '50%', route: '/relapse-risk' },
]

export default function FamilyMap() {
  const [tab, setTab] = useState<'Dynamics' | 'Influence'>('Dynamics')
  const [selected, setSelected] = useState<string | null>(null)
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Family Map" />
        <div className="flex gap-2 px-5 mb-3">
          {(['Dynamics', 'Influence'] as const).map((t) => (
            <button type="button" key={t} onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Tab description */}
        <div className="mx-5 mb-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
          {tab === 'Dynamics' ? (
            <p className="text-gray-300 text-xs leading-relaxed">
              <span className="text-purple-300 font-semibold">Dynamics</span> — Shows interaction and communication patterns between family members: who talks to whom, where conflict exists, and where support flows.
            </p>
          ) : (
            <p className="text-gray-300 text-xs leading-relaxed">
              <span className="text-purple-300 font-semibold">Influence</span> — Shows how much each family member impacts decisions and behaviors of others, and who plays the biggest role in the loved one's recovery.
            </p>
          )}
        </div>

        {/* Node Graph */}
        <div className="flex-1 flex items-center justify-center relative mx-5">
          <div className="relative w-64 h-64">
            {/* SVG lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <line x1="128" y1="128" x2="128" y2="30" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4" />
              <line x1="128" y1="128" x2="230" y2="128" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4" />
              <line x1="128" y1="128" x2="128" y2="226" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4" />
            </svg>

            {/* Center node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-900 z-10">
              Alex
            </div>

            {/* Member nodes */}
            {members.map((m) => (
              <button type="button" key={m.label}
                onClick={() => setSelected(selected === m.label ? null : m.label)}
                className={`absolute w-14 h-14 rounded-full ${m.color} flex items-center justify-center text-white text-xs font-bold z-10 transition-transform hover:scale-110 ${selected === m.label ? 'ring-2 ring-white scale-110' : ''}`}
                style={{ top: m.top, left: m.left, right: m.right, bottom: m.bottom, transform: m.top && m.left ? 'translateX(-50%)' : m.bottom && m.left ? 'translateX(-50%)' : 'translateY(-50%)' }}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected member panel */}
        {selected && (
          <div className="mx-5 mb-3 bg-white/10 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">{selected}</p>
              <p className="text-gray-400 text-xs">Tap to view details</p>
            </div>
            <button type="button"
              onClick={() => navigate(members.find(m => m.label === selected)?.route ?? '/therapist-portal')}
              className="px-3 py-1.5 bg-purple-600 rounded-xl text-white text-xs font-semibold hover:bg-purple-500 transition-colors">
              View ›
            </button>
          </div>
        )}

        {/* Quick nav buttons */}
        <div className="px-5 pb-2 flex gap-2">
          <button type="button" onClick={() => navigate('/relapse-risk')}
            className="flex-1 py-2.5 bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-yellow-300 text-xs font-medium hover:bg-yellow-500/30 transition-colors">
            Risk Report
          </button>
          <button type="button" onClick={() => navigate('/communication-log')}
            className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-xs font-medium hover:bg-white/10 transition-colors">
            Comm Log
          </button>
          <button type="button" onClick={() => navigate('/family-goals')}
            className="flex-1 py-2.5 bg-purple-600/20 border border-purple-500/30 rounded-xl text-purple-300 text-xs font-medium hover:bg-purple-600/30 transition-colors">
            Goals
          </button>
        </div>

        {/* Legend */}
        <div className="px-5 pb-4 flex gap-4 flex-wrap">
          {[
            { label: 'Strong', color: 'bg-green-400' },
            { label: 'Tense', color: 'bg-yellow-400' },
            { label: 'Weak', color: 'bg-gray-400' },
            { label: 'Improving', color: 'bg-blue-400' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${l.color}`} />
              <span className="text-gray-400 text-xs">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
