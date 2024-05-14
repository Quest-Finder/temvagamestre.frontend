/* eslint-disable import/no-extraneous-dependencies */

import { Meta, StoryObj } from '@storybook/react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default {
  title: 'Ui/ input',
  component: Input,

  tags: ['auto-docs'],
} as Meta

export const InputDefault: StoryObj = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Input
        type='email'
        placeholder='Email'
      />
    </div>
  ),
}
export const InputWithLabel: StoryObj = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='picture'>Picture</Label>
      <Input
        id='picture'
        type='file'
      />
    </div>
  ),
}
