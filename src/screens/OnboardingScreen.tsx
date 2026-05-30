import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'

const slides = [
  {
    icon: '🤖',
    title: 'AI Navigator™',
    desc: 'Structured intake in under 15 mins. Evidence-based decision tree. Instant clarity in critical moments.',
  },
  {
    icon: '🛡️',
    title: 'BoundaryBuilder™',
    desc: 'Get the right words for tough moments. Multiple tone options. Works in 20+ languages.',
  },
  {
    icon: '🎙️',
    title: 'Voice & Emotional Analysis',
    desc: 'Record conversations or reflections. Extracts emotional & acoustic patterns. 100% on-device processing.',
  },
]

export default function OnboardingScreen() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col items-center justify-between px-6 py-10 bg-gradient-to-b from-[#0f0e2a] to-[#1a1060]">
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
          <div className="text-6xl">{slides[current].icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">{slides[current].title}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{slides[current].desc}</p>
          </div>
          <p className="text-purple-300 text-xs">
            RecoveryFam is built for families who love someone struggling with addiction.
          </p>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mb-6">
          {slides.map((_, i) => (
            <button type="button" key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-purple-400' : 'w-2 bg-gray-600'}`}
            />
          ))}
        </div>

        <button type="button"
          onClick={() => navigate('/crisis/1')}
          className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold text-base hover:bg-purple-500 transition-colors"
        >
          Continue
        </button>
      </div>
    </MobileFrame>
  )
}
