import { Card } from '@/components/ui/card'
import { filterOutItemWithoutData } from './helpers/filterOutItemWithoutData'
import { reorderListInDescendingOrder } from './helpers/reorderListInDescendingOrder'
import { MockGraphLegend } from './mock'
import { PlayerProfile } from '.'

export function PlayerProfileSection() {
  const filteredGraphData = reorderListInDescendingOrder(
    filterOutItemWithoutData(MockGraphLegend),
  )

  return (
    <PlayerProfile.Root>
      <PlayerProfile.Title title='Perfil do jogador' />
      <Card className='flex max-w-max items-center gap-4 px-4 py-6'>
        <PlayerProfile.Graph graphData={filteredGraphData} />
        <PlayerProfile.Legend graphData={filteredGraphData} />
      </Card>
    </PlayerProfile.Root>
  )
}
