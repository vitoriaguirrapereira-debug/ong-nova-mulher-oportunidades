import { useState } from "react"
import ProjectTeam from "../components/ProjectTeam"
import type { ScreenProps, UserProfile } from "../App"
import { tracks } from "../data/opportunities"

const ONG_URL = "https://linktr.ee/ongnovamulher"

export default function ProfileScreen({
  navigate,
  state,
  updateProfile,
}: ScreenProps) {
  const [draft, setDraft] = useState<UserProfile>(state.profile)
  const [saved, setSaved] = useState(false)

  const save = () => {
    updateProfile(draft)
    setSaved(true)
  }

  return (
    <div className="profile-page page-surface">
      <header data-tutorial="profile-summary">
        <span aria-hidden="true">NM</span>
        <div>
          <small>Seu espaço</small>
          <h1>{state.profile.name || "Bem-vinda à sua jornada"}</h1>
          <p>Seus dados ficam somente neste navegador.</p>
        </div>
      </header>
      <main>
        <section className="profile-form">
          <span className="eyebrow">Perfil local</span>
          <h2>Conte um pouco sobre você</h2>
          <label>
            Como gostaria de ser chamada?
            <input
              value={draft.name}
              onChange={(event) =>
                setDraft({ ...draft, name: event.target.value })
              }
              placeholder="Seu nome"
            />
          </label>
          <label>
            Qual é seu objetivo agora?
            <input
              value={draft.goal}
              onChange={(event) =>
                setDraft({ ...draft, goal: event.target.value })
              }
              placeholder="Ex.: organizar meu negócio"
            />
          </label>
          <fieldset>
            <legend>Interesses</legend>
            <div className="filter-chips">
              {tracks.map((track) => {
                const active = draft.interests.includes(track)
                return (
                  <button
                    key={track}
                    type="button"
                    className={active ? "is-active" : ""}
                    onClick={() =>
                      setDraft({
                        ...draft,
                        interests: active
                          ? draft.interests.filter((item) => item !== track)
                          : [...draft.interests, track],
                      })
                    }
                  >
                    {track}
                  </button>
                )
              })}
            </div>
          </fieldset>
          <button type="button" className="primary-action" onClick={save}>
            {saved ? "Dados salvos neste navegador" : "Salvar meu perfil"}
          </button>
        </section>
        <section className="profile-shortcuts">
          <button type="button" onClick={() => navigate("saved")}>
            <strong>{state.savedCourses.length}</strong>
            <span>Oportunidades salvas</span>
          </button>
          <button type="button" onClick={() => navigate("journey")}>
            <strong>{state.activeCourseIds.length}</strong>
            <span>Em andamento</span>
          </button>
          <button type="button" onClick={() => navigate("journey")}>
            <strong>{state.completedCourseIds.length}</strong>
            <span>Concluídos</span>
          </button>
        </section>
        <section className="ong-support-card">
          <span className="eyebrow">Canal oficial</span>
          <h2>Fale com a ONG Nova Mulher</h2>
          <p>
            Encontre redes sociais, contatos e informações atualizadas da ONG.
          </p>
          <a href={ONG_URL} target="_blank" rel="noopener noreferrer">
            Acessar canais oficiais
          </a>
        </section>
        <ProjectTeam />
      </main>
    </div>
  )
}
