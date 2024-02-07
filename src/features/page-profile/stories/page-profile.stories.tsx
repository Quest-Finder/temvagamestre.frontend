import type { Meta, StoryObj } from '@storybook/react'
import { DesktopPage } from '../desktop/desktopPage'
import { HeaderProfile } from '../header/header'

export default {
  title: 'DesktopPage',
  component: DesktopPage,
  decorators: [
    Story => {
      return (
        <div className='min-h-screen py-3 '>
          <HeaderProfile />
          {Story()}
        </div>
      )
    },
  ],
} as Meta<typeof DesktopPage>

export const Primary: StoryObj<typeof DesktopPage> = {}
