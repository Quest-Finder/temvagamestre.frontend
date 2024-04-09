/* eslint-disable import/no-extraneous-dependencies */

import { Meta, StoryObj } from '@storybook/react'
import { Multistep } from '../ui/multistep'

export default {
  title: 'Ui/ Multistep',
  component: Multistep,

  tags: ['auto-docs'],
} as Meta

export const MultistepDefault: StoryObj = {
  render: () => (
    <Multistep
      size={6}
      currentStep={3}
      arrayText={[
        'Dados do jogador',
        'Links',
        'Local',
        'Perfil do jogador',
        'Estilo de jogo',
      ]}
    />
  ),
}
