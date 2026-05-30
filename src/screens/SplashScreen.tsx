import { useNavigate } from 'react-router-dom'
import MobileFrame from '../components/MobileFrame'

export default function SplashScreen() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div
        className="flex-1 flex flex-col items-center justify-between px-6 py-12 bg-gradient-to-b from-[#0f0e2a] via-[#1a1060] to-[#2d1b69]"
      >
        {/* Logo */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-900">
            <svg viewBox="0 0 40 40" fill="white" className="w-12 h-12">
              <path d="M20 4C11.16 4 4 11.16 4 20s7.16 16 16 16 16-7.16 16-16S28.84 4 20 4zm-2 22l-6-6 1.41-1.41L18 23.17l8.59-8.58L28 16l-10 10z" />
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">RecoveryFam</h1>
            <p className="text-purple-300 text-sm leading-relaxed">
              You are not alone.{'\n'}Find clarity.{'\n'}Find a way forward.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-col gap-3 w-full mt-4">
            {[
              { icon: '🤖', title: 'AI Guided Support', desc: 'Get clear, step-by-step guidance in tough moments.' },
              { icon: '🔒', title: 'Privacy First', desc: 'Your data stays on your device. Always private.' },
              { icon: '👨‍👩‍👧', title: 'Stronger Together', desc: 'Tools, community & insights to help your family heal.' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                <span className="text-xl">{f.icon}</span>
                <div>
                  <p className="text-white text-sm font-semibold">{f.title}</p>
                  <p className="text-gray-400 text-xs">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3 mt-8">
          <button
            onClick={() => navigate('/onboarding')}
            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold text-base hover:bg-purple-500 transition-colors"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/crisis/1')}
            className="w-full py-3 text-purple-300 text-sm underline"
          >
            I Need Help Immediately
          </button>
        </div>
      </div>
    </MobileFrame>
  )
}
