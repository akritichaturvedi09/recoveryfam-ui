import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function SleepStress() {
  const [tab, setTab] = useState('Stress')

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Sleep & Stress" />
        <div className="flex gap-2 px-5 mb-4">
          {['Sleep', 'Stress'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === t ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400'}`}>
              {t}
            </button>
          ))}
        </div>

        {tab === 'Stress' ? (
          <>
            <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-4">
              <p className="text-gray-400 text-xs mb-1">Stress Level</p>
              <p className="text-red-400 font-bold text-2xl mb-3">High</p>
              <div className="flex items-center justify-center">
                <div className="relative w-28 h-28">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="10" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#EF4444" strokeWidth="10"
                      strokeDasharray={`${72 * 2.51} ${100 * 2.51}`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">72</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-5 bg-white/5 rounded-2xl p-4 mb-3">
              <p className="text-gray-400 text-xs mb-2">Most Stressful Time</p>
              <p className="text-white text-sm">Evening (7pm – 10pm)</p>
            </div>
            <div className="mx-5 bg-white/5 rounded-2xl p-4">
              <p className="text-gray-400 text-xs mb-2">Top Stressors</p>
              {[['Family conflict', '80%'], ['Financial worries', '30%'], ['Uncertainty', '10%']].map(([s, p]) => (
                <div key={s} className="flex items-center gap-2 mb-2">
                  <p className="text-gray-300 text-sm flex-1">{s}</p>
                  <p className="text-purple-300 text-xs">{p}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="mx-5 bg-white/5 rounded-2xl p-4">
            <p className="text-gray-400 text-xs mb-2">Average Sleep</p>
            <p className="text-white font-bold text-2xl">6.5 hrs</p>
            <p className="text-yellow-400 text-xs mt-1">Below recommended 8 hrs</p>
          </div>
        )}
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
