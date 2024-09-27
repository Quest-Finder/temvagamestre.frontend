import texts from '../_locales/pt-BR.json'
import type { PronounType } from '../_types'

type PronounOption = {
  id: PronounType
  title: string
}

const PRONOUN_OPTIONS_TEXTS = texts.User.UserForm.pronoun.options

export const pronounOptions: PronounOption[] = [
  {
    id: 'he/him',
    title: PRONOUN_OPTIONS_TEXTS.he,
  },
  {
    id: 'she/her',
    title: PRONOUN_OPTIONS_TEXTS.she,
  },
  {
    id: 'they/them',
    title: PRONOUN_OPTIONS_TEXTS.they,
  },
  {
    id: 'not-answered',
    title: PRONOUN_OPTIONS_TEXTS.notAnswered,
  },
]
