import { type ReactNode } from 'react'

interface MobileFrameProps {
  children: ReactNode
}

export default function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="h-screen bg-[#0f0e2a] flex items-center justify-center overflow-hidden">
      {/* Phone outer shell — scales to fit viewport height */}
      <div className="relative w-[320px] shrink-0">
        {/* Outer bezel */}
        <div className="rounded-[44px] bg-[#1a1a2e] p-[8px] shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08)] ring-1 ring-white/5">
          {/* Inner screen area — height fits within viewport */}
          <div id="phone-screen" className="rounded-[38px] overflow-hidden relative bg-[#1a1740] flex flex-col h-[calc(100vh-48px)]">
            {/* Dynamic island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 w-28 h-7 bg-black rounded-full flex items-center justify-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-white/10" />
              <div className="w-3 h-3 rounded-full bg-[#1a1a1a] ring-1 ring-white/10" />
            </div>
            {/* Screen content */}
            <div className="flex-1 flex flex-col overflow-hidden pt-10 min-h-0">
              {children}
            </div>
          </div>
        </div>
        {/* Side buttons */}
        <div className="absolute -left-[11px] top-24 w-[5px] h-8 bg-[#111] rounded-l-md" />
        <div className="absolute -left-[11px] top-36 w-[5px] h-12 bg-[#111] rounded-l-md" />
        <div className="absolute -left-[11px] top-52 w-[5px] h-12 bg-[#111] rounded-l-md" />
        <div className="absolute -right-[11px] top-32 w-[5px] h-16 bg-[#111] rounded-r-md" />
      </div>
    </div>
  )
}
