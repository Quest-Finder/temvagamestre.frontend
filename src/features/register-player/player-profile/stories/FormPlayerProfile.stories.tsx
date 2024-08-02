import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormPlayerProfile } from '../FormPlayerProfile'
import { FormLayout } from '../../player-registration/FormLayout'

export default {
  title: 'Register/Cadastro perfil do jogador',
  component: FormPlayerProfile,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} as Meta

export const Template: StoryObj = {
  render: () => (
    <FormLayout>
      <FormPlayerProfile />
    </FormLayout>
  ),
}
