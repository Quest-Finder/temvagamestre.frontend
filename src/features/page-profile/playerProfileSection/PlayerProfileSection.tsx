import { Card } from '@/components/ui/card'
import { MockGraphLegend } from './mock'
import { PlayerProfile } from '.'
import { filteredGraphData } from './helpers/filterGraphData'

export function PlayerProfileSection() {
  return (
    <PlayerProfile.Root>
      <PlayerProfile.Title title='Perfil do jogador' />
      <Card className='flex max-w-max items-center gap-4 border-neutral-100 px-4 py-6'>
        <PlayerProfile.Graph graphData={filteredGraphData(MockGraphLegend)} />
        <PlayerProfile.Legend graphData={filteredGraphData(MockGraphLegend)} />
      </Card>
    </PlayerProfile.Root>
  )
}
