import type { ScreenProps } from "../App"
import { getOpportunity } from "../data/opportunities"

export default function CourseCompletedScreen({
  navigate,
  setTab,
  state,
}: ScreenProps) {
  const item = getOpportunity(state.selectedOpportunityId)
  return (
    <div className="completed-page">
      <header>
        <span aria-hidden="true">✓</span>
        <p>Conquista registrada</p>
        <h1>Parabéns por concluir!</h1>
        <strong>{item.title}</strong>
      </header>
      <main>
        <section>
          <span>Instituição ofertante</span>
          <h2>{item.institution}</h2>
          <p>
            A conclusão foi salva neste navegador. Se a instituição oferecer
            certificado, consulte a plataforma oficial para emitir o documento.
          </p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Voltar à plataforma oficial
          </a>
        </section>
        <div className="completed-actions">
          <button type="button" onClick={() => navigate("journey")}>
            Ver Minha Jornada
          </button>
          <button type="button" onClick={() => setTab("explore")}>
            Explorar mais oportunidades
          </button>
        </div>
      </main>
    </div>
  )
}
