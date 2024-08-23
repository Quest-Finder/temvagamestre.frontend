import { Button } from '@/components/ui/button'

import FormText from '../FormText.json'
import { PlayerFormConclusion } from '.'
import { ConclusionBadge } from './components/ConclusionBadge'

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

      <Button size='lg'>Agendar uma Partida</Button>

      <PlayerFormConclusion.Text>
        {FormText.conclusion.additionalText}
      </PlayerFormConclusion.Text>
    </PlayerFormConclusion.Root>
  )
}
