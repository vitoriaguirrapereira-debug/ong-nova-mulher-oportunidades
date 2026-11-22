import type { Opportunity } from "../data/opportunities"

type Props = {
  item: Opportunity
  saved: boolean
  onOpen: () => void
  onToggleSave: () => void
}

export default function OpportunityCard({
  item,
  saved,
  onOpen,
  onToggleSave,
}: Props) {
  return (
    <article className="catalog-card">
      <button
        type="button"
        className="catalog-card__main"
        onClick={onOpen}
        aria-label={`Ver detalhes de ${item.title}`}
      >
        <span className="catalog-card__icon" aria-hidden="true">
          {item.emoji}
        </span>
        <span className="catalog-card__content">
          <span className="catalog-card__badges">
            <span>{item.type}</span>
            <span>{item.free}</span>
          </span>
          <strong>{item.title}</strong>
          <small>{item.institution}</small>
          <span>{item.description}</span>
          <em>
            {item.track} · {item.subarea}
          </em>
        </span>
      </button>
      <div className="catalog-card__footer">
        <button type="button" onClick={onOpen}>
          Ver detalhes
        </button>
        <button
          type="button"
          onClick={onToggleSave}
          aria-label={
            saved ? `Remover ${item.title} dos salvos` : `Salvar ${item.title}`
          }
          aria-pressed={saved}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          {saved ? "Salvo" : "Salvar"}
        </button>
      </div>
    </article>
  )
}
