import { useState } from 'react'

interface Field {
  key: string
  label: string
  placeholder?: string
  type?: 'text' | 'time' | 'select'
  options?: string[]
}

interface AddModalProps {
  title: string
  fields: Field[]
  onSave: (data: Record<string, string>) => void
  onClose: () => void
}

export function AddModal({ title, fields, onSave, onClose }: AddModalProps) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map(f => [f.key, f.options?.[0] ?? '']))
  )

  const set = (key: string, val: string) => setValues(p => ({ ...p, [key]: val }))

  return (
    <div className="absolute inset-0 z-[100] flex items-end justify-center rounded-[38px] overflow-hidden" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="relative w-full max-w-[390px] bg-[#1e1b4b] rounded-t-3xl p-6 flex flex-col gap-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-base">{title}</h3>
          <button type="button" onClick={onClose} className="text-gray-400 text-xl leading-none">✕</button>
        </div>

        {fields.map(f => (
          <div key={f.key} className="flex flex-col gap-1">
            <label className="text-gray-400 text-xs">{f.label}</label>
            {f.type === 'select' ? (
              <select
                value={values[f.key]}
                onChange={e => set(f.key, e.target.value)}
                title={f.label}
                aria-label={f.label}
                className="bg-white/10 text-white rounded-xl px-3 py-2.5 text-sm outline-none"
              >
                {f.options?.map(o => <option key={o} value={o} className="bg-[#1e1b4b]">{o}</option>)}
              </select>
            ) : (
              <input
                type={f.type ?? 'text'}
                placeholder={f.placeholder}
                value={values[f.key]}
                onChange={e => set(f.key, e.target.value)}
                className="bg-white/10 text-white rounded-xl px-3 py-2.5 text-sm outline-none placeholder:text-gray-500"
              />
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => { onSave(values); onClose() }}
          className="w-full py-3 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors mt-1"
        >
          Save
        </button>
      </div>
    </div>
  )
}
