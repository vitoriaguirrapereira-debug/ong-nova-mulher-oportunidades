import type { ScreenProps } from "../App"
import { opportunities } from "../data/opportunities"

export default function JourneyScreen({
  navigate,
  state,
  openOpportunity,
}: ScreenProps) {
  const active = opportunities.filter((item) =>
    state.activeCourseIds.includes(item.id),
  )
  const completed = opportunities.filter((item) =>
    state.completedCourseIds.includes(item.id),
  )
  const saved = opportunities.filter(
    (item) =>
      state.savedCourses.includes(item.id) &&
      !state.activeCourseIds.includes(item.id) &&
      !state.completedCourseIds.includes(item.id),
  )

  const openProgress = (
    id: string,
    screen: "course-active" | "course-completed",
  ) => {
    openOpportunity(id)
    window.setTimeout(() => navigate(screen), 0)
  }

  return (
    <div className="page-surface journey-page">
      <header className="page-heading">
        <div>
          <span className="eyebrow">Seu caminho</span>
          <h1>Minha Jornada</h1>
          <p>Acompanhe o que você começou e celebre cada conclusão.</p>
        </div>
      </header>
      <div className="journey-summary" data-tutorial="journey-progress">
        <div>
          <strong>{saved.length}</strong>
          <span>Salvos</span>
        </div>
        <div>
          <strong>{active.length}</strong>
          <span>Em andamento</span>
        </div>
        <div>
          <strong>{completed.length}</strong>
          <span>Concluídos</span>
        </div>
      </div>
      <section className="journey-list">
        <h2>Em andamento</h2>
        {active.length > 0 ? (
          active.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openProgress(item.id, "course-active")}
            >
              <span aria-hidden="true">{item.emoji}</span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.institution}</small>
              </span>
              <em>Continuar</em>
            </button>
          ))
        ) : (
          <p>Os cursos que você acessar aparecerão aqui.</p>
        )}
      </section>
      <section className="journey-list">
        <h2>Concluídos</h2>
        {completed.length > 0 ? (
          completed.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openProgress(item.id, "course-completed")}
            >
              <span aria-hidden="true">✓</span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.institution}</small>
              </span>
              <em>Concluído</em>
            </button>
          ))
        ) : (
          <p>Quando concluir um curso, registre aqui sua conquista.</p>
        )}
      </section>
      <section className="journey-list">
        <div className="journey-list__heading">
          <h2>Salvos para depois</h2>
          <button type="button" onClick={() => navigate("saved")}>
            Ver todos
          </button>
        </div>
        {saved.slice(0, 3).map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => openOpportunity(item.id)}
          >
            <span aria-hidden="true">{item.emoji}</span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.institution}</small>
            </span>
          </button>
        ))}
      </section>
    </div>
  )
}
