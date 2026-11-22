import type { ScreenProps } from "../App"
import OpportunityCard from "../components/OpportunityCard"
import ProjectTeam from "../components/ProjectTeam"
import logoUrl from "../assets/logo.png"
import { guides, opportunities, tracks } from "../data/opportunities"

export default function HomeScreen(props: ScreenProps) {
  const featured = opportunities.slice(0, 6)
  return (
    <div className="home-screen page-surface">
      <section className="home-hero">
        <div>
          <img src={logoUrl} alt="Conectando Oportunidades" />
          <span>Um projeto de extensão da USP em parceria com a ONG Nova Mulher</span>
          <h1>Conhecimento gratuito para abrir novos caminhos</h1>
          <p>
            Cursos e guias confiáveis para fortalecer sua autonomia, seu
            trabalho e o seu negócio.
          </p>
        </div>
        <button
          data-tutorial="home-search"
          type="button"
          onClick={() => props.setTab("explore")}
        >
          Buscar oportunidades
        </button>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Por onde começar</span>
            <h2>Explore por trilha</h2>
          </div>
        </div>
        <div className="home-tracks">
          {tracks.map((track) => (
            <button
              key={track}
              type="button"
              onClick={() => {
                props.setFilters({
                  tracks: [track],
                  subareas: [],
                  institutions: [],
                })
                props.setTab("explore")
              }}
            >
              <span aria-hidden="true">
                {track === "Tecnologia"
                  ? "TEC"
                  : track === "Mercado de trabalho"
                    ? "CAR"
                    : track === "Desenvolvimento pessoal"
                      ? "DES"
                      : track === "Indicação de plataforma"
                        ? "PLT"
                        : "NEG"}
              </span>
              {track}
            </button>
          ))}
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Curadoria em destaque</span>
            <h2>Oportunidades para você</h2>
          </div>
          <button type="button" onClick={() => props.setTab("explore")}>
            Ver catálogo completo
          </button>
        </div>
        <div className="opportunity-grid home-opportunity-grid">
          {featured.map((item) => (
            <OpportunityCard
              key={item.id}
              item={item}
              saved={props.state.savedCourses.includes(item.id)}
              onOpen={() => props.openOpportunity(item.id)}
              onToggleSave={() => props.toggleSave(item.id)}
            />
          ))}
        </div>
      </section>
      <section className="home-section home-guides">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Aplicação prática</span>
            <h2>Guias para apoiar sua jornada</h2>
          </div>
          <button type="button" onClick={() => props.setTab("materials")}>
            Ver todos
          </button>
        </div>
        <div>
          {guides.slice(0, 2).map((guide) => (
            <button
              key={guide.id}
              type="button"
              onClick={() => props.openGuide(guide.id)}
            >
              <span aria-hidden="true">{guide.emoji}</span>
              <span>
                <strong>{guide.title}</strong>
                <small>
                  {guide.category} · {guide.time}
                </small>
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="home-section">
        <ProjectTeam />
      </section>
    </div>
  )
}
