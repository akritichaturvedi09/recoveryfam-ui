import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

export default function VoiceJournal() {
  const [recording, setRecording] = useState(false)
  const [done, setDone] = useState(false)
  const navigate = useNavigate()

  const handleMic = () => {
    if (recording) {
      setRecording(false)
      setDone(true)
    } else {
      setRecording(true)
      setDone(false)
    }
  }

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Voice Journal" />
        <div className="px-5 pb-2">
          <h2 className="text-lg font-bold text-white">Voice Reflection</h2>
          <p className="text-gray-400 text-sm">Speak freely. We'll help you understand your emotions.</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-5">
          {/* Waveform */}
          <div className="w-full h-16 flex items-center justify-center gap-0.5">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i}
                className={`w-1 rounded-full transition-all ${recording ? 'bg-purple-400 animate-pulse' : done ? 'bg-green-400' : 'bg-gray-600'}`}
                style={{ height: `${Math.sin(i * 0.5) * 18 + 12}px` }} />
            ))}
          </div>

          <p className="text-gray-400 text-sm">{recording ? '00:45 Recording...' : done ? 'Recording complete' : '00:00'}</p>

          {/* Mic Button */}
          <button type="button" onClick={handleMic} aria-label={recording ? 'Stop recording' : 'Start recording'}
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 ${recording ? 'bg-red-500 shadow-red-900' : 'bg-purple-600 shadow-purple-900 hover:bg-purple-500'}`}>
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </button>

          <p className="text-gray-500 text-xs">Tap to {recording ? 'stop' : 'start'}</p>

          {/* Show analysis button after recording */}
          {done && (
            <button type="button" onClick={() => navigate('/voice-analysis')}
              className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
              View Analysis ›
            </button>
          )}

          <p className="text-gray-600 text-xs text-center">Your reflection is private & stored only on your device.</p>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
