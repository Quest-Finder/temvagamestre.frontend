import { ArrowBack } from '@/components/icons/ArrowBack'
import { Button } from '@/components/ui/button'
import { Multistep } from '@/components/ui/multistep'

const formTextArray = [
  'Dados do Jogador',
  'Redes Sociais',
  'Sobre Você',
  'Local',
  'Estilo de Jogo',
]

interface FormlayoutProps {
  children: React.ReactNode
}

export function FormLayout({ children }: FormlayoutProps) {
  return (
    <main className='space-y-8 sm:m-10'>
      <div className='mx-auto max-w-[880px]'>
        <Button
          variant='ghost'
          className='gap-2.5 text-neutral-400'
        >
          <ArrowBack />
          Voltar
        </Button>
      </div>
      <Multistep
        size={5}
        arrayText={formTextArray}
      />
      {children}
    </main>
  )
}
