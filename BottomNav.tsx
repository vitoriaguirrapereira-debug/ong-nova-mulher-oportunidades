import type { ReactNode } from "react"
import type { AppState } from "../App"

type Props = {
  activeTab: AppState["activeTab"]
  setTab: (tab: AppState["activeTab"]) => void
  onSafety: () => void
}

const tabs: {
  id: AppState["activeTab"]
  label: string
  icon: (active: boolean) => ReactNode
}[] = [
  {
    id: "home",
    label: "Início",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "#0d9488" : "none"}
        stroke={a ? "#0d9488" : "#94a3b8"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    id: "explore",
    label: "Explorar",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "#0d9488" : "none"}
        stroke={a ? "#0d9488" : "#94a3b8"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "journey",
    label: "Jornada",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "#0d9488" : "none"}
        stroke={a ? "#0d9488" : "#94a3b8"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    id: "materials",
    label: "Materiais",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "#0d9488" : "none"}
        stroke={a ? "#0d9488" : "#94a3b8"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    id: "support",
    label: "Onde Buscar Ajuda",
    icon: () => (
      <svg className="w-5 h-5 shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Z" />
        <circle cx="12" cy="9" r="3" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Perfil",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "#0d9488" : "none"}
        stroke={a ? "#0d9488" : "#94a3b8"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

export default function BottomNav({ activeTab, setTab }: Props) {
  return (
    <div
      className="mobile-bottom-nav grid grid-cols-3 min-[480px]:grid-cols-6 gap-1 px-2 pt-2"
      style={{
        position: "sticky",
        bottom: 0,
        background: "white",
        borderTop: "1px solid #e2e8f0",
        paddingBottom: 24,
        zIndex: 50,
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setTab(tab.id)}
          aria-label={tab.label}
          aria-current={activeTab === tab.id ? "page" : undefined}
          className="flex min-w-0 min-h-11 flex-col items-center justify-center gap-0.5 px-1 py-1.5 rounded-xl transition-all text-teal-800"
          style={{
            minWidth: 60,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {tab.icon(activeTab === tab.id)}
          <span
            style={{
              fontSize: 14,
              fontWeight: activeTab === tab.id ? 600 : 400,
              color: activeTab === tab.id ? "#0f766e" : "#475569",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  )
}
