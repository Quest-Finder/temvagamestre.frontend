import { Button } from '@/components/ui/button'
import { PlayerFormConclusion } from '.'
import { ConclusionBadge } from './components/ConclusionBadge'

export function FormConclusion() {
  return (
    <PlayerFormConclusion.Root>
      <ConclusionBadge />

      <PlayerFormConclusion.Title>
        Parabéns, jogador!
      </PlayerFormConclusion.Title>

      <PlayerFormConclusion.Text>
        🎉 Você desbloqueou a Insígnia do Destino!
        <br />
        Este é um símbolo de honra entre os contadores de histórias e mestres do
        jogo. Use-a com orgulho e mostre ao mundo o poder da sua imaginação.
      </PlayerFormConclusion.Text>

      <Button className='mt-4 h-full max-h-14 w-full max-w-[214px] text-base'>
        Agendar uma Partida
      </Button>

      <PlayerFormConclusion.Text>
        Seu cadastro está completo, descubra novas partidas, encontre jogadores
      </PlayerFormConclusion.Text>
    </PlayerFormConclusion.Root>
  )
}
