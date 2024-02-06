import type { Meta, StoryObj } from '@storybook/react'
import { BoxImage, BoxImageProps } from '../box-image'

export default {
  title: 'Box with imagens',
  component: BoxImage,
  decorators: [
    Story => {
      return (
        <div className='flex w-full items-center justify-center'>{Story()}</div>
      )
    },
  ],
} as Meta<BoxImageProps>

export const Primary: StoryObj<BoxImageProps> = {}
