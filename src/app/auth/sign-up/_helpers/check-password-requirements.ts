import type { PasswordRequirementType } from '../@types/password'
import { MIN_PASSWORD_LENGTH } from './sign-up-form-validation'

export function checkPasswordRequirements(
  value: string,
): PasswordRequirementType[] {
  const UPPERCASE_REGEX = /^(?=.*[A-Z]).*$/
  const LOWERCASE_REGEX = /^(?=.*[a-z]).*$/
  const NUMBER_REGEX = /^(?=.*\d).*$/
  const SPECIAL_CHAR_REGEX = /^(?=.*\W).*$/

  return [
    { type: 'length', isValid: value.length >= MIN_PASSWORD_LENGTH },
    { type: 'uppercase', isValid: UPPERCASE_REGEX.test(value) },
    { type: 'lowercase', isValid: LOWERCASE_REGEX.test(value) },
    { type: 'number', isValid: NUMBER_REGEX.test(value) },
    { type: 'symbols', isValid: SPECIAL_CHAR_REGEX.test(value) },
  ]
}
