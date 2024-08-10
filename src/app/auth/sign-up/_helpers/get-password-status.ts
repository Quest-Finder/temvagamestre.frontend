import type { FieldError } from 'react-hook-form'
import type { ZodIssueCode } from 'zod'

interface GetPasswordStatusProps {
  value?: string
  error?: FieldError
}

type PasswordStatus = 'error' | 'warning' | 'success' | undefined

export function getPasswordStatus({
  value,
  error,
}: GetPasswordStatusProps): PasswordStatus {
  if ((!value || value?.length <= 0) && !error) {
    return undefined
  }

  if (!error) {
    return 'success'
  }

  const errorType = error?.type as ZodIssueCode

  switch (errorType) {
    case 'too_small':
      return 'error'
    case 'invalid_string':
      return 'warning'
    default:
      return undefined
  }
}
