export const projectTeam = [
  { name: "Ana Caroline Almeida Clemente" },
  { name: "Giovanna da Silva Saraiva" },
  { name: "Giovanna Farias de Carvalho Menezes" },
  { name: "Lara Siqueira Lopes" },
  { name: "Laryssa Ellen Viana" },
  { name: "Vitória Guirra Pereira" },
]

type Props = {
  compact?: boolean
}

export default function ProjectTeam({ compact = false }: Props) {
  return (
    <section className={compact ? "project-team project-team--compact" : "project-team"}>
      {!compact && <span className="eyebrow">Quem tornou esta iniciativa possível</span>}
      <h2>{compact ? "Equipe do Projeto" : "Sobre o Projeto e Equipe"}</h2>
      {!compact && (
        <p>
          Projeto de extensão da USP desenvolvido em parceria com a ONG Nova
          Mulher.
        </p>
      )}
      <ul>
        {projectTeam.map((member) => (
          <li key={member.name}>
            <strong>{member.name}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
