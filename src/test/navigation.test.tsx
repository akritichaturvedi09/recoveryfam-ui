import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import * as fc from 'fast-check'

// Import all screens
import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import CrisisIntake1 from '../screens/CrisisIntake1'
import CrisisIntake2 from '../screens/CrisisIntake2'
import CrisisIntake3 from '../screens/CrisisIntake3'
import CrisisIntake4 from '../screens/CrisisIntake4'
import CrisisIntake5 from '../screens/CrisisIntake5'
import GuidanceResult from '../screens/GuidanceResult'
import Dashboard from '../screens/Dashboard'
import FamilyMap from '../screens/FamilyMap'
import VoiceJournal from '../screens/VoiceJournal'
import VoiceAnalysisResult from '../screens/VoiceAnalysisResult'
import BoundaryBuilder from '../screens/BoundaryBuilder'
import Community from '../screens/Community'
import TherapistPortal from '../screens/TherapistPortal'
import RelapseRiskPrediction from '../screens/RelapseRiskPrediction'
import FinancialGuardrails from '../screens/FinancialGuardrails'
import WorkshopsResources from '../screens/WorkshopsResources'
import MusicNeurofeedback from '../screens/MusicNeurofeedback'
import SettingsPrivacy from '../screens/SettingsPrivacy'
import DailyCheckIn from '../screens/DailyCheckIn'
import MoodTracker from '../screens/MoodTracker'
import SleepStress from '../screens/SleepStress'
import MedicationTracker from '../screens/MedicationTracker'
import FinancialExposure from '../screens/FinancialExposure'
import SafetyPlan from '../screens/SafetyPlan'
import EmergencyContacts from '../screens/EmergencyContacts'
import CalmingTools from '../screens/CalmingTools'
import Breathwork from '../screens/Breathwork'
import GroundingExercises from '../screens/GroundingExercises'
import SOSEmergency from '../screens/SOSEmergency'
import CrisisHistory from '../screens/CrisisHistory'
import BoundaryHistory from '../screens/BoundaryHistory'
import CommunicationLog from '../screens/CommunicationLog'
import FamilyGoals from '../screens/FamilyGoals'
import ProgressTimeline from '../screens/ProgressTimeline'
import Achievements from '../screens/Achievements'
import RemindersAlerts from '../screens/RemindersAlerts'
import AIInsights from '../screens/AIInsights'
import PatternAnalysis from '../screens/PatternAnalysis'
import TherapistNotes from '../screens/TherapistNotes'
import VideoSessions from '../screens/VideoSessions'
import DocumentsVault from '../screens/DocumentsVault'
import SupportGroupChat from '../screens/SupportGroupChat'
import MoreScreen from '../screens/MoreScreen'

// All screen components mapped to their routes
const allScreens: Array<{ route: string; Component: React.ComponentType }> = [
  { route: '/', Component: SplashScreen },
  { route: '/onboarding', Component: OnboardingScreen },
  { route: '/crisis/1', Component: CrisisIntake1 },
  { route: '/crisis/2', Component: CrisisIntake2 },
  { route: '/crisis/3', Component: CrisisIntake3 },
  { route: '/crisis/4', Component: CrisisIntake4 },
  { route: '/crisis/5', Component: CrisisIntake5 },
  { route: '/guidance', Component: GuidanceResult },
  { route: '/dashboard', Component: Dashboard },
  { route: '/family-map', Component: FamilyMap },
  { route: '/voice-journal', Component: VoiceJournal },
  { route: '/voice-analysis', Component: VoiceAnalysisResult },
  { route: '/boundary-builder', Component: BoundaryBuilder },
  { route: '/community', Component: Community },
  { route: '/therapist-portal', Component: TherapistPortal },
  { route: '/relapse-risk', Component: RelapseRiskPrediction },
  { route: '/financial-guardrails', Component: FinancialGuardrails },
  { route: '/workshops', Component: WorkshopsResources },
  { route: '/music', Component: MusicNeurofeedback },
  { route: '/settings', Component: SettingsPrivacy },
  { route: '/daily-checkin', Component: DailyCheckIn },
  { route: '/mood-tracker', Component: MoodTracker },
  { route: '/sleep-stress', Component: SleepStress },
  { route: '/medication-tracker', Component: MedicationTracker },
  { route: '/financial-exposure', Component: FinancialExposure },
  { route: '/safety-plan', Component: SafetyPlan },
  { route: '/emergency-contacts', Component: EmergencyContacts },
  { route: '/calming-tools', Component: CalmingTools },
  { route: '/breathwork', Component: Breathwork },
  { route: '/grounding', Component: GroundingExercises },
  { route: '/sos', Component: SOSEmergency },
  { route: '/crisis-history', Component: CrisisHistory },
  { route: '/boundary-history', Component: BoundaryHistory },
  { route: '/communication-log', Component: CommunicationLog },
  { route: '/family-goals', Component: FamilyGoals },
  { route: '/progress-timeline', Component: ProgressTimeline },
  { route: '/achievements', Component: Achievements },
  { route: '/reminders', Component: RemindersAlerts },
  { route: '/ai-insights', Component: AIInsights },
  { route: '/pattern-analysis', Component: PatternAnalysis },
  { route: '/therapist-notes', Component: TherapistNotes },
  { route: '/video-sessions', Component: VideoSessions },
  { route: '/documents-vault', Component: DocumentsVault },
  { route: '/support-chat', Component: SupportGroupChat },
  { route: '/more', Component: MoreScreen },
]

// Feature: recoveryfam-ui, Property 1: Navigation completeness
// For any route defined in the router, navigating to that route should render
// a non-empty screen component without crashing.
// Validates: Requirements 6.1, 6.2, 6.3, 6.4
describe('Property 1: Navigation completeness', () => {
  it('every screen renders without crashing and produces non-empty output', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allScreens),
        ({ route, Component }) => {
          const { container } = render(
            <MemoryRouter initialEntries={[route]}>
              <Component />
            </MemoryRouter>
          )
          // Screen must render non-empty content
          expect(container.firstChild).not.toBeNull()
          expect(container.innerHTML.length).toBeGreaterThan(0)
        }
      ),
      { numRuns: 100 }
    )
  })
})

// Feature: recoveryfam-ui, Property 2: Crisis intake flow ordering
// For any step N in the crisis intake (1–4), the "Next" button should be present,
// and step 5 should have "Get Guidance" button.
// Validates: Requirements 3.6, 3.7
describe('Property 2: Crisis intake flow ordering', () => {
  const intakeScreens = [
    { step: 1, Component: CrisisIntake1, buttonText: 'Next' },
    { step: 2, Component: CrisisIntake2, buttonText: 'Next' },
    { step: 3, Component: CrisisIntake3, buttonText: 'Next' },
    { step: 4, Component: CrisisIntake4, buttonText: 'Next' },
    { step: 5, Component: CrisisIntake5, buttonText: 'Get Guidance' },
  ]

  it('each intake step has the correct navigation button', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...intakeScreens),
        ({ step, Component, buttonText }) => {
          const { getAllByText } = render(
            <MemoryRouter initialEntries={[`/crisis/${step}`]}>
              <Component />
            </MemoryRouter>
          )
          // At least one button with the correct text must exist
          const buttons = getAllByText(buttonText)
          expect(buttons.length).toBeGreaterThanOrEqual(1)
        }
      ),
      { numRuns: 100 }
    )
  })
})

// Feature: recoveryfam-ui, Property 3: Bottom navigation presence
// For any main feature screen (dashboard and beyond), the bottom navigation bar
// should be present and contain exactly 5 tabs.
// Validates: Requirements 7.1
describe('Property 3: Bottom navigation presence', () => {
  // Screens that have BottomNav (exclude splash, onboarding, crisis intake, guidance, sos)
  const screensWithoutBottomNav = ['/', '/onboarding', '/crisis/1', '/crisis/2', '/crisis/3', '/crisis/4', '/crisis/5', '/guidance', '/sos']
  const mainScreens = allScreens.filter(s => !screensWithoutBottomNav.includes(s.route))

  it('every main screen has a bottom nav with exactly 5 tabs', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...mainScreens),
        ({ route, Component }) => {
          const { container } = render(
            <MemoryRouter initialEntries={[route]}>
              <Component />
            </MemoryRouter>
          )
          // Each tab label should be present
          const tabLabels = ['Home', 'Navigate', 'Journal', 'Community', 'More']
          const text = container.textContent ?? ''
          const foundTabs = tabLabels.filter(label => text.includes(label))
          expect(foundTabs.length).toBe(5)
        }
      ),
      { numRuns: 100 }
    )
  })
})

// Unit test: Splash screen has both navigation buttons
describe('SplashScreen unit tests', () => {
  it('renders Get Started and I Need Help Immediately buttons', () => {
    render(
      <MemoryRouter>
        <SplashScreen />
      </MemoryRouter>
    )
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('I Need Help Immediately')).toBeInTheDocument()
  })
})
