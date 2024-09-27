'use client'

import { Form } from '@/components/form'
import { FormRequiredIndicator } from '@/components/ui/form-required-indicator'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

import {
  USER_MAX_LENGTH,
  USERNAME_MAX_LENGTH,
} from '../../_helpers/user-form-validation'
import { useUserForm } from '../../_hooks'
import texts from '../../_locales/pt-BR.json'
import { interestOptions, pronounOptions } from '../../_utils'
import { FormFooter } from './form-footer'

export function UserForm() {
  const USER_FORM_TEXTS = texts.User.UserForm
  const {
    form,
    nameError,
    usernameError,
    dateOfBirthErrror,
    isFormValid,
    handleSubmit,
    saveUser,
    clearUser,
  } = useUserForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex h-full w-80 flex-col items-center gap-8'
        onSubmit={handleSubmit(saveUser)}
      >
        <Form.Field
          name='name'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {USER_FORM_TEXTS.name.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  autoComplete='name'
                  variant={nameError && 'error'}
                  maxLength={USER_MAX_LENGTH}
                  placeholder={USER_FORM_TEXTS.name.placeholder}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='username'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {USER_FORM_TEXTS.username.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  variant={usernameError && 'error'}
                  maxLength={USERNAME_MAX_LENGTH}
                  placeholder={USER_FORM_TEXTS.username.placeholder}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='pronoun'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {USER_FORM_TEXTS.pronoun.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Select.Root
                  onValueChange={value => {
                    field.onChange(value)
                  }}
                >
                  <Select.Trigger>
                    <Select.Value
                      placeholder={USER_FORM_TEXTS.interest.placeholder}
                    />
                  </Select.Trigger>
                  <Select.Content>
                    {pronounOptions.map(option => (
                      <Select.Item
                        key={option.id}
                        value={option.id}
                      >
                        {option.title}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='interest'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {USER_FORM_TEXTS.interest.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Select.Root
                  onValueChange={value => {
                    field.onChange(value)
                  }}
                >
                  <Select.Trigger>
                    <Select.Value
                      placeholder={USER_FORM_TEXTS.interest.placeholder}
                    />
                  </Select.Trigger>
                  <Select.Content>
                    {interestOptions.map(option => (
                      <Select.Item
                        key={option.id}
                        value={option.id}
                      >
                        {option.title}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='dateOfBirth'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {USER_FORM_TEXTS.dateOfBirth.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  variant={dateOfBirthErrror && 'error'}
                  placeholder={USER_FORM_TEXTS.dateOfBirth.placeholder}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <FormFooter.Root>
          {isFormValid && <FormFooter.ClearButton onClick={clearUser} />}
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
