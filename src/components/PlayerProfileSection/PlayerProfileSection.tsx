import { filterOutItemWithoutData } from '@/helpers/playerProfileSection/filterOutItemWithoutData'
import { reorderListInDescendingOrder } from '@/helpers/playerProfileSection/reorderListInDescendingOrder'
import { PlayerGraph } from './PlayerGraph'
import { SectionTitle } from './SectionTitle'
import { GraphLegend } from './GraphLegend'
import { Card } from '../ui/card'
import { MockGraphLegend } from './mock'

export function PlayerProfileSection() {
  const filteredGraphData = reorderListInDescendingOrder(
    filterOutItemWithoutData(MockGraphLegend),
  )

  return (
    <section>
      <SectionTitle title='Perfil do jogador' />
      <Card className='flex w-max items-center gap-4 px-4 py-6'>
        {filteredGraphData.length !== 0 && Array.isArray(filteredGraphData) ? (
          <>
            <PlayerGraph graphData={filteredGraphData} />
            <GraphLegend graphData={filteredGraphData} />
          </>
        ) : (
          <p>Não foi detectado nenhuma aventura cadastrada</p>
        )}
      </Card>
    </section>
  )
}
