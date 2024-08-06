/* eslint-disable import/no-extraneous-dependencies */

import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import colors from 'tailwindcss/colors'

export default {
  title: 'UI/ Colors',
  tags: ['UI', 'Design System', 'auto-docs'],
} as Meta

export const Colors: StoryObj = {
  render: () => (
    <>
      <div className='h-20'>
        <h1 className='text-2xl'>Colors</h1>
      </div>

      {Object.entries(colors).map(([colorName, colorValue]) => {
        if (typeof colorValue === 'object') {
          return Object.entries(colorValue).map(([shade, color]) => {
            const bgColor = color as string
            return (
              <div
                key={shade}
                className='flex justify-around'
              >
                <div className=''>
                  <h4>
                    {colorName}-{shade}
                  </h4>
                </div>
                <div
                  style={{ backgroundColor: bgColor }}
                  className='col-span-12 flex h-20 w-96 items-center justify-around px-1'
                />
              </div>
            )
          })
        }
        return null
      })}
    </>
  ),
}
