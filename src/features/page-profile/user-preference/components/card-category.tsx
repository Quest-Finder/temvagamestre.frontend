'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { CardCategoryComponents } from '../card-category'

export type RPGStyle = {
  id: string
  name: string
}
interface CardCategoryProps {
  rpgStyle: RPGStyle[]
}
export default function CardCategory({ rpgStyle }: CardCategoryProps) {
  return (
    <CardCategoryComponents.Root>
      <CardCategoryComponents.ListCategorys>
        <CardCategoryComponents.RpgStylelist rpgStyle={rpgStyle} />
        <Button
          variant='outline'
          size='sm'
        >
          + {rpgStyle?.length}
        </Button>
      </CardCategoryComponents.ListCategorys>
    </CardCategoryComponents.Root>
  )
}
