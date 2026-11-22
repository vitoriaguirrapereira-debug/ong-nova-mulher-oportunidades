import type { ScreenProps } from "../App"
import { getGuide, opportunities } from "../data/opportunities"

const ONG_URL = "https://linktr.ee/ongnovamulher"

export default function MaterialDetailScreen({
  navigate,
  state,
  openOpportunity,
}: ScreenProps) {
  const guide = getGuide(state.selectedGuideId)
  const related = opportunities.filter((item) =>
    guide.courseIds.includes(item.id),
  )
  return (
    <div className="material-detail">
      <header>
        <button type="button" onClick={() => navigate("materials")}>
          Voltar aos materiais
        </button>
        <span aria-hidden="true">{guide.emoji}</span>
        <small>
          {guide.category} · {guide.time}
        </small>
        <h1>{guide.title}</h1>
        <p>{guide.introduction}</p>
      </header>
      <main>
        <section className="guide-steps">
          <span className="eyebrow">Checklist prático</span>
          <h2>Faça no seu ritmo</h2>
          {guide.steps.map((step, index) => (
            <div key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </section>
        <section className="related-courses">
          <span className="eyebrow">Continue aprendendo</span>
          <h2>Cursos gratuitos relacionados</h2>
          {related.map((item) => (
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
              <em>Ver curso</em>
            </button>
          ))}
        </section>
        <section className="ong-support-card">
          <span className="eyebrow">Apoio e conexão</span>
          <h2>Fale com a ONG Nova Mulher</h2>
          <p>
            Acesse as redes e os canais oficiais para conhecer iniciativas,
            atividades e formas de apoio.
          </p>
          <a href={ONG_URL} target="_blank" rel="noopener noreferrer">
            Abrir canais oficiais
          </a>
        </section>
      </main>
    </div>
  )
}
