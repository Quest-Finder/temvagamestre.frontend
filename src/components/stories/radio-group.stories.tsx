/* eslint-disable import/no-extraneous-dependencies */

import { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

export default {
  title: 'Ui/ RadioGroup',
  component: RadioGroup,

  tags: ['auto-docs'],
} as Meta

export const RadioGroupDefault: StoryObj = {
  render: () => (
    <RadioGroup defaultValue='comfortable'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem
          value='default'
          id='r1'
        />
        <Label htmlFor='r1'>Default</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem
          value='comfortable'
          id='r2'
        />
        <Label htmlFor='r2'>Comfortable</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem
          value='compact'
          id='r3'
        />
        <Label htmlFor='r3'>Compact</Label>
      </div>
    </RadioGroup>
  ),
}
