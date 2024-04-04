import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import FormAddressRegistration from '../address-registration'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FormLabel } from '@/components/ui/form'
import { states } from '../utils/estates'


export default {
    title: 'Cadastro de endereço/Cadastro de endereço',
    component: FormAddressRegistration,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs',],
} as Meta

export const Template: StoryObj = {
    render: () => (
        <div className='flex items-center min-h-screen '>
            <FormAddressRegistration />
        </div>
    ),
}






