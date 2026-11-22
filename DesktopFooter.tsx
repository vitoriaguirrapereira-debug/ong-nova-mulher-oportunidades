import type { AppState } from "../App"
import logoUrl from "../assets/logo.png"
import ProjectTeam from "./ProjectTeam"

type Props = {
  setTab: (tab: AppState["activeTab"]) => void
  onSafety: () => void
}

export default function DesktopFooter({ setTab, onSafety }: Props) {
  return (
    <footer className="desktop-footer">
      <div className="desktop-footer__grid">
        <div className="desktop-footer__about">
          <img
            src={logoUrl}
            alt="Conectando Oportunidades"
            width="244"
            height="76"
          />
          <p>
            Um projeto de extensão da USP em parceria com a ONG Nova Mulher para ampliar o acesso gratuito à
            capacitação, ao desenvolvimento profissional e à autonomia.
          </p>
        </div>

        <div>
          <h2>Links rápidos</h2>
          <nav aria-label="Links do rodapé">
            <button type="button" onClick={() => setTab("explore")}>
              Explorar oportunidades
            </button>
            <button type="button" onClick={() => setTab("journey")}>
              Minha Jornada
            </button>
            <button type="button" onClick={() => setTab("materials")}>
              Materiais de apoio
            </button>
          </nav>
        </div>

        <div>
          <h2>Fale com a ONG Nova Mulher</h2>
          <a
            href="https://linktr.ee/ongnovamulher"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redes sociais e canais oficiais
          </a>
          <h2 className="footer-help-title">Precisa de ajuda?</h2>
          <p>
            Em situação de emergência, ligue para o <strong>190</strong>.
          </p>
          <button type="button" onClick={onSafety}>
            Abrir ajuda e segurança
          </button>
          <p>Atendimento gratuito, seguro e disponível 24 horas.</p>
        </div>
        <ProjectTeam compact />
      </div>
      <div className="desktop-footer__bottom">
        <span>© 2026 ONG Nova Mulher</span>
        <span>Conectando pessoas a novos caminhos.</span>
      </div>
    </footer>
  )
}
