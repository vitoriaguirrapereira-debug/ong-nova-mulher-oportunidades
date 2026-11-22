import type { AppState } from "../App"
import logoUrl from "../assets/logo.png"

type Props = {
  activeTab: AppState["activeTab"]
  setTab: (tab: AppState["activeTab"]) => void
  onSafety: () => void
}

type HeaderLink = {
  id: AppState["activeTab"]
  label: string
}

const links: HeaderLink[] = [
  { id: "home", label: "Início" },
  { id: "explore", label: "Explorar" },
  { id: "journey", label: "Minha Jornada" },
  { id: "materials", label: "Materiais" },
  { id: "support", label: "Onde Buscar Ajuda" },
  { id: "profile", label: "Perfil" },
]

export default function DesktopHeader({ activeTab, setTab, onSafety }: Props) {
  return (
    <header className="desktop-header">
      <div className="desktop-header__inner" style={{ gridTemplateColumns: "auto minmax(0, 1fr) auto", gap: 12 }}>
        <button
          className="desktop-header__brand"
          type="button"
          onClick={() => setTab("home")}
          aria-label="Ir para o início"
        >
          <img
            src={logoUrl}
            alt="Conectando Oportunidades"
            width="244"
            height="76"
          />
        </button>

        <nav className="desktop-header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => setTab(link.id)}
              className={activeTab === link.id ? "is-active" : ""}
              style={{ padding: "0 8px", minHeight: 44 }}
              aria-current={activeTab === link.id ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="desktop-header__support"
          onClick={onSafety}
          aria-label="Abrir ajuda e segurança"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span>Segurança</span>
          <strong>180</strong>
        </button>
      </div>
    </header>
  )
}
