import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useChangeStepNavigation() {
  const router = usePathname()

  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    switch (router) {
      case '/cadastro/dados-jogador':
        setCurrentStep(1)
        break
      case '/cadastro/redes-sociais':
        setCurrentStep(2)
        break
      case '/cadastro/sobre-voce':
        setCurrentStep(3)
        break
      case '/cadastro/local':
        setCurrentStep(4)
        break
      case '/cadastro/estilos-de-jogo':
        setCurrentStep(5)
        break
      case '/cadastro/perfil-do-jogador':
        setCurrentStep(6)
        break
      case '/cadastro/sucesso':
        setCurrentStep(7)
        break

      default:
        break
    }
  }, [router])

  return { currentStep }
}
