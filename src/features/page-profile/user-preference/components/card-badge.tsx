import React from 'react'
import { Card } from '@/components/ui/card'
import CardAchievements from './card-achievements'

type Badge = {
  id: string
  name: string
  icon: string
}

interface CardBadgeProps {
  badges: Badge[]
}
export default function CardBadge({ badges }: CardBadgeProps) {
  return (
    <main>
      <Card className='flex flex-col'>
        {badges?.map(({ id, icon, name }) => (
          <div
            key={id}
            className='flex items-center justify-start gap-4 border-neutral-100 p-4 [&:not(:last-child)]:border-b'
          >
            <CardAchievements
              src={icon}
              text={name}
            />
          </div>
        ))}
      </Card>
    </main>
  )
}
