import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const messages = [
  { user: 'Sarah M.', text: "You're stronger than you think. We're here for you.", time: '2:30 PM', mine: false },
  { user: 'Lisa K.', text: 'This group has saved my sanity. Stay strong! 💜', time: '2:32 PM', mine: false },
  { user: 'Mark T.', text: 'Proud of you for reaching out today.', time: '2:35 PM', mine: false },
  { user: 'You', text: 'Thank you all so much 🙏', time: '2:36 PM', mine: true },
]

export default function SupportGroupChat() {
  const [input, setInput] = useState('')

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16">
        <TopBar title="Support Group" />
        <div className="px-5 pb-2">
          <p className="text-white font-semibold text-sm">Family Warriors</p>
          <p className="text-gray-400 text-xs">You're not alone.</p>
        </div>

        <div className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.mine ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${m.mine ? 'bg-purple-600' : 'bg-white/10'}`}>
                {!m.mine && <p className="text-purple-300 text-xs font-semibold mb-1">{m.user}</p>}
                <p className="text-white text-sm">{m.text}</p>
                <p className="text-gray-400 text-xs mt-1 text-right">{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-5 py-2 flex items-center gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 bg-white/10 rounded-2xl px-4 py-3 text-white text-sm outline-none placeholder-gray-500"
            placeholder="Type a message..."
          />
          <button aria-label="Send message" className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
