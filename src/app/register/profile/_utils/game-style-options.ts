import type { StaticImageData } from 'next/image'

import sampleImage from '@/assets/images/game-styles/sample.jpg'

import texts from '../_locales/pt-BR.json'

type GameStyleOption = {
  id: string
  image: string | StaticImageData
  title: string
  description: string
}
const GAME_STYLE_OPTIONS_TEXTS = texts.GameStyles.GameStylesForm.options

export const gameStyleOptions: GameStyleOption[] = [
  {
    id: 'fantasy',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.fantasy.title,
    description: GAME_STYLE_OPTIONS_TEXTS.fantasy.description,
  },
  {
    id: 'heroic-fantasy',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.heroicFantasy.title,
    description: GAME_STYLE_OPTIONS_TEXTS.heroicFantasy.description,
  },
  {
    id: 'ninja-vs-samurai',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.ninjaVsSamurai.title,
    description: GAME_STYLE_OPTIONS_TEXTS.ninjaVsSamurai.description,
  },
  {
    id: 'sword-and-sorcery',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.swordAndSorcery.title,
    description: GAME_STYLE_OPTIONS_TEXTS.swordAndSorcery.description,
  },
  {
    id: 'epic-fantasy',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.epicFantasy.title,
    description: GAME_STYLE_OPTIONS_TEXTS.epicFantasy.description,
  },
  {
    id: 'mystic-fantasy',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.mysticFantasy.title,
    description: GAME_STYLE_OPTIONS_TEXTS.mysticFantasy.description,
  },
  {
    id: 'dark-fantasy',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.darkFantasy.title,
    description: GAME_STYLE_OPTIONS_TEXTS.darkFantasy.description,
  },
  {
    id: 'intrigue',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.intrigue.title,
    description: GAME_STYLE_OPTIONS_TEXTS.intrigue.description,
  },
  {
    id: 'war',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.war.title,
    description: GAME_STYLE_OPTIONS_TEXTS.war.description,
  },
  {
    id: 'mothership',
    image: sampleImage,
    title: GAME_STYLE_OPTIONS_TEXTS.mothership.title,
    description: GAME_STYLE_OPTIONS_TEXTS.mothership.description,
  },
]
