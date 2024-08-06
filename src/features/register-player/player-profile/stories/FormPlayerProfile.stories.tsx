import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FormLayout } from '../../player-registration/FormLayout'
import { FormPlayerProfile } from '../FormPlayerProfile'

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
