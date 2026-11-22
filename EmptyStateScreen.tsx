import type { AppState, Screen } from '../App'

type Props = { navigate: (s: Screen) => void; state: AppState; toggleSave: (id: string) => void; setTab: (t: AppState['activeTab']) => void }

export default function EmptyStateScreen({ navigate, setTab }: Props) {
  return (
    <div style={{ background: '#f8fafc', minHeight: 780 }}>
      <div style={{ background: 'white', padding: '20px 24px 16px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={() => navigate('search-results')} style={{ background: '#f1f5f9', border: 'none', borderRadius: 10, padding: 10, cursor: 'pointer' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round"><polyline points="15,18 9,12 15,6"/></svg>
        </button>
        <div style={{ flex: 1, background: '#f8fafc', borderRadius: 12, padding: '10px 14px', display: 'flex', gap: 10, alignItems: 'center', border: '1.5px solid #e2e8f0' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span style={{ fontSize: 16, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>Curso de confeitaria presencial</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, fontSize: 56 }}>
          🔍
        </div>

        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 10, lineHeight: 1.3 }}>
          Nenhum resultado encontrado
        </h2>

        <p style={{ fontSize: 16, color: '#64748b', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, marginBottom: 32, maxWidth: 280 }}>
          Não encontramos oportunidades com esse filtro agora. Tente outros termos ou explore categorias diferentes.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
          <button
            onClick={() => navigate('filters')}
            style={{ padding: '14px', borderRadius: 14, border: '1.5px solid #0d9488', background: 'white', color: '#0d9488', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 17, cursor: 'pointer' }}
          >
            Ajustar filtros
          </button>
          <button
            onClick={() => setTab('explore')}
            style={{ padding: '14px', borderRadius: 14, border: 'none', background: '#0d9488', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 17, cursor: 'pointer' }}
          >
            Explorar tudo
          </button>
        </div>

        <div style={{ marginTop: 32, padding: '16px 20px', background: '#fefce8', borderRadius: 14, border: '1px solid #fef08a', textAlign: 'left' }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#d97706', marginBottom: 6 }}>Sugestão</div>
          <p style={{ fontSize: 16, color: '#92400e', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
            Não encontrou o que procurava? Nossos materiais de apoio podem ajudar enquanto novas oportunidades chegam.
          </p>
          <button onClick={() => setTab('materials')} style={{ marginTop: 8, background: 'none', border: 'none', color: '#d97706', fontSize: 16, fontWeight: 600, cursor: 'pointer', padding: 0, fontFamily: 'Inter, sans-serif' }}>
            Ver materiais →
          </button>
        </div>
      </div>
    </div>
  )
}
