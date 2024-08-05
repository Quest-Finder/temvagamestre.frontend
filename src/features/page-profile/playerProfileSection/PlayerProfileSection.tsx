'use client'

import { Card } from '@/components/ui/card'

import { PlayerProfile } from '.'
import { filteredGraphData } from './helpers/filterGraphData'
import { MockGraphLegend } from './mock'

export function PlayerProfileSection() {
  const filteredData = filteredGraphData(MockGraphLegend)
  return (
    <PlayerProfile.Root className={`${filteredData.length === 0 && 'hidden'}`}>
      <PlayerProfile.Title title='Perfil do jogador' />
      <Card className='flex max-w-max flex-wrap items-center justify-center gap-4 border-neutral-100 px-4 py-6'>
        <PlayerProfile.Graph graphData={filteredData} />
        <PlayerProfile.Legend graphData={filteredData} />
      </Card>
    </PlayerProfile.Root>
  )
}
