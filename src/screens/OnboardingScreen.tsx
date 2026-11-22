import { useState } from 'react'
import type { AppState, Screen } from '../App'

type Props = { navigate: (s: Screen) => void; state: AppState; toggleSave: (id: string) => void; setTab: (t: AppState['activeTab']) => void }

const interests = ['Comunicação', 'Tecnologia', 'Finanças', 'Empreendedorismo', 'Marketing', 'Administração', 'Educação', 'Outro']
const goals = ['Aprender algo novo', 'Melhorar meu currículo', 'Me preparar para uma oportunidade', 'Começar em uma nova área', 'Gerar renda']

export default function OnboardingScreen({ navigate }: Props) {
  const [step, setStep] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [selectedGoal, setSelectedGoal] = useState('')

  const toggleInterest = (i: string) => {
    setSelectedInterests(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])
  }

  const canNext = step === 0 ? selectedInterests.length > 0 : selectedGoal !== ''

  const steps = [
    {
      title: 'O que você quer aprender?',
      subtitle: 'Selecione as áreas que mais combinam com você. Pode escolher mais de uma.',
      content: (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
          {interests.map(i => (
            <button
              key={i}
              onClick={() => toggleInterest(i)}
              style={{
                padding: '10px 16px',
                borderRadius: 50,
                border: selectedInterests.includes(i) ? 'none' : '1.5px solid #e2e8f0',
                background: selectedInterests.includes(i) ? '#0d9488' : 'white',
                color: selectedInterests.includes(i) ? 'white' : '#334155',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 16,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {i}
            </button>
          ))}
        </div>
      ),
    },
    {
      title: 'O que você procura agora?',
      subtitle: 'Isso nos ajuda a mostrar oportunidades que fazem sentido para o seu momento.',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
          {goals.map(g => (
            <button
              key={g}
              onClick={() => setSelectedGoal(g)}
              style={{
                padding: '14px 18px',
                borderRadius: 14,
                border: selectedGoal === g ? 'none' : '1.5px solid #e2e8f0',
                background: selectedGoal === g ? '#0d9488' : 'white',
                color: selectedGoal === g ? 'white' : '#334155',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 16,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s',
              }}
            >
              {g}
            </button>
          ))}
        </div>
      ),
    },
  ]

  return (
    <div style={{ minHeight: 780, background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '28px 24px 0', background: 'white', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          {step > 0 && (
            <button onClick={() => setStep(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round"><polyline points="15,18 9,12 15,6"/></svg>
            </button>
          )}
          <div style={{ flex: 1, display: 'flex', gap: 6 }}>
            {[0, 1].map(i => (
              <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: i <= step ? '#0d9488' : '#e2e8f0', transition: 'background 0.3s' }}/>
            ))}
          </div>
          <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
            Pular
          </button>
        </div>

        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 24, fontWeight: 700, color: '#0f172a', marginBottom: 8, lineHeight: 1.3 }}>
          {steps[step].title}
        </h2>
        <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
          {steps[step].subtitle}
        </p>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '24px 24px', overflowY: 'auto' }}>
        {steps[step].content}
      </div>

      {/* Footer */}
      <div style={{ padding: '16px 24px 32px', background: 'white', borderTop: '1px solid #f1f5f9' }}>
        <button
          onClick={() => step < 1 ? setStep(1) : navigate('home')}
          disabled={!canNext}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: 14,
            border: 'none',
            background: canNext ? '#0d9488' : '#e2e8f0',
            color: canNext ? 'white' : '#94a3b8',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            fontSize: 16,
            cursor: canNext ? 'pointer' : 'not-allowed',
            transition: 'all 0.15s',
          }}
        >
          {step < 1 ? 'Continuar' : 'Ver minhas oportunidades'}
        </button>
      </div>
    </div>
  )
}
