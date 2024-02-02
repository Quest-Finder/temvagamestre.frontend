import { filterOutItemWithoutData } from '@/helpers/playerProfileSection/filterOutItemWithoutData'
import { MockGraphLegend } from './mock'
import { reorderListInDescendingOrder } from '@/helpers/playerProfileSection/reorderListInDescendingOrder'
import { PlayerProfile } from '.'
import { Card } from '@/components/ui/card'

export function PlayerProfileSection() {
  const filteredGraphData = reorderListInDescendingOrder(
    filterOutItemWithoutData(MockGraphLegend),
  )

  return (
    <>
      <PlayerProfile.Root>
        <PlayerProfile.Title title='Perfil do jogador' />
        <Card className='flex max-w-max items-center gap-4 px-4 py-6'>
          <PlayerProfile.Graph graphData={filteredGraphData} />
          <PlayerProfile.Legend graphData={filteredGraphData} />
        </Card>
      </PlayerProfile.Root>
    </>
  )
}
