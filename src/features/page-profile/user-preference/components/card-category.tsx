'use client'
import React, { useState } from 'react'
import { CardCategoryComponents } from '../card-category'
import { Button } from '@/components/ui/button'

export type RPGStyle = {
  id: string
  name: string
}
interface CardCategoryProps {
  rpgStyle: RPGStyle[]
}
export default function CardCategory({ rpgStyle }: CardCategoryProps) {

  return (
    <CardCategoryComponents.Root >
      <CardCategoryComponents.ListCategorys>
        <CardCategoryComponents.RpgStylelist rpgStyle={rpgStyle} />
        <Button variant="outline">+ 2</Button>
      </CardCategoryComponents.ListCategorys>
    </CardCategoryComponents.Root>
  )
}
