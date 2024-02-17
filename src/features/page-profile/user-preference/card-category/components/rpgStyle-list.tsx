'use client'

import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import useCategory from '../../components/category'
import { RPGType, listValues, useRpgStyle } from '../hooks/useRpgStyle'
import { RPGStyle } from '../rpgStyle'

export interface RpgStylelistProps {
  rpgStyle: RPGStyle[]
}

export function RpgStylelist({ rpgStyle }: RpgStylelistProps) {
  const { handleSelectValue, selectValue } = useRpgStyle(rpgStyle)
  const { getBackgroundColor } = useCategory()
  return (
    <div className='invisible-scrollbar flex w-full items-center gap-4 overflow-auto '>
      <form className='invisible-scrollbar flex w-full items-center gap-4 overflow-auto '>
        {selectValue.map(({ id, name }) => {
          const backgroundColor = getBackgroundColor(name as RPGType)
          return (
            <Select
              key={id}
              value={name}
              onValueChange={(value: string) => handleSelectValue(value, id)}
            >
              <SelectTrigger
                className={cn(
                  `h-8 min-w-[155px] rounded-md px-4 py-2 text-center font-[Roboto] text-sm font-medium leading-tight shadow-none focus:outline-none ${backgroundColor}`,
                )}
              >
                <SelectValue>{name}</SelectValue>
                <SelectValue placeholder='Selecione seu estilo prefirido' />
              </SelectTrigger>
              <SelectContent
                className='styles'
                id='styles'
              >
                <SelectGroup className={cn(`focus:outline-none`)}>
                  <SelectLabel>estilos de jogo</SelectLabel>
                  {listValues.map(item => (
                    <SelectItem
                      key={item.id}
                      value={item.id}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )
        })}
      </form>
    </div>
  )
}
