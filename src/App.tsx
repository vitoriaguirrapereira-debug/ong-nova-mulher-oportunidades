import { useEffect, useState } from "react"
import SplashScreen from "./screens/SplashScreen"
import OnboardingScreen from "./screens/OnboardingScreen"
import HomeScreen from "./screens/HomeScreen"
import ExploreScreen from "./screens/ExploreScreen"
import FiltersScreen from "./screens/FiltersScreen"
import SearchResultsScreen from "./screens/SearchResultsScreen"
import CourseDetailScreen from "./screens/CourseDetailScreen"
import WorkshopDetailScreen from "./screens/WorkshopDetailScreen"
import MaterialDetailScreen from "./screens/MaterialDetailScreen"
import JourneyScreen from "./screens/JourneyScreen"
import SavedScreen from "./screens/SavedScreen"
import CourseActiveScreen from "./screens/CourseActiveScreen"
import CourseCompletedScreen from "./screens/CourseCompletedScreen"
import MaterialsScreen from "./screens/MaterialsScreen"
import ProfileScreen from "./screens/ProfileScreen"
import NotificationsScreen from "./screens/NotificationsScreen"
import EmptyStateScreen from "./screens/EmptyStateScreen"
import BottomNav from "./components/BottomNav"
import FirstVisitTutorial from "./components/FirstVisitTutorial"
import DesktopHeader from "./components/DesktopHeader"
import DesktopFooter from "./components/DesktopFooter"
import SafetyHelp from "./components/SafetyHelp"
import SupportScreen from "./screens/SupportScreen"

const STORAGE_KEY = "conectando-oportunidades:estado-v1"
const ONBOARDING_KEY = "conectando-oportunidades:onboarding-concluido-v1"
const FIRST_VISIT_TUTORIAL_KEY = "conectando-oportunidades:tutorial-concluido"
const GUIDED_TUTORIAL_KEY =
  "conectando-oportunidades:tutorial-guiado-concluido-v2"

export type Screen = "splash" | "onboarding" | "home" | "explore" | "filters" | "search-results" | "course-detail" | "workshop-detail" | "material-detail" | "journey" | "saved" | "course-active" | "course-completed" | "materials" | "profile" | "notifications" | "empty-state" | "support"

export type Filters = {
  tracks: string[]
  subareas: string[]
  institutions: string[]
}

export type UserProfile = {
  name: string
  goal: string
  interests: string[]
}

export type AppState = {
  screen: Screen
  savedCourses: string[]
  activeCourseIds: string[]
  completedCourseIds: string[]
  selectedOpportunityId: string | null
  selectedGuideId: string | null
  searchQuery: string
  filters: Filters
  profile: UserProfile
  activeTab: "home" | "explore" | "journey" | "materials" | "profile" | "support"
}

export type ScreenProps = {
  navigate: (screen: Screen) => void
  state: AppState
  toggleSave: (id: string) => void
  setTab: (tab: AppState["activeTab"]) => void
  openOpportunity: (id: string) => void
  openGuide: (id: string) => void
  startCourse: (id: string) => void
  completeCourse: (id: string) => void
  setSearchQuery: (query: string) => void
  setFilters: (filters: Filters) => void
  updateProfile: (profile: UserProfile) => void
}

const defaultState: AppState = {
  screen: "splash",
  savedCourses: [],
  activeCourseIds: [],
  completedCourseIds: [],
  selectedOpportunityId: null,
  selectedGuideId: null,
  searchQuery: "",
  filters: { tracks: [], subareas: [], institutions: [] },
  profile: {
    name: "",
    goal: "Fortalecer minha autonomia profissional",
    interests: ["Empreendedorismo"],
  },
  activeTab: "home",
}

function loadState(): AppState {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}")
    return {
      ...defaultState,
      ...saved,
      screen: "splash",
      filters: { ...defaultState.filters, ...saved.filters },
      profile: { ...defaultState.profile, ...saved.profile },
    }
  } catch {
    return defaultState
  }
}

function shouldShowFirstVisitTutorial() {
  try {
    return window.localStorage.getItem(GUIDED_TUTORIAL_KEY) !== "true"
  } catch {
    return true
  }
}

export default function App() {
  const [state, setState] = useState<AppState>(loadState)
  const [showFirstVisitTutorial, setShowFirstVisitTutorial] = useState(
    shouldShowFirstVisitTutorial,
  )
  const [showSafetyHelp, setShowSafetyHelp] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // The app remains usable when browser storage is unavailable.
    }
  }, [state])

  const navigate = (screen: Screen) => {
    if (state.screen === "onboarding" && screen === "home") {
      try {
        window.localStorage.setItem(ONBOARDING_KEY, "true")
      } catch {
        // Navigation must still work without storage.
      }
    }
    setState((current) => ({ ...current, screen }))
  }

  const setTab = (tab: AppState["activeTab"]) => {
    const tabMap: Record<AppState["activeTab"], Screen> = {
      home: "home",
      explore: "explore",
      journey: "journey",
      materials: "materials",
      profile: "profile",
      support: "support",
    }
    setState((current) => ({
      ...current,
      screen: tabMap[tab],
      activeTab: tab,
    }))
  }

  const toggleSave = (id: string) =>
    setState((current) => ({
      ...current,
      savedCourses: current.savedCourses.includes(id)
        ? current.savedCourses.filter((item) => item !== id)
        : [...current.savedCourses, id],
    }))

  const openOpportunity = (id: string) =>
    setState((current) => ({
      ...current,
      selectedOpportunityId: id,
      screen: "course-detail",
    }))

  const openGuide = (id: string) =>
    setState((current) => ({
      ...current,
      selectedGuideId: id,
      screen: "material-detail",
    }))

  const startCourse = (id: string) =>
    setState((current) => ({
      ...current,
      selectedOpportunityId: id,
      activeCourseIds: current.activeCourseIds.includes(id)
        ? current.activeCourseIds
        : [...current.activeCourseIds, id],
      completedCourseIds: current.completedCourseIds.filter(
        (item) => item !== id,
      ),
    }))

  const completeCourse = (id: string) =>
    setState((current) => ({
      ...current,
      selectedOpportunityId: id,
      activeCourseIds: current.activeCourseIds.filter((item) => item !== id),
      completedCourseIds: current.completedCourseIds.includes(id)
        ? current.completedCourseIds
        : [...current.completedCourseIds, id],
      screen: "course-completed",
    }))

  const screenProps: ScreenProps = {
    navigate,
    state,
    toggleSave,
    setTab,
    openOpportunity,
    openGuide,
    startCourse,
    completeCourse,
    setSearchQuery: (searchQuery) =>
      setState((current) => ({ ...current, searchQuery })),
    setFilters: (filters) => setState((current) => ({ ...current, filters })),
    updateProfile: (profile) =>
      setState((current) => ({ ...current, profile })),
  }

  const finishFirstVisitTutorial = () => {
    try {
      window.localStorage.setItem(FIRST_VISIT_TUTORIAL_KEY, "true")
      window.localStorage.setItem(GUIDED_TUTORIAL_KEY, "true")
    } catch {
      // The tutorial still closes when storage is unavailable.
    }
    setShowFirstVisitTutorial(false)
  }

  const showNav = ![
    "splash",
    "onboarding",
    "filters",
    "course-detail",
    "workshop-detail",
    "material-detail",
    "course-active",
    "course-completed",
    "notifications",
  ].includes(state.screen)
  const showDesktopChrome = !["splash", "onboarding"].includes(state.screen)

  return (
    <div className={`app-shell screen-${state.screen}`}>
      {showDesktopChrome && (
        <DesktopHeader
          activeTab={state.activeTab}
          setTab={setTab}
          onSafety={() => setShowSafetyHelp(true)}
        />
      )}
      <main className="app-main">
        <div className="screen-stage">
          {state.screen === "splash" && <SplashScreen {...screenProps} />}
          {state.screen === "onboarding" && (
            <OnboardingScreen {...screenProps} />
          )}
          {state.screen === "home" && <HomeScreen {...screenProps} />}
          {state.screen === "explore" && <ExploreScreen {...screenProps} />}
          {state.screen === "filters" && <FiltersScreen {...screenProps} />}
          {state.screen === "search-results" && (
            <SearchResultsScreen {...screenProps} />
          )}
          {state.screen === "course-detail" && (
            <CourseDetailScreen {...screenProps} />
          )}
          {state.screen === "workshop-detail" && (
            <WorkshopDetailScreen {...screenProps} />
          )}
          {state.screen === "material-detail" && (
            <MaterialDetailScreen {...screenProps} />
          )}
          {state.screen === "journey" && <JourneyScreen {...screenProps} />}
          {state.screen === "saved" && <SavedScreen {...screenProps} />}
          {state.screen === "course-active" && (
            <CourseActiveScreen {...screenProps} />
          )}
          {state.screen === "course-completed" && (
            <CourseCompletedScreen {...screenProps} />
          )}
          {state.screen === "materials" && <MaterialsScreen {...screenProps} />}
          {state.screen === "support" && <SupportScreen />}
          {state.screen === "profile" && <ProfileScreen {...screenProps} />}
          {state.screen === "notifications" && (
            <NotificationsScreen {...screenProps} />
          )}
          {state.screen === "empty-state" && (
            <EmptyStateScreen {...screenProps} />
          )}
        </div>
      </main>
      {showNav && (
        <BottomNav
          activeTab={state.activeTab}
          setTab={setTab}
          onSafety={() => setShowSafetyHelp(true)}
        />
      )}
      <button
        type="button"
        className="safety-floating-button"
        onClick={() => setShowSafetyHelp(true)}
        aria-label="Abrir ajuda e segurança"
      >
        <span aria-hidden="true">!</span>
        <span>Ajuda</span>
      </button>
      <SafetyHelp
        open={showSafetyHelp}
        onClose={() => setShowSafetyHelp(false)}
        onSupport={() => {
          setShowSafetyHelp(false)
          setTab("support")
        }}
      />
      {showFirstVisitTutorial &&
        !["splash", "onboarding"].includes(state.screen) && (
          <FirstVisitTutorial
            screen={state.screen}
            setTab={setTab}
            onFinish={finishFirstVisitTutorial}
          />
        )}
      {showDesktopChrome && (
        <DesktopFooter
          setTab={setTab}
          onSafety={() => setShowSafetyHelp(true)}
        />
      )}
    </div>
  )
}
