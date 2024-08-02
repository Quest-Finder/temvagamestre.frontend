import { Button } from '@/components/ui/button'
import { PlayerFormConclusion } from '.'
import { ConclusionBadge } from './components/ConclusionBadge'
import * as FormText from '../FormText.json'

export function FormConclusion() {
  return (
    <PlayerFormConclusion.Root>
      <ConclusionBadge />

      <PlayerFormConclusion.Title>
        {FormText.conclusion.title}
      </PlayerFormConclusion.Title>

      <PlayerFormConclusion.Text>
        {FormText.conclusion.textTitle}
        <br />
        {FormText.conclusion.textContent}
      </PlayerFormConclusion.Text>

      <Button className='mt-4 h-full max-h-14 w-full max-w-[13.375rem] text-base'>
        Agendar uma Partida
      </Button>

      <PlayerFormConclusion.Text>
        {FormText.conclusion.additionalText}
      </PlayerFormConclusion.Text>
    </PlayerFormConclusion.Root>
  )
}
