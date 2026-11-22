import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import type { AppState, Screen } from "../App"

type Props = {
  screen: Screen
  setTab: (tab: AppState["activeTab"]) => void
  onFinish: () => void
}

type TargetRect = {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

type TutorialStep = {
  screen: AppState["activeTab"]
  target?: string
  eyebrow: string
  title: string
  description: string
  action: string
  icon: ReactNode
}

const TUTORIAL_PROGRESS_KEY =
  "conectando-oportunidades:tutorial-guiado-progresso-v2"

const steps: TutorialStep[] = [
  {
    screen: "home",
    eyebrow: "Boas-vindas",
    title: "Vamos conhecer o Conectando Oportunidades?",
    description:
      "Este guia acompanha você pelas áreas principais. São poucos passos e você pode voltar ou sair quando quiser.",
    action: "Começar o tour",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    screen: "home",
    target: "home-search",
    eyebrow: "Início",
    title: "Comece pelo que você precisa",
    description:
      "A busca leva direto a cursos e guias práticos. Você também pode explorar por área e retomar uma atividade em andamento nesta tela.",
    action: "Ir para Explorar",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    ),
  },
  {
    screen: "explore",
    target: "explore-tools",
    eyebrow: "Explorar",
    title: "Refine sem complicação",
    description:
      "Digite uma palavra, escolha uma categoria ou abra os filtros. A lista muda para mostrar apenas oportunidades que combinam com a sua busca.",
    action: "Ver um card",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16M7 12h10M10 18h4" />
      </svg>
    ),
  },
  {
    screen: "explore",
    target: "first-opportunity-card",
    eyebrow: "Oportunidades",
    title: "Veja detalhes e salve para depois",
    description:
      "Cada card mostra formato, duração e nível. Abra para conhecer todos os detalhes, use o marcador para salvar ou acesse o site oficial.",
    action: "Ir para Minha Jornada",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    screen: "journey",
    target: "journey-progress",
    eyebrow: "Minha Jornada",
    title: "Acompanhe cada conquista",
    description:
      "Aqui ficam as oportunidades salvas, os cursos em andamento, o progresso das aulas e os certificados já conquistados.",
    action: "Conhecer Materiais",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
      </svg>
    ),
  },
  {
    screen: "materials",
    target: "materials-featured",
    eyebrow: "Materiais",
    title: "Conte com orientação prática",
    description:
      "Encontre guias curtos para montar currículo, preparar entrevistas e organizar sua busca por trabalho.",
    action: "Ver meu Perfil",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
  },
  {
    screen: "profile",
    target: "profile-summary",
    eyebrow: "Perfil",
    title: "Tudo pronto para seguir",
    description:
      "No Perfil você consulta seus interesses, atalhos, notificações e suporte. Use a navegação para voltar a qualquer área quando quiser.",
    action: "Concluir tutorial",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  },
]

function getInitialStep() {
  try {
    const savedStep = Number(window.localStorage.getItem(TUTORIAL_PROGRESS_KEY))
    return Number.isInteger(savedStep) &&
      savedStep >= 0 &&
      savedStep < steps.length
      ? savedStep
      : 0
  } catch {
    return 0
  }
}

function findVisibleTarget(name?: string) {
  if (!name) return null

  return Array.from(
    document.querySelectorAll<HTMLElement>(`[data-tutorial="${name}"]`),
  ).find((element) => {
    const rect = element.getBoundingClientRect()
    return rect.width > 0 && rect.height > 0
  })
}

export default function FirstVisitTutorial({
  screen,
  setTab,
  onFinish,
}: Props) {
  const [step, setStep] = useState(getInitialStep)
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null)
  const actionRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLElement>(null)
  const currentStep = steps[step]
  const isLastStep = step === steps.length - 1

  const completeTutorial = () => {
    try {
      window.localStorage.removeItem(TUTORIAL_PROGRESS_KEY)
    } catch {
      // Completion still works when storage is unavailable.
    }
    onFinish()
  }

  const moveToStep = (nextStep: number) => {
    const boundedStep = Math.max(0, Math.min(nextStep, steps.length - 1))
    setStep(boundedStep)
    setTab(steps[boundedStep].screen)
  }

  const advance = () => {
    if (isLastStep) {
      completeTutorial()
      return
    }
    moveToStep(step + 1)
  }

  const goBack = () => moveToStep(step - 1)

  useEffect(() => {
    try {
      window.localStorage.setItem(TUTORIAL_PROGRESS_KEY, String(step))
    } catch {
      // Progress persistence is optional when storage is unavailable.
    }
  }, [step])

  useEffect(() => {
    if (screen !== currentStep.screen) setTab(currentStep.screen)
  }, [currentStep.screen, screen, setTab])

  useEffect(() => {
    actionRef.current?.focus()
  }, [step])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") completeTutorial()
      if (event.key === "ArrowRight") advance()
      if (event.key === "ArrowLeft" && step > 0) goBack()
      if (event.key === "Tab") {
        const focusableElements = Array.from(
          popoverRef.current?.querySelectorAll<HTMLElement>("button") ?? [],
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  })

  useLayoutEffect(() => {
    let frame = 0

    const updateTarget = () => {
      const target = findVisibleTarget(currentStep.target)

      if (!target) {
        setTargetRect(null)
        return
      }

      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      })

      frame = window.requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect()
        const padding = 8
        setTargetRect({
          top: Math.max(8, rect.top - padding),
          right: Math.min(window.innerWidth - 8, rect.right + padding),
          bottom: Math.min(window.innerHeight - 8, rect.bottom + padding),
          left: Math.max(8, rect.left - padding),
          width: rect.width + padding * 2,
          height: rect.height + padding * 2,
        })
      })
    }

    updateTarget()
    window.addEventListener("resize", updateTarget)
    window.addEventListener("scroll", updateTarget, true)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", updateTarget)
      window.removeEventListener("scroll", updateTarget, true)
    }
  }, [currentStep.target, screen, step])

  const popoverStyle = targetRect
    ? {
        left: Math.min(
          Math.max(16, targetRect.left + targetRect.width / 2 - 180),
          window.innerWidth - 376,
        ),
        top:
          targetRect.bottom + 330 < window.innerHeight
            ? targetRect.bottom + 14
            : Math.max(16, targetRect.top - 314),
      }
    : undefined

  return (
    <div
      className={`first-visit-tutorial ${
        targetRect ? "has-target" : "is-centered"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="first-visit-title"
      aria-describedby="first-visit-description"
    >
      {targetRect ? (
        <>
          <div
            className="tutorial-shade"
            style={{ top: 0, right: 0, height: targetRect.top, left: 0 }}
          />
          <div
            className="tutorial-shade"
            style={{
              top: targetRect.top,
              width: targetRect.left,
              bottom: window.innerHeight - targetRect.bottom,
              left: 0,
            }}
          />
          <div
            className="tutorial-shade"
            style={{
              top: targetRect.top,
              right: 0,
              bottom: window.innerHeight - targetRect.bottom,
              left: targetRect.right,
            }}
          />
          <div
            className="tutorial-shade"
            style={{
              top: targetRect.bottom,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
          <div
            className="tutorial-focus-ring"
            style={{
              top: targetRect.top,
              left: targetRect.left,
              width: targetRect.width,
              height: targetRect.height,
            }}
          />
        </>
      ) : (
        <div className="tutorial-shade tutorial-shade--full" />
      )}

      <section
        ref={popoverRef}
        className="tutorial-popover"
        style={popoverStyle}
        aria-live="polite"
      >
        <div className="tutorial-popover__top">
          <div
            className="tutorial-progress"
            aria-label={`Passo ${step + 1} de ${steps.length}`}
          >
            {steps.map((_, index) => (
              <span
                key={index}
                className={
                  index === step ? "is-current" : index < step ? "is-done" : ""
                }
              />
            ))}
          </div>
          <button
            type="button"
            className="tutorial-skip"
            onClick={completeTutorial}
          >
            Pular tutorial
          </button>
        </div>

        <div className="tutorial-popover__content">
          <div className="tutorial-icon">{currentStep.icon}</div>
          <div>
            <span className="tutorial-eyebrow">{currentStep.eyebrow}</span>
            <h2 id="first-visit-title">{currentStep.title}</h2>
            <p id="first-visit-description">{currentStep.description}</p>
          </div>
        </div>

        <div className="tutorial-actions">
          {step > 0 && (
            <button
              type="button"
              className="tutorial-button tutorial-button--secondary"
              onClick={goBack}
            >
              Voltar
            </button>
          )}
          <button
            ref={actionRef}
            type="button"
            className="tutorial-button tutorial-button--primary"
            onClick={advance}
          >
            {currentStep.action}
            {!isLastStep && (
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </button>
        </div>

        <span className="tutorial-keyboard-hint">
          Use ← → para navegar e Esc para sair
        </span>
      </section>
    </div>
  )
}
