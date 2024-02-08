'use client';
import React, { ChangeEvent, useState } from 'react';
import useCategory from '../../components/category';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { RPGType, listValues, useRpgStyle } from '../hooks/useRpgStyle';
import { RPGStyle } from '../rpgStyle';



export interface RpgStylelistProps {
    rpgStyle: RPGStyle[];
}

export function RpgStylelist({ rpgStyle }: RpgStylelistProps) {
    const { handleSelectValue, selectValue } = useRpgStyle(rpgStyle)
    const { getBackgroundColor } = useCategory()
    return (
        <div className='invisible-scrollbar flex w-full overflow-auto items-center gap-4 '>
            <form className='invisible-scrollbar flex w-full overflow-auto items-center gap-4 '>
                {selectValue.map(({ id, name }) => {
                    const backgroundColor = getBackgroundColor(name as RPGType);
                    return (
                        <Select
                            key={id}
                            value={name}
                            onValueChange={(value: string) => handleSelectValue(value, id)}

                        >
                            <SelectTrigger className={cn(`min-w-[155px] px-4 py-2 font-[Roboto] text-sm font-medium leading-tight text-center h-8 rounded-md shadow-none focus:outline-none ${backgroundColor}`)}>
                                <SelectValue >{name}</SelectValue>
                                <SelectValue placeholder="Selecione seu estilo prefirido" />
                            </SelectTrigger>
                            <SelectContent className='styles' id='styles'>
                                <SelectGroup className={cn(`focus:outline-none`)}>
                                    <SelectLabel>estilos de jogo</SelectLabel>
                                    {listValues.map((item) => (
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

                    );
                })}
            </form>

        </div >
    );
}


