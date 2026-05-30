import { useState, useEffect } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function Breathwork() {
  const [seconds, setSeconds] = useState(298) // 4:58
  const [running, setRunning] = useState(false)
  const [phase] = useState('Inhale')

  useEffect(() => {
    if (!running) return
    const interval = setInterval(() => {
      setSeconds(s => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [running])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 items-center">
        <TopBar title="Breathwork" />
        <div className="px-5 pb-2 text-center w-full">
          <h2 className="text-lg font-bold text-white">Breathwork</h2>
          <p className="text-gray-400 text-sm">Breathing. Relax. Reset.</p>
        </div>

        {/* Animated circle */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <div
            className={`w-44 h-44 rounded-full border-4 border-purple-500 flex items-center justify-center transition-all duration-1000 ${running ? 'scale-110 bg-purple-600/20' : 'scale-100 bg-purple-900/20'}`}
          >
            <div className="text-center">
              <p className="text-white font-bold text-3xl">{mins}:{secs.toString().padStart(2, '0')}</p>
              <p className="text-purple-300 text-sm mt-1">{phase}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm">4-4-4-4</p>
          <p className="text-gray-500 text-xs">Inhale 4s • Hold 4s • Exhale 4s • Hold 4s</p>

          <button
            onClick={() => setRunning(!running)}
            className="px-8 py-3 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
          >
            {running ? 'Pause' : 'Start'}
          </button>
        </div>

        <p className="text-gray-600 text-xs pb-4">Well done! You're grounded.</p>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
