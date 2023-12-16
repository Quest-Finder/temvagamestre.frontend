import { PlayerGraph } from './PlayerGraph'
import { SectionTitle } from './SectionTitle'
import { LegendItem } from './LegendItem'
import { Card } from '../ui/card'
import SkullIcon from './Icons/SkullIcon'
import UnionIcon from './Icons/UnionIcon'
import AngryBearIcon from './Icons/AngryBearIcon'
// import { MockGraphLegend } from './mock'

export function PlayerProfileSection() {
  return (
    <section>
      <SectionTitle title='Perfil do jogador' />
      <Card className='flex w-max items-center gap-4 px-4 py-6'>
        <PlayerGraph />
        <div className='flex flex-col gap-6'>
          <LegendItem
            legendType='Matar, Pilhar e Destruir'
            icon={SkullIcon}
          />
          <LegendItem
            legendType='Interpretação'
            icon={UnionIcon}
          />
          <LegendItem
            legendType='Dungeon'
            icon={AngryBearIcon}
          />
        </div>
      </Card>
    </section>
  )
}
