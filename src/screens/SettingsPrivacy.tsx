import { useState } from 'react'
import MobileFrame from '../components/MobileFrame'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

function Toggle({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  return (
    <button type="button" aria-label={`Toggle ${label}`}
      onClick={onToggle}
      className={`w-11 h-6 rounded-full transition-colors relative ${on ? 'bg-purple-600' : 'bg-gray-600'}`}
    >
      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${on ? 'left-5' : 'left-0.5'}`} />
    </button>
  )
}

export default function SettingsPrivacy() {
  const [toggles, setToggles] = useState({ onDevice: true, dataLeave: false, biometric: true, autoLock: true, notifications: true, reminders: true })
  const toggle = (k: keyof typeof toggles) => setToggles(p => ({ ...p, [k]: !p[k] }))

  return (
    <MobileFrame>
      <div className="flex-1 flex flex-col bg-[#1a1740] pb-16 overflow-y-auto no-scrollbar">
        <TopBar title="Settings" />
        <div className="px-5 space-y-4">
          <div>
            <p className="text-gray-400 text-xs uppercase mb-2 px-1">Privacy & Security</p>
            <div className="bg-white/5 rounded-2xl divide-y divide-white/5">
              {[
                { label: 'On-Device Processing', key: 'onDevice' },
                { label: 'Data Never Leaves Device', key: 'dataLeave' },
                { label: 'Biometric Lock', key: 'biometric' },
                { label: 'Auto Lock', key: 'autoLock', sub: '5 min' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between px-4 py-3.5">
                  <div>
                    <p className="text-white text-sm">{item.label}</p>
                    {item.sub && <p className="text-gray-500 text-xs">{item.sub}</p>}
                  </div>
                  <Toggle
                    on={toggles[item.key as keyof typeof toggles]}
                    onToggle={() => toggle(item.key as keyof typeof toggles)}
                    label={item.label}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-xs uppercase mb-2 px-1">Preferences</p>
            <div className="bg-white/5 rounded-2xl divide-y divide-white/5">
              {[
                { label: 'Notifications', key: 'notifications' },
                { label: 'Reminders', key: 'reminders' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between px-4 py-3.5">
                  <p className="text-white text-sm">{item.label}</p>
                  <Toggle
                    on={toggles[item.key as keyof typeof toggles]}
                    onToggle={() => toggle(item.key as keyof typeof toggles)}
                    label={item.label}
                  />
                </div>
              ))}
              <div className="flex items-center justify-between px-4 py-3.5">
                <p className="text-white text-sm">Theme</p>
                <span className="text-gray-400 text-sm">Dark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </MobileFrame>
  )
}
