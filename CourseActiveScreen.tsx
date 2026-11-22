import type { ScreenProps } from "../App"
import { getOpportunity } from "../data/opportunities"

export default function CourseActiveScreen({
  navigate,
  state,
  completeCourse,
}: ScreenProps) {
  const item = getOpportunity(state.selectedOpportunityId)
  return (
    <div className="study-page">
      <header>
        <button type="button" onClick={() => navigate("journey")}>
          Voltar para Minha Jornada
        </button>
        <span>Em andamento</span>
        <h1>{item.title}</h1>
        <p>{item.institution}</p>
      </header>
      <main>
        <section className="partner-card">
          <span>Trilha</span>
          <strong>{item.track}</strong>
          <p>{item.subarea}</p>
        </section>
        <section className="study-guidance">
          <h2>Continue na plataforma oficial</h2>
          <p>
            O conteúdo, as aulas e eventuais certificados são administrados
            diretamente por {item.institution}. Quando finalizar, volte aqui
            para registrar sua conquista.
          </p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Acessar Curso na Plataforma Oficial
          </a>
        </section>
        <button
          className="complete-course-button"
          type="button"
          onClick={() => completeCourse(item.id)}
        >
          Marcar como concluído
        </button>
      </main>
    </div>
  )
}
