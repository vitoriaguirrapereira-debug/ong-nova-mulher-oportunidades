import { useState } from "react"
import { regions, supportLocations, type Region, type SupportLocation } from "../data/support"

const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

function LocationCard({ location }: { location: SupportLocation }) {
  return (
    <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5">
      {location.creas && <span className="text-xs font-semibold text-teal-800">Rede CREAS · Assistência social</span>}
      <h3 className="mt-1 mb-3 font-heading text-lg font-semibold text-slate-900">{location.name}</h3>
      <p className="text-sm leading-relaxed text-slate-700">{location.address}</p>
      <p className="mt-3 text-sm text-slate-600"><strong>Horário:</strong> {location.hours ?? "Não informado. Consulte o serviço antes de ir."}</p>
      {location.note && <p className="mt-3 text-sm leading-relaxed text-slate-700">{location.note}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {location.phones?.map((phone) => (
          <a key={phone} href={`tel:+55${phone.replace(/\D/g, "")}`}
            className="inline-flex min-h-11 items-center rounded-xl bg-teal-50 px-3 text-sm font-semibold text-teal-900 focus-visible:ring-2">
            {phone}
          </a>
        ))}
      </div>
      {location.email && <a className="mt-2 inline-flex min-h-11 items-center break-all text-sm text-teal-800 underline" href={`mailto:${location.email}`}>{location.email}</a>}
    </article>
  )
}

export default function SupportScreen() {
  const [region, setRegion] = useState<Region | "Todas">("Todas")
  const [query, setQuery] = useState("")
  const groups = regions
    .filter((item) => region === "Todas" || region === item)
    .map((item) => ({
      region: item,
      locations: supportLocations[item].filter((location) =>
        normalize(`${location.name} ${location.address}`).includes(normalize(query.trim()))),
    }))
    .filter((group) => group.locations.length > 0)
  const count = groups.reduce((total, group) => total + group.locations.length, 0)

  return (
    <div className="page-surface overflow-x-hidden">
      <header className="border-b border-slate-200 bg-white p-6 lg:px-12">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Sua rede de apoio</span>
        <h1 className="mt-2 font-heading text-3xl font-bold text-slate-900">Onde Buscar Ajuda</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">Você não está sozinha. Encontre acolhimento, orientação e proteção em São Paulo.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <a href="tel:180" className="rounded-2xl bg-teal-800 p-4 text-white focus-visible:ring-2">
            <strong className="block text-xl">Ligue 180</strong>
            <span className="text-sm">Central de Atendimento à Mulher · 24 horas</span>
          </a>
          <a href="tel:190" className="rounded-2xl bg-rose-800 p-4 text-white focus-visible:ring-2">
            <strong className="block text-xl">Ligue 190</strong>
            <span className="text-sm">Emergência Policial · Se houver risco imediato</span>
          </a>
        </div>
      </header>
      <div className="p-6 lg:px-12">
        <label className="block text-sm font-semibold text-slate-700">
          Buscar por bairro ou nome
          <input aria-label="Buscar por bairro ou nome" type="search" value={query} onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex.: Itaquera, Perus, Casa da Mulher..."
            className="mt-2 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm focus-visible:ring-2" />
        </label>
        <fieldset className="mt-5">
          <legend className="mb-2 text-sm font-semibold text-slate-700">Região de São Paulo</legend>
          <div className="flex flex-wrap gap-2">
            {(["Todas", ...regions] as const).map((item) => (
              <button key={item} type="button" aria-pressed={region === item} onClick={() => setRegion(item)}
                className={`min-h-11 rounded-full border px-4 text-sm font-semibold focus-visible:ring-2 ${region === item ? "border-teal-800 bg-teal-800 text-white" : "border-slate-300 bg-white text-slate-700"}`}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <p className="mt-5 text-sm text-slate-600">Endereços e horários conforme a relação fornecida ao projeto; podem mudar. Quando possível, confirme antes de ir. As entradas por região foram preservadas, inclusive serviços no mesmo endereço.</p>
        <p role="status" className="mt-4 text-sm font-semibold text-teal-900">{count} locais encontrados</p>
        {groups.map((group) => (
          <section key={group.region} className="mt-7" aria-label={`Região ${group.region}`}>
            <h2 className="mb-4 font-heading text-2xl font-semibold text-slate-900">Região {group.region}</h2>
            {group.locations.some((location) => location.creas) && (
              <p className="mb-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-950">A Rede CREAS — Centro de Referência Especializado da Assistência Social — é uma alternativa caso não haja serviço especializado próximo.</p>
            )}
            <div className="grid items-start gap-4 md:grid-cols-2">
              {group.locations.map((location) => <LocationCard key={location.name} location={location} />)}
            </div>
          </section>
        ))}
        {!count && <div className="mt-6 rounded-2xl bg-white p-6">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Não encontramos esse local</h2>
          <p className="mt-2 text-sm text-slate-600">Tente outro nome ou selecione todas as regiões. Você também pode ligar 180 para orientação.</p>
          <button className="mt-4 min-h-11 rounded-xl bg-teal-800 px-4 text-sm font-semibold text-white" onClick={() => { setQuery(""); setRegion("Todas") }}>Limpar busca e filtros</button>
        </div>}
      </div>
    </div>
  )
}
