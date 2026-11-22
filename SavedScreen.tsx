import type { ScreenProps } from "../App"
import OpportunityCard from "../components/OpportunityCard"
import { opportunities } from "../data/opportunities"

export default function SavedScreen(props: ScreenProps) {
  const items = opportunities.filter((item) =>
    props.state.savedCourses.includes(item.id),
  )
  return (
    <div className="page-surface">
      <header className="subpage-header">
        <button type="button" onClick={() => props.navigate("journey")}>
          Voltar
        </button>
        <div>
          <span className="eyebrow">Sua seleção</span>
          <h1>Oportunidades salvas</h1>
        </div>
      </header>
      <section className="catalog-section">
        {items.length > 0 ? (
          <div className="opportunity-grid">
            {items.map((item) => (
              <OpportunityCard
                key={item.id}
                item={item}
                saved
                onOpen={() => props.openOpportunity(item.id)}
                onToggleSave={() => props.toggleSave(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="real-empty-state">
            <span aria-hidden="true">☆</span>
            <h2>Nenhuma oportunidade salva</h2>
            <p>Use o botão “Salvar” para montar sua lista.</p>
            <button type="button" onClick={() => props.navigate("explore")}>
              Explorar oportunidades
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
