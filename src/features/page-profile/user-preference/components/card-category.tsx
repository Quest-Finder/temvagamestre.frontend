'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { CardCategoryComponents } from '../card-category'
import { useRpgStyle } from '../card-category/hooks/useRpgStyle'

export type RPGStyle = {
  id: string
  name: string
}
interface CardCategoryProps {
  rpgStyle: RPGStyle[]
}
export default function CardCategory({ rpgStyle }: CardCategoryProps) {
  const { listValues } = useRpgStyle(rpgStyle)

  return (
    <CardCategoryComponents.Root>
      <CardCategoryComponents.ListCategorys>
        <div className='flex max-w-[380px] gap-3 overflow-auto'>
          <CardCategoryComponents.RpgStylelist rpgStyle={rpgStyle} />
          <Button
            variant='outline'
            size='sm'
          >
            + {(listValues?.length ?? 0) - 3}
          </Button>
        </div>
      </CardCategoryComponents.ListCategorys>
    </CardCategoryComponents.Root>
  )
}
