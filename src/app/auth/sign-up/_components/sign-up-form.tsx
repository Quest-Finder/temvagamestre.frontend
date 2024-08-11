'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox-new'
import { Input } from '@/components/ui/input-new'

import { ShowAndHideButton } from '../../../../components/ui/show-and-hide-button'
import { getPasswordStatus } from '../_helpers/get-password-status'
import {
  defaultValues,
  type FormSchema,
  formSchema,
  MIN_PASSWORD_LENGTH,
} from '../_helpers/sign-up-form-validation'
import texts from '../locales/pt-BR.json'

export function SignUpForm() {
  const t = texts.SignUpForm
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

  const emailError = form.formState.errors.email
  const passwordError = form.formState.errors.password
  const passwordConfirmationError = form.formState.errors.password_confirmation
  const formError = form.formState.errors.root

  const passwordStatus = getPasswordStatus({
    value: passwordValue,
    error: passwordError,
  })

  const isFormValid = form.formState.isValid

  function handleRegister(data: FormSchema) {
    // TODO: integrate with API when it's ready

    if (data.email === 'sucesso@teste.com') {
      setSuccessMessage('Mensagem de sucesso apenas para teste')
      form.reset()
      return
    }

    form.setError('root', {
      type: 'api_error',
      message: t.response.alreadyRegistered,
    })
  }

  return (
    <Form.Root {...form}>
      <Form.Wrapper onSubmit={form.handleSubmit(handleRegister)}>
        <Form.Field
          name='email'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{t.email.label}</Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  type='email'
                  inputMode='email'
                  autoComplete='email'
                  variant={emailError && 'error'}
                  placeholder={t.email.placeholder}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='password'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{t.password.label}</Form.Label>
              <div className='relative'>
                <Form.Control>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    variant={passwordStatus}
                    placeholder={t.password.placeholder}
                    className='pr-10'
                    {...field}
                    // Override default behaviour to validate on "onChange"
                    onChange={e => {
                      field.onChange(e)
                      form.trigger('password')
                    }}
                  />
                </Form.Control>
                <ShowAndHideButton
                  title={t.password.showButton}
                  show={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {passwordStatus === 'success' ? (
                <Form.Message variant='success'>
                  {t.password.messages.sucess}
                </Form.Message>
              ) : (
                <Form.Message variant={passwordStatus} />
              )}
              <Form.Description className='text-xs'>
                {t.password.description}
              </Form.Description>
            </Form.Item>
          )}
        />

        <Form.Field
          name='password_confirmation'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{t.passwordConfirmation.label}</Form.Label>
              <div className='relative'>
                <Form.Control>
                  <Input
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    variant={passwordConfirmationError && 'error'}
                    placeholder={t.passwordConfirmation.placeholder}
                    className='pr-10'
                    {...field}
                    // Override default behaviour to validate on "onChange" and trigger it only after value reaches the minimum length
                    onChange={e => {
                      field.onChange(e)
                      if (e.target.value.length >= MIN_PASSWORD_LENGTH) {
                        form.trigger('password_confirmation')
                      }
                    }}
                  />
                </Form.Control>
                <ShowAndHideButton
                  title={t.password.showButton}
                  show={showPasswordConfirmation}
                  onClick={() =>
                    setShowPasswordConfirmation(!showPasswordConfirmation)
                  }
                />
              </div>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='consent'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Checkbox.Wrapper>
                <Form.Control>
                  <Checkbox.Check
                    title={t.consent.title}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Form.Control>
                <Form.Label type='checkbox'>{t.consent.statement}</Form.Label>
              </Checkbox.Wrapper>
              <Form.Message />
            </Form.Item>
          )}
        />

        {successMessage && (
          <Alert.Root variant='success'>
            <Alert.Description>{successMessage}</Alert.Description>
          </Alert.Root>
        )}

        {formError && (
          <Alert.Root variant='error'>
            <Alert.Description>{formError.message}</Alert.Description>
          </Alert.Root>
        )}

        <Button
          type='submit'
          className='mt-4 max-sm:w-full'
          disabled={!isFormValid}
        >
          {t.submit.create}
        </Button>
      </Form.Wrapper>
    </Form.Root>
  )
}
