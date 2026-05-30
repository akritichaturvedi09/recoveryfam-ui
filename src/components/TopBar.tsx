import { useNavigate } from 'react-router-dom'

interface TopBarProps {
  title?: string
  backRoute?: string
  rightElement?: React.ReactNode
}

export default function TopBar({ title, backRoute, rightElement }: TopBarProps) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (backRoute) navigate(backRoute)
    else navigate(-1)
  }

  return (
    <div className="flex items-center px-4 py-3 relative">
      <button
        onClick={handleBack}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white"
        aria-label="Go back"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </button>
      {title && (
        <h1 className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-white">
          {title}
        </h1>
      )}
      {rightElement && <div className="ml-auto">{rightElement}</div>}
    </div>
  )
}
