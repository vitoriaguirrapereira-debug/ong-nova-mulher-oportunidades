import { useState } from "react"
import type { Filters, ScreenProps } from "../App"
import { institutions, subareas, tracks } from "../data/opportunities"

function ToggleGroup({
  title,
  options,
  selected,
  onChange,
}: {
  title: string
  options: readonly string[]
  selected: string[]
  onChange: (value: string[]) => void
}) {
  return (
    <fieldset className="filter-group">
      <legend>{title}</legend>
      <div className="filter-chips">
        {options.map((option) => {
          const active = selected.includes(option)
          return (
            <button
              key={option}
              type="button"
              className={active ? "is-active" : ""}
              aria-pressed={active}
              onClick={() =>
                onChange(
                  active
                    ? selected.filter((item) => item !== option)
                    : [...selected, option],
                )
              }
            >
              {option}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export default function FiltersScreen({
  navigate,
  state,
  setFilters,
}: ScreenProps) {
  const [draft, setDraft] = useState<Filters>(state.filters)
  const count =
    draft.tracks.length + draft.subareas.length + draft.institutions.length

  return (
    <div className="page-surface filter-page">
      <header className="subpage-header">
        <button type="button" onClick={() => navigate("explore")}>
          Voltar
        </button>
        <div>
          <span className="eyebrow">Refine sua busca</span>
          <h1>Filtros do catálogo</h1>
        </div>
        <button
          type="button"
          onClick={() =>
            setDraft({ tracks: [], subareas: [], institutions: [] })
          }
        >
          Limpar
        </button>
      </header>
      <div className="filter-page__body">
        <ToggleGroup
          title="Trilhas"
          options={tracks}
          selected={draft.tracks}
          onChange={(tracks) => setDraft({ ...draft, tracks })}
        />
        <ToggleGroup
          title="Subáreas"
          options={subareas}
          selected={draft.subareas}
          onChange={(subareas) => setDraft({ ...draft, subareas })}
        />
        <ToggleGroup
          title="Instituições"
          options={institutions}
          selected={draft.institutions}
          onChange={(institutions) => setDraft({ ...draft, institutions })}
        />
      </div>
      <div className="sticky-action">
        <button
          type="button"
          onClick={() => {
            setFilters(draft)
            navigate("search-results")
          }}
        >
          Ver resultados {count > 0 ? `(${count} filtros)` : ""}
        </button>
      </div>
    </div>
  )
}
