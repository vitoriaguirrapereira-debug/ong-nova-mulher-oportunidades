import type { AppState, Screen } from '../App'

type Props = { navigate: (s: Screen) => void; state: AppState; toggleSave: (id: string) => void; setTab: (t: AppState['activeTab']) => void }

const NOTIFS = [
  { icon: '🔔', title: 'Nova oficina disponível', desc: 'Oficina de Currículo começa em 5 dias. Garanta sua vaga!', time: 'Há 2h', read: false, action: 'workshop-detail' },
  { icon: '📊', title: 'Continue seu curso', desc: 'Você está a 60% de concluir o Excel para Iniciantes.', time: 'Hoje', read: false, action: 'course-active' },
  { icon: '✨', title: 'Novidades para você', desc: '3 novas oportunidades em Tecnologia foram adicionadas.', time: 'Ontem', read: true, action: 'explore' },
  { icon: '🎉', title: 'Parabéns!', desc: 'Você concluiu o curso Comunicação no Trabalho.', time: '2 dias', read: true, action: 'course-completed' },
  { icon: '📅', title: 'Lembrete de inscrição', desc: 'As inscrições para a Oficina de Finanças fecham amanhã.', time: '3 dias', read: true, action: 'workshop-detail' },
]

export default function NotificationsScreen({ navigate }: Props) {
  return (
    <div style={{ background: '#f8fafc', minHeight: 780 }}>
      <div style={{ background: 'white', padding: '20px 24px 16px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={() => navigate('home')} style={{ background: '#f1f5f9', border: 'none', borderRadius: 10, padding: 10, cursor: 'pointer' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round"><polyline points="15,18 9,12 15,6"/></svg>
        </button>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 20, fontWeight: 800, color: '#0f172a', flex: 1 }}>Notificações</h2>
        <button style={{ background: 'none', border: 'none', color: '#0d9488', fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Marcar lidas</button>
      </div>

      <div style={{ padding: '16px 24px' }}>
        {NOTIFS.map((n, i) => (
          <div
            key={i}
            onClick={() => navigate(n.action as Screen)}
            style={{
              background: n.read ? 'white' : '#f0fdf9',
              borderRadius: 16, padding: '14px 16px', marginBottom: 10,
              border: n.read ? '1.5px solid #e2e8f0' : '1.5px solid #99f6dc',
              display: 'flex', gap: 14, alignItems: 'flex-start', cursor: 'pointer',
            }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 12, background: n.read ? '#f1f5f9' : '#ccfbee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
              {n.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 16, color: '#0f172a', lineHeight: 1.3 }}>{n.title}</div>
                {!n.read && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0d9488', flexShrink: 0, marginTop: 3 }}/>}
              </div>
              <div style={{ fontSize: 16, color: '#475569', fontFamily: 'Inter, sans-serif', lineHeight: 1.5, marginBottom: 4 }}>{n.desc}</div>
              <div style={{ fontSize: 14, color: '#94a3b8' }}>{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
