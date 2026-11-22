import type { AppState, Screen } from "../App"
import logoUrl from "../assets/logo.png"

type Props = {
  navigate: (s: Screen) => void
  state: AppState
  toggleSave: (id: string) => void
  setTab: (t: AppState["activeTab"]) => void
}

export default function SplashScreen({ navigate }: Props) {
  const continueToApp = () => {
    try {
      navigate(
        window.localStorage.getItem(
          "conectando-oportunidades:onboarding-concluido-v1",
        ) === "true"
          ? "home"
          : "onboarding",
      )
    } catch {
      navigate("onboarding")
    }
  }

  return (
    <div
      style={{
        minHeight: 780,
        background:
          "linear-gradient(160deg, #0f766e 0%, #0d9488 40%, #115e59 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 32px",
        textAlign: "center",
      }}
    >
      {/* Logo centralizada */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        <img
          src={logoUrl}
          alt="Conectando Oportunidades"
          style={{ width: 260, height: "auto", display: "block" }}
        />
      </div>

      <p
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: 17,
          lineHeight: 1.6,
          marginBottom: 60,
          maxWidth: 280,
        }}
      >
        Cursos gratuitos e guias práticos reunidos num só lugar para a sua
        jornada.
      </p>

      {/* Dots */}
      <div style={{ display: "flex", gap: 8, marginBottom: 48 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: i === 0 ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === 0 ? "white" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      <button
        onClick={continueToApp}
        style={{
          background: "white",
          color: "#0d9488",
          fontFamily: "Outfit, sans-serif",
          fontWeight: 700,
          fontSize: 16,
          padding: "16px 0",
          borderRadius: 16,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          width: "100%",
        }}
      >
        Entrar na plataforma
      </button>

      <p
        style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginTop: 20 }}
      >
        Acesso gratuito · Sem cadastro obrigatório
      </p>
    </div>
  )
}
