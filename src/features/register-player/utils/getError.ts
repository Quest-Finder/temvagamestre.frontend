import { FieldError } from 'react-hook-form'

export function getError(error: FieldError | undefined) {
  return error ? 'border-red-500' : 'border-neutral-200'
}
