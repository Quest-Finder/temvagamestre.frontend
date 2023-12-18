import { PlayerGraph } from './PlayerGraph'
import { SectionTitle } from './SectionTitle'
import { GraphLegend } from './GraphLegend'
import { Card } from '../ui/card'
import { MockGraphLegend } from './mock'

export function PlayerProfileSection() {
  return (
    <section>
      <SectionTitle title='Perfil do jogador' />
      <Card className='flex w-max items-center gap-4 px-4 py-6'>
        <PlayerGraph graphData={MockGraphLegend} />
        <GraphLegend graphData={MockGraphLegend} />
      </Card>
    </section>
  )
}
