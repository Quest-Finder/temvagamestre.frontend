import * as z from 'zod'
import moment from 'moment'
import { filter } from './helper/badWordsFilter'

export const FormStepOneSchema = z.object({
  name: z
    .string()
    .min(1, 'Campo obrigatório')
    .min(3, 'Nome deve conter no minimo 3 caracteres')
    .max(30, 'Nome deve conter no máximo 30 caracteres')
    .regex(
      /^[A-Za-z]+( [A-Za-z]+)*$/,
      'Caracteres especiais e numeros não são disponiveis',
    )
    .regex(/\w+(?:\s+\w+)+/, 'Necessário preencher nome e sobrenome'),
  username: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(15, 'O username deve conter no máximo 15 caracteres')
    .regex(/^[a-zA-Z0-9'-]*$/, 'Caracteres especiais não são disponiveis')
    .refine(username => !filter.isProfane(username), {
      message: 'Palavras de baixo calão não são permitidas',
    }),
  pronoun: z.string(),
  dateOfBirth: z
    .string()
    .min(10, 'Campo obrigatório')
    .refine(
      dateOfBirth => {
        return moment(dateOfBirth, 'MM-DD-YYYY', true).isValid()
      },
      {
        message: 'Data invalida',
      },
    ),
})