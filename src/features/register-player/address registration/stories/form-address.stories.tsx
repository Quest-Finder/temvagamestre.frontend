import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import FormAddressRegistration from '../address-registration'

export default {
  title: 'Cadastro de endereço/Cadastro de endereço',
  component: FormAddressRegistration,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} as Meta

export const Template: StoryObj = {
  render: () => (
    <div className='flex min-h-screen items-center '>
      <FormAddressRegistration />
    </div>
  ),
}
