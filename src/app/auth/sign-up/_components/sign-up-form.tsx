'use client'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox-new'
import { Input } from '@/components/ui/input-new'
import { ShowAndHideButton } from '@/components/ui/show-and-hide-button'

import { MIN_PASSWORD_LENGTH } from '../_helpers/sign-up-form-validation'
import { useSignUpForm } from '../_hooks/use-sign-up-form'
import texts from '../locales/pt-BR.json'

const SIGN_UP_TEXTS = texts.SignUpForm

export function SignUpForm() {
  const {
    successMessage,
    showPassword,
    setShowPassword,
    showPasswordConfirmation,
    setShowPasswordConfirmation,
    form,
    emailError,
    passwordConfirmationError,
    formError,
    passwordStatus,
    isFormValid,
    handleRegister,
  } = useSignUpForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper onSubmit={form.handleSubmit(handleRegister)}>
        <Form.Field
          name='email'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{SIGN_UP_TEXTS.email.label}</Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  type='email'
                  inputMode='email'
                  autoComplete='email'
                  variant={emailError && 'error'}
                  placeholder={SIGN_UP_TEXTS.email.placeholder}
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
              <Form.Label>{SIGN_UP_TEXTS.password.label}</Form.Label>
              <div className='relative'>
                <Form.Control>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    variant={passwordStatus}
                    placeholder={SIGN_UP_TEXTS.password.placeholder}
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
                  title={SIGN_UP_TEXTS.password.showButton}
                  show={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {passwordStatus === 'success' ? (
                <Form.Message variant='success'>
                  {SIGN_UP_TEXTS.password.messages.sucess}
                </Form.Message>
              ) : (
                <Form.Message variant={passwordStatus} />
              )}
              <Form.Description className='text-xs'>
                {SIGN_UP_TEXTS.password.description}
              </Form.Description>
            </Form.Item>
          )}
        />

        <Form.Field
          name='password_confirmation'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {SIGN_UP_TEXTS.passwordConfirmation.label}
              </Form.Label>
              <div className='relative'>
                <Form.Control>
                  <Input
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    variant={passwordConfirmationError && 'error'}
                    placeholder={SIGN_UP_TEXTS.passwordConfirmation.placeholder}
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
                  title={SIGN_UP_TEXTS.password.showButton}
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
                    title={SIGN_UP_TEXTS.consent.title}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Form.Control>
                <Form.Label type='checkbox'>
                  {SIGN_UP_TEXTS.consent.statement}
                </Form.Label>
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
          {SIGN_UP_TEXTS.submit.create}
        </Button>
      </Form.Wrapper>
    </Form.Root>
  )
}
