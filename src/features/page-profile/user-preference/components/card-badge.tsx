import React from 'react'
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
      <section className='flex flex-col'>
        {badges.map(({ id, icon, name }) => (
          <div
            key={id}
            className='flex items-center justify-start gap-4 p-4'
          >
            <CardAchievements
              src={icon}
              text={name}
            />
          </div>
        ))}
      </section>
    </main>
  )
}
