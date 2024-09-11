'use client'

import { Loader2 } from 'lucide-react'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShowAndHideButton } from '@/components/ui/show-and-hide-button'

import { useSignInForm } from '../_hooks/use-sign-in-form'
import texts from '../locales/pt-BR.json'

const SIGN_IN_FORM_TEXTS = texts.SignInForm

export function SignInForm() {
  const {
    showPassword,
    setShowPassword,
    form,
    emailError,
    passwordError,
    formError,
    isFormValid,
    isSubmitting,
    signInWithEmail,
  } = useSignInForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper onSubmit={form.handleSubmit(signInWithEmail)}>
        <Form.Field
          name='email'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{SIGN_IN_FORM_TEXTS.email.label}</Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  type='email'
                  inputMode='email'
                  autoComplete='email'
                  variant={emailError && 'error'}
                  placeholder={SIGN_IN_FORM_TEXTS.email.placeholder}
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
              <Form.Label>{SIGN_IN_FORM_TEXTS.password.label}</Form.Label>
              <div className='relative'>
                <Form.Control>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    variant={passwordError && 'error'}
                    placeholder={SIGN_IN_FORM_TEXTS.password.placeholder}
                    className='pr-10'
                    {...field}
                  />
                </Form.Control>
                <ShowAndHideButton
                  title={SIGN_IN_FORM_TEXTS.password.showButton}
                  show={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <Form.Message />
            </Form.Item>
          )}
        />

        {formError && (
          <Alert.Root variant='error'>
            <Alert.Description>{formError.message}</Alert.Description>
          </Alert.Root>
        )}

        <Button
          type='submit'
          className='mt-4 w-full'
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className='size-5 animate-spin' />
              {SIGN_IN_FORM_TEXTS.submit.pending}
            </>
          ) : (
            SIGN_IN_FORM_TEXTS.submit.default
          )}
        </Button>
      </Form.Wrapper>
    </Form.Root>
  )
}
