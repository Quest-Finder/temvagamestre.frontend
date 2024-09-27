import texts from '../_locales/pt-BR.json'
import type { InterestType } from '../_types'

type InterestOption = {
  id: InterestType
  title: string
}

const INTEREST_OPTIONS_TEXTS = texts.User.UserForm.interest.options

export const interestOptions: InterestOption[] = [
  {
    id: 'game-master',
    title: INTEREST_OPTIONS_TEXTS.gameMaster,
  },
  {
    id: 'player',
    title: INTEREST_OPTIONS_TEXTS.player,
  },
  {
    id: 'game-master-and-player',
    title: INTEREST_OPTIONS_TEXTS.gameMasterAndPlayer,
  },
]
