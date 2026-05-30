import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function MusicNeurofeedback() {
  const [playing, setPlaying] = useState(false)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Music & Neurofeedback" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">Harmony Session</h2>
          <p className="text-gray-400 text-sm">Adaptive Music Therapy</p>
        </div>

        {/* Waveform visual */}
        <div className="mx-5 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 mb-4 flex flex-col items-center gap-4">
          <div className="w-full h-20 flex items-center justify-center gap-0.5">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-purple-400 opacity-70"
                style={{ height: `${Math.sin(i * 0.4) * 20 + 25}px` }}
              />
            ))}
          </div>
          <p className="text-white font-semibold">Alpha Waves</p>
          <p className="text-purple-300 text-sm">Relaxed & Calm</p>
        </div>

        {/* Player controls */}
        <div className="flex items-center justify-center gap-8 mb-6">
          <button type="button" aria-label="Previous track" className="text-gray-400 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>
          <button type="button" aria-label={playing ? 'Pause' : 'Play'}
            onClick={() => setPlaying(!playing)}
            className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-900 hover:bg-purple-500 transition-colors"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <button type="button" aria-label="Next track" className="text-gray-400 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z" />
            </svg>
          </button>
        </div>

        {/* Brainwave states */}
        <div className="px-5 flex flex-col gap-2">
          {[
            { label: 'Alpha Waves', desc: 'Relaxed & Calm', active: true },
            { label: 'Theta Waves', desc: 'Deep Meditation', active: false },
            { label: 'Delta Waves', desc: 'Deep Sleep', active: false },
          ].map((w) => (
            <div
              key={w.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
                w.active ? 'border-purple-500 bg-purple-600/20' : 'border-white/10 bg-white/5'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${w.active ? 'bg-purple-400' : 'bg-gray-600'}`} />
              <div>
                <p className="text-white text-sm font-medium">{w.label}</p>
                <p className="text-gray-400 text-xs">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
