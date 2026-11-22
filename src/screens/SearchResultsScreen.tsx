import type { ScreenProps } from "../App"
import OpportunityCard from "../components/OpportunityCard"
import {
  matchesSearch,
  matchesTrack,
  opportunities,
} from "../data/opportunities"

export default function SearchResultsScreen(props: ScreenProps) {
  const { navigate, state, setFilters, setSearchQuery } = props
  const results = opportunities.filter(
    (item) =>
      matchesSearch(item, state.searchQuery) &&
      (state.filters.tracks.length === 0 ||
        state.filters.tracks.some((track) => matchesTrack(item, track))) &&
      (state.filters.subareas.length === 0 ||
        state.filters.subareas.includes(item.subarea)) &&
      (state.filters.institutions.length === 0 ||
        state.filters.institutions.includes(item.institution)),
  )
  const clear = () => {
    setSearchQuery("")
    setFilters({ tracks: [], subareas: [], institutions: [] })
    navigate("explore")
  }

  return (
    <div className="page-surface">
      <header className="subpage-header">
        <button type="button" onClick={() => navigate("explore")}>
          Voltar
        </button>
        <div>
          <span className="eyebrow">Sua seleção</span>
          <h1>{results.length} resultados encontrados</h1>
        </div>
        <button type="button" onClick={() => navigate("filters")}>
          Filtros
        </button>
      </header>
      <section className="catalog-section">
        {results.length > 0 ? (
          <div className="opportunity-grid">
            {results.map((item) => (
              <OpportunityCard
                key={item.id}
                item={item}
                saved={state.savedCourses.includes(item.id)}
                onOpen={() => props.openOpportunity(item.id)}
                onToggleSave={() => props.toggleSave(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="real-empty-state">
            <span aria-hidden="true">⌕</span>
            <h2>Nada por aqui ainda</h2>
            <p>Limpe os filtros para voltar a ver toda a curadoria.</p>
            <button type="button" onClick={clear}>
              Limpar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
