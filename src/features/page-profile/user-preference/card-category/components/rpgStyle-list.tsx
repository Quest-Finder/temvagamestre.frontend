'use client'

import React from 'react'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { cn } from '@/lib/utils'
import { useRpgStyle } from '../hooks/useRpgStyle'
import useCategory from '../../components/category'
import { RPGStyle } from '../../types'
import { EnumRPGTypes } from '../hooks/enumRPGType'

export interface RpgStylelistProps {
  rpgStyle: RPGStyle[]
}

export function RpgStylelist({ rpgStyle }: RpgStylelistProps) {
  const { selectValue } = useRpgStyle(rpgStyle)
  const { getBackgroundColor } = useCategory()
  return (
    <div className='invisible-scrollbar flex w-full items-center gap-4 overflow-auto'>
      <form className='flex w-full items-center gap-4 overflow-auto'>
        {selectValue.map(({ id, name }) => {
          const backgroundColor = getBackgroundColor(name as EnumRPGTypes)
          return (
            <span
              key={id}
              title={name}
              className={`min-w-[78px] truncate rounded-[3px] px-3 py-1.5 font-mono text-sm font-medium ${backgroundColor}`}
            >
              {name}
            </span>
            // <Select
            //   key={id}
            //   value={name}
            //   onValueChange={(value: string) => handleSelectValue(value, id)}
            // >
            //   <SelectTrigger
            //     title={name}
            //     className={cn(
            //       `h-8 min-w-[150px] rounded-md px-4 py-2 text-center font-[Roboto] text-sm font-medium leading-tight shadow-none focus:outline-none ${backgroundColor}`,
            //     )}
            //   >
            //     <SelectValue>{name}</SelectValue>
            //     <SelectValue placeholder='Selecione seu estilo prefirido' />
            //   </SelectTrigger>
            //   <SelectContent
            //     className='styles'
            //     id='styles'
            //   >
            //     <SelectGroup className={cn(`focus:outline-none`)}>
            //       <SelectLabel className='bg-neutral-50'>
            //         estilos de jogo
            //       </SelectLabel>
            //       {listValues.map(item => (
            //         <SelectItem
            //           className='z-30 bg-neutral-50'
            //           key={item.id}
            //           value={item.id}
            //         >
            //           {item.name}
            //         </SelectItem>
            //       ))}
            //     </SelectGroup>
            //   </SelectContent>
            // </Select>
          )
        })}
      </form>
    </div>
  )
}
