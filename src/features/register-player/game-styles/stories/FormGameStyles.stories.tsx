import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FormLayout } from '../../player-registration/FormLayout'
import { FormGameStyles } from '../FormGameStyles'

export default {
  title: 'Register/Cadastro estilos de jogo',
  component: FormGameStyles,
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
      <FormGameStyles />
    </FormLayout>
  ),
}
