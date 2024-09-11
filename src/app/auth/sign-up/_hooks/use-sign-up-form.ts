import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  checkPasswordRequirements,
  defaultValues,
  type FormSchema,
  formSchema,
  getPasswordStatus,
} from '../_helpers'
import texts from '../locales/pt-BR.json'

export function useSignUpForm() {
  const SIGN_UP_FORM_TEXTS = texts.SignUpForm

  const [successMessage, setSuccessMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onBlur',
  })

  const passwordValue = form.watch('password')

  const {
    email: emailError,
    password: passwordError,
    password_confirmation: passwordConfirmationError,
    root: formError,
  } = form.formState.errors

  const passwordStatus = getPasswordStatus({
    value: passwordValue,
    error: passwordError,
  })
  const passwordRequirements = checkPasswordRequirements(passwordValue)
  const { isValid: isFormValid, isSubmitting } = form.formState

  function signUpWithEmail({ email, consent }: FormSchema): void {
    if (!consent) {
      return
    }

    // TODO: integrate with API when it's ready.

    // The code below is just an example. It'll be changed when the endpoint is available.

    if (email === 'sucesso@teste.com') {
      setSuccessMessage('Mensagem de sucesso apenas para teste')
      form.reset()
      return
    }

    form.setError('root', {
      type: 'api_error',
      message: SIGN_UP_FORM_TEXTS.messages.alreadyRegistered,
    })
    form.setFocus('email')
  }

  return {
    successMessage,
    setSuccessMessage,
    showPassword,
    setShowPassword,
    showPasswordConfirmation,
    setShowPasswordConfirmation,
    form,
    passwordRequirements,
    emailError,
    passwordConfirmationError,
    formError,
    passwordStatus,
    isFormValid,
    isSubmitting,
    signUpWithEmail,
  }
}
