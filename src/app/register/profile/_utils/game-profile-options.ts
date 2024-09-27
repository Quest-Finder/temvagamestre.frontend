import type { StaticImageData } from 'next/image'

import sampleImage from '@/assets/badges/destiny.png'

import texts from '../_locales/pt-BR.json'
import type { GameProfileType } from '../_types'

type GameProfileOption = {
  id: GameProfileType
  image: string | StaticImageData
  title: string
  description: string
}

const GAME_PROFILE_OPTIONS_TEXTS = texts.GameProfile.GameProfileForm.options

export const gameProfileOptions: GameProfileOption[] = [
  {
    id: 'exploration',
    image: sampleImage,
    title: GAME_PROFILE_OPTIONS_TEXTS.exploration.title,
    description: GAME_PROFILE_OPTIONS_TEXTS.exploration.description,
  },
  {
    id: 'kill-and-loot',
    image: sampleImage,
    title: GAME_PROFILE_OPTIONS_TEXTS.killAndLoot.title,
    description: GAME_PROFILE_OPTIONS_TEXTS.killAndLoot.description,
  },
  {
    id: 'role-playing',
    image: sampleImage,
    title: GAME_PROFILE_OPTIONS_TEXTS.rolePlaying.title,
    description: GAME_PROFILE_OPTIONS_TEXTS.rolePlaying.description,
  },
]
