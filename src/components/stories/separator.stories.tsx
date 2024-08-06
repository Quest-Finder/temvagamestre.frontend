/* eslint-disable import/no-extraneous-dependencies */

import { Meta, StoryObj } from '@storybook/react'

import { Separator } from '../ui/separator'

export default {
  title: 'Ui/ separator',
  component: Separator,

  tags: ['auto-docs'],
} as Meta

export const SeparatorDefault: StoryObj = {
  render: () => (
    <div>
      <div className='space-y-1'>
        <h4 className='text-sm font-medium leading-none'>Radix Primitives</h4>
        <p className='text-muted-foreground text-sm'>
          An open-source UI component library.
        </p>
      </div>
      <Separator className='my-4' />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Blog</div>
        <Separator orientation='vertical' />
        <div>Docs</div>
        <Separator orientation='vertical' />
        <div>Source</div>
      </div>
    </div>
  ),
}
export const SeparatorVertical: StoryObj = {
  render: () => (
    <div className='flex h-96 w-96 items-center justify-center'>
      <Separator orientation='vertical' />
    </div>
  ),
}
