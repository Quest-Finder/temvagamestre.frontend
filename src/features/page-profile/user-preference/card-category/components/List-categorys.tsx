'use client'

import React from 'react'

import { Card } from '@/components/ui/card'

export default function ListCategorys({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Card>
      {Array.from({ length: 1 }, (_, i) => i + 1).map(i => (
        <div
          key={i}
          className='flex w-full items-center justify-center gap-4 p-4 md:justify-start'
        >
          <h3 className='mr-auto min-w-[95px] font-mono text-base font-normal leading-[48px] text-neutral-700'>
            Categoria #{i}
          </h3>
          {children}
        </div>
      ))}
    </Card>
  )
}
