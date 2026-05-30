import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import SplashScreen from './screens/SplashScreen'
import OnboardingScreen from './screens/OnboardingScreen'
import CrisisIntake1 from './screens/CrisisIntake1'
import CrisisIntake2 from './screens/CrisisIntake2'
import CrisisIntake3 from './screens/CrisisIntake3'
import CrisisIntake4 from './screens/CrisisIntake4'
import CrisisIntake5 from './screens/CrisisIntake5'
import GuidanceResult from './screens/GuidanceResult'
import Dashboard from './screens/Dashboard'
import FamilyMap from './screens/FamilyMap'
import VoiceJournal from './screens/VoiceJournal'
import VoiceAnalysisResult from './screens/VoiceAnalysisResult'
import BoundaryBuilder from './screens/BoundaryBuilder'
import Community from './screens/Community'
import TherapistPortal from './screens/TherapistPortal'
import RelapseRiskPrediction from './screens/RelapseRiskPrediction'
import FinancialGuardrails from './screens/FinancialGuardrails'
import WorkshopsResources from './screens/WorkshopsResources'
import MusicNeurofeedback from './screens/MusicNeurofeedback'
import SettingsPrivacy from './screens/SettingsPrivacy'
import DailyCheckIn from './screens/DailyCheckIn'
import MoodTracker from './screens/MoodTracker'
import SleepStress from './screens/SleepStress'
import MedicationTracker from './screens/MedicationTracker'
import FinancialExposure from './screens/FinancialExposure'
import SafetyPlan from './screens/SafetyPlan'
import EmergencyContacts from './screens/EmergencyContacts'
import CalmingTools from './screens/CalmingTools'
import Breathwork from './screens/Breathwork'
import GroundingExercises from './screens/GroundingExercises'
import SOSEmergency from './screens/SOSEmergency'
import CrisisHistory from './screens/CrisisHistory'
import BoundaryHistory from './screens/BoundaryHistory'
import CommunicationLog from './screens/CommunicationLog'
import FamilyGoals from './screens/FamilyGoals'
import ProgressTimeline from './screens/ProgressTimeline'
import Achievements from './screens/Achievements'
import RemindersAlerts from './screens/RemindersAlerts'
import AIInsights from './screens/AIInsights'
import PatternAnalysis from './screens/PatternAnalysis'
import TherapistNotes from './screens/TherapistNotes'
import VideoSessions from './screens/VideoSessions'
import DocumentsVault from './screens/DocumentsVault'
import SupportGroupChat from './screens/SupportGroupChat'
import MoreScreen from './screens/MoreScreen'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/crisis/1" element={<CrisisIntake1 />} />
        <Route path="/crisis/2" element={<CrisisIntake2 />} />
        <Route path="/crisis/3" element={<CrisisIntake3 />} />
        <Route path="/crisis/4" element={<CrisisIntake4 />} />
        <Route path="/crisis/5" element={<CrisisIntake5 />} />
        <Route path="/guidance" element={<GuidanceResult />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/family-map" element={<FamilyMap />} />
        <Route path="/voice-journal" element={<VoiceJournal />} />
        <Route path="/voice-analysis" element={<VoiceAnalysisResult />} />
        <Route path="/boundary-builder" element={<BoundaryBuilder />} />
        <Route path="/community" element={<Community />} />
        <Route path="/therapist-portal" element={<TherapistPortal />} />
        <Route path="/relapse-risk" element={<RelapseRiskPrediction />} />
        <Route path="/financial-guardrails" element={<FinancialGuardrails />} />
        <Route path="/workshops" element={<WorkshopsResources />} />
        <Route path="/music" element={<MusicNeurofeedback />} />
        <Route path="/settings" element={<SettingsPrivacy />} />
        <Route path="/daily-checkin" element={<DailyCheckIn />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/sleep-stress" element={<SleepStress />} />
        <Route path="/medication-tracker" element={<MedicationTracker />} />
        <Route path="/financial-exposure" element={<FinancialExposure />} />
        <Route path="/safety-plan" element={<SafetyPlan />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/calming-tools" element={<CalmingTools />} />
        <Route path="/breathwork" element={<Breathwork />} />
        <Route path="/grounding" element={<GroundingExercises />} />
        <Route path="/sos" element={<SOSEmergency />} />
        <Route path="/crisis-history" element={<CrisisHistory />} />
        <Route path="/boundary-history" element={<BoundaryHistory />} />
        <Route path="/communication-log" element={<CommunicationLog />} />
        <Route path="/family-goals" element={<FamilyGoals />} />
        <Route path="/progress-timeline" element={<ProgressTimeline />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/reminders" element={<RemindersAlerts />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="/pattern-analysis" element={<PatternAnalysis />} />
        <Route path="/therapist-notes" element={<TherapistNotes />} />
        <Route path="/video-sessions" element={<VideoSessions />} />
        <Route path="/documents-vault" element={<DocumentsVault />} />
        <Route path="/support-chat" element={<SupportGroupChat />} />
        <Route path="/more" element={<MoreScreen />} />
        {/* Fallback — unknown routes redirect to splash */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
