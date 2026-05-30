import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'

export default function SOSEmergency() {
  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-red-950 pb-6">
        <TopBar title="Emergency Mode" backRoute="/dashboard" />
        <div className="px-5 pb-2 text-center">
          <p className="text-red-300 text-sm">Get help right away.</p>
        </div>

        {/* SOS Button */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <button className="w-40 h-40 rounded-full bg-red-600 border-4 border-red-400 flex items-center justify-center shadow-2xl shadow-red-900 hover:bg-red-500 transition-colors active:scale-95">
            <span className="text-white font-black text-4xl">SOS</span>
          </button>
          <p className="text-red-300 text-sm text-center px-8">Your location will be shared with emergency contacts.</p>
        </div>

        {/* Actions */}
        <div className="px-5 flex flex-col gap-3">
          <button className="w-full py-4 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-500 transition-colors">
            Share Location
          </button>
          <a href="tel:911" className="w-full py-4 rounded-2xl bg-white/10 text-white font-semibold text-center block hover:bg-white/20 transition-colors">
            Call Emergency Services 911
          </a>
          <p className="text-center text-red-400 text-xs">If you are in immediate danger, call 911 right now</p>
        </div>
      </div>
    </MobileFrame>
  )
}
