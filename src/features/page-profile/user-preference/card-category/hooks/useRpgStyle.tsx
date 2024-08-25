'use client'

import { useState } from 'react'

import { TypeRPGStyle } from '../rpgStyle'
import { EnumRPGTypes } from './enumRPGType'

export const listValues: TypeRPGStyle[] = [
  { id: '1', name: EnumRPGTypes.Heroica },
  { id: '2', name: EnumRPGTypes.NinjaVsSamurai },
  { id: '3', name: EnumRPGTypes.EspadaFeiticaria },
  { id: '4', name: EnumRPGTypes.Epica },
  { id: '5', name: EnumRPGTypes.Mitica },
  { id: '6', name: EnumRPGTypes.Sombria },
  { id: '7', name: EnumRPGTypes.Intriga },
  { id: '8', name: EnumRPGTypes.Misterio },
  { id: '9', name: EnumRPGTypes.Guerra },
  { id: '10', name: EnumRPGTypes.NaveMae },
]
export function useRpgStyle(rpgStyle: TypeRPGStyle[]) {
  const [selectValue, setSelectValue] = useState<TypeRPGStyle[]>(
    [...rpgStyle].slice(0, 3),
  )
  const handleSelectValue = (value: string, oldValue: string) => {
    const selectedRPGStyle = listValues.find(
      rpgStyled => rpgStyled.id === value,
    )
    if (selectedRPGStyle) {
      const isExists = selectValue.find(style => style.id === value)
      if (isExists === undefined) {
        setSelectValue(prev => {
          const updatedValue = prev.filter(rpg => rpg.id !== oldValue)
          const index = prev.findIndex(rpg => rpg.id === oldValue)
          updatedValue.splice(index, 0, selectedRPGStyle)
          return updatedValue
        })
      }
    }
  }

  return { selectValue, setSelectValue, handleSelectValue, listValues }
}
