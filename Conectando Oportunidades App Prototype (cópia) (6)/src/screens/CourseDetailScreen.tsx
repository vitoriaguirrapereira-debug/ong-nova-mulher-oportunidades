import type { ScreenProps } from "../App"
import { getOpportunity } from "../data/opportunities"

export default function CourseDetailScreen({
  navigate,
  state,
  toggleSave,
  startCourse,
}: ScreenProps) {
  const item = getOpportunity(state.selectedOpportunityId)
  const saved = state.savedCourses.includes(item.id)

  return (
    <div className="detail-page">
      <header className="detail-hero">
        <div className="detail-hero__actions">
          <button type="button" onClick={() => navigate("explore")}>
            Voltar
          </button>
          <button
            type="button"
            onClick={() => toggleSave(item.id)}
            aria-pressed={saved}
          >
            {saved ? "Remover dos salvos" : "Salvar"}
          </button>
        </div>
        <span className="detail-hero__icon" aria-hidden="true">
          {item.emoji}
        </span>
        <div className="detail-badges">
          <span>{item.type}</span>
          <span>100% Gratuito</span>
          <span>Online</span>
        </div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </header>

      <main className="detail-content">
        <section className="partner-card">
          <span>Instituição ofertante</span>
          <strong>{item.institution}</strong>
          <p>
            A inscrição e o conteúdo são oferecidos na plataforma oficial da
            instituição.
          </p>
        </section>
        <div className="detail-meta-grid">
          <section>
            <span>Trilha</span>
            <strong>{item.track}</strong>
          </section>
          <section>
            <span>Subárea</span>
            <strong>{item.subarea}</strong>
          </section>
          <section>
            <span>Formato</span>
            <strong>{item.format}</strong>
          </section>
          <section>
            <span>Investimento</span>
            <strong>{item.free}</strong>
          </section>
        </div>
        <section className="detail-note">
          <h2>Antes de começar</h2>
          <p>
            Ao acessar, este conteúdo será registrado em Minha Jornada como “Em
            andamento”. Inscrição, carga horária e certificado devem ser
            confirmados diretamente na plataforma oficial da instituição.
          </p>
        </section>
      </main>

      <div className="detail-cta-bar">
        <button
          type="button"
          className="detail-save"
          onClick={() => toggleSave(item.id)}
        >
          {saved ? "Salvo" : "Salvar"}
        </button>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => startCourse(item.id)}
        >
          Acessar Curso na Plataforma Oficial
        </a>
      </div>
    </div>
  )
}
