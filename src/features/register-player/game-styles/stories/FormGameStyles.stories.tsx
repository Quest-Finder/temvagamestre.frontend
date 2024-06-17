import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormGameStyles } from '../FormGameStyles'
import { FormLayout } from '../../player-registration/FormLayout'

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