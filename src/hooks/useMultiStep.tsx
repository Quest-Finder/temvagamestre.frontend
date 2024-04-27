'use client'

import { Multistep } from '@/components/ui/multistep'
import { useChangeStepNavigation } from '@/features/register-player/hooks/useChangeStepNavigation'

const formTextArray = [
  'Dados do Jogador',
  'Redes Sociais',
  'Sobre Você',
  'Local',
  'Estilo de Jogo',
  'Perfil do jogador',
]

export function MultiStepRegisterForm() {
  const { currentStep } = useChangeStepNavigation()

  return (
    <Multistep
      size={6}
      currentStep={currentStep}
      arrayText={formTextArray}
    />
  )
}
