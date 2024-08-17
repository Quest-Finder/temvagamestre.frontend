'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import texts from './locales/pt-BR.json'
import { Button } from './ui/button'
import { DropdownMenu } from './ui/dropdown-menu'

const THEME_TOGGLE_TEXTS = texts.Components.ThemeToggle

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='size-8 data-[state=open]:bg-background-soft'
        >
          <Sun className='size-4 dark:scale-0 dark:opacity-0' />
          <Moon className='absolute size-4 scale-0 opacity-0 dark:scale-100 dark:opacity-100' />
          <span className='sr-only'>Alterar tema</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align='start'>
        <DropdownMenu.Item onClick={() => setTheme('light')}>
          <Sun className='size-3' />
          {THEME_TOGGLE_TEXTS.light}
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>
          <Moon className='size-3' />
          {THEME_TOGGLE_TEXTS.dark}
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('system')}>
          <Monitor className='size-3' />
          {THEME_TOGGLE_TEXTS.system}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
