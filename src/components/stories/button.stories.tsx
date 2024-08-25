/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react'

import { Button, ButtonProps } from '../ui/button'

interface Props extends ButtonProps {
  icons?: boolean
}

export default {
  title: 'UI/ Button',
  component: Button,
  tags: ['UI', 'Design System', 'auto-docs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'secondary',
          'third',
          'destructive',
          'outline',
          'ghost',
          'link',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
      },
    },
    icons: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

export function ButtonStory(args: Props) {
  return <Button {...args}>Button</Button>
}
ButtonStory.args = {
  variant: 'default',
  size: 'default',
  icons: false,
}
