import type { ScreenProps } from "../App"
import OpportunityCard from "../components/OpportunityCard"
import {
  matchesSearch,
  matchesTrack,
  opportunities,
  tracks,
} from "../data/opportunities"

export default function ExploreScreen({
  navigate,
  state,
  toggleSave,
  openOpportunity,
  setSearchQuery,
  setFilters,
}: ScreenProps) {
  const filtered = opportunities.filter(
    (item) =>
      matchesSearch(item, state.searchQuery) &&
      (state.filters.tracks.length === 0 ||
        state.filters.tracks.some((track) => matchesTrack(item, track))) &&
      (state.filters.subareas.length === 0 ||
        state.filters.subareas.includes(item.subarea)) &&
      (state.filters.institutions.length === 0 ||
        state.filters.institutions.includes(item.institution)),
  )

  const clearFilters = () => {
    setSearchQuery("")
    setFilters({ tracks: [], subareas: [], institutions: [] })
  }

  return (
    <div className="explore-screen page-surface">
      <header className="page-heading" data-tutorial="explore-tools">
        <div>
          <span className="eyebrow">Curadoria oficial</span>
          <h1>Explore oportunidades gratuitas</h1>
          <p>
            Encontre cursos, trilhas e plataformas confiáveis para seus próximos
            passos.
          </p>
        </div>
        <button
          className="secondary-action"
          type="button"
          onClick={() => navigate("filters")}
        >
          Filtrar catálogo
        </button>
      </header>

      <section className="catalog-tools" aria-label="Busca e trilhas">
        <label className="search-field">
          <span>Buscar no catálogo</span>
          <input
            value={state.searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Título, instituição, trilha ou subárea"
            type="search"
          />
        </label>
        <div className="filter-chips">
          <button
            type="button"
            className={state.filters.tracks.length === 0 ? "is-active" : ""}
            onClick={() => setFilters({ ...state.filters, tracks: [] })}
          >
            Todas
          </button>
          {tracks.map((track) => (
            <button
              key={track}
              type="button"
              className={
                state.filters.tracks.includes(track) ? "is-active" : ""
              }
              onClick={() =>
                setFilters({
                  ...state.filters,
                  tracks: state.filters.tracks.includes(track) ? [] : [track],
                })
              }
            >
              {track}
            </button>
          ))}
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-section__top">
          <p>
            <strong>{filtered.length}</strong> de {opportunities.length}{" "}
            oportunidades
          </p>
          {(state.searchQuery ||
            state.filters.tracks.length > 0 ||
            state.filters.subareas.length > 0 ||
            state.filters.institutions.length > 0) && (
            <button type="button" onClick={clearFilters}>
              Limpar busca e filtros
            </button>
          )}
        </div>
        {filtered.length > 0 ? (
          <div className="opportunity-grid">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                data-tutorial={
                  index === 0 ? "first-opportunity-card" : undefined
                }
              >
                <OpportunityCard
                  item={item}
                  saved={state.savedCourses.includes(item.id)}
                  onOpen={() => openOpportunity(item.id)}
                  onToggleSave={() => toggleSave(item.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="real-empty-state">
            <span aria-hidden="true">⌕</span>
            <h2>Nenhuma oportunidade encontrada</h2>
            <p>Tente outro termo ou remova alguns filtros.</p>
            <button type="button" onClick={clearFilters}>
              Limpar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
