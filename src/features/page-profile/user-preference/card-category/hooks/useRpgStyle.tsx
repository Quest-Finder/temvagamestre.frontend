'use client'

import { useState } from 'react'
import { RPGStyle } from '../rpgStyle'

export enum RPGType {
  Heroica = 'Fantasia heroica',
  NinjaVsSamurai = 'Ninja vs Samurai',
  EspadaFeiticaria = 'Espada e feitiçaria',
  Epica = 'Fantasia épica',
  Mitica = 'Fantasia mítica',
  Sombria = 'Fantasia sombria',
  Intriga = 'Intriga',
  Misterio = 'Mistério',
  Guerra = 'Guerra',
  NaveMae = 'Nave Mãe',
}

export const listValues: RPGStyle[] = [
  { id: '1', name: RPGType.Heroica },
  { id: '2', name: RPGType.NinjaVsSamurai },
  { id: '3', name: RPGType.EspadaFeiticaria },
  { id: '4', name: RPGType.Epica },
  { id: '5', name: RPGType.Mitica },
  { id: '6', name: RPGType.Sombria },
  { id: '7', name: RPGType.Intriga },
  { id: '8', name: RPGType.Misterio },
  { id: '9', name: RPGType.Guerra },
  { id: '10', name: RPGType.NaveMae },
]
export function useRpgStyle(rpgStyle: RPGStyle[]) {
  const [selectValue, setSelectValue] = useState<RPGStyle[]>([...rpgStyle])

  const handleSelectValue = (value: string, oldValue: string) => {
    const selectedRPGStyle = listValues.find(rpgStyle => rpgStyle.id === value)
    if (selectedRPGStyle) {
      const isExists = selectValue.find(rpgStyle => rpgStyle.id === value)
      if (isExists === undefined) {
        setSelectValue(prev => {
          const updatedValue = prev.filter(rpgStyle => rpgStyle.id !== oldValue)
          return [...updatedValue, selectedRPGStyle]
        })
      }
    }
  }
  return { selectValue, setSelectValue, handleSelectValue }
}
