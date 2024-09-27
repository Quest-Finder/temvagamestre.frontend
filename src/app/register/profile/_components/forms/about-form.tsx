'use client'

import { Form } from '@/components/form'
import { TextareaWithCounter } from '@/components/textarea-with-counter'
import { Input } from '@/components/ui/input'

import { MAX_BIO_LENGTH, MAX_TITLE_LENGTH } from '../../_helpers'
import { useAboutForm } from '../../_hooks'
import texts from '../../_locales/pt-BR.json'
import { FormFooter } from './form-footer'

export function AboutForm() {
  const ABOUT_FORM_TEXTS = texts.About.AboutForm

  const {
    form,
    titleError,
    bioError,
    isFormValid,
    handleSubmit,
    saveAbout,
    clearAbout,
  } = useAboutForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex h-full w-full max-w-lg flex-col items-center gap-8'
        onSubmit={handleSubmit(saveAbout)}
      >
        <Form.Field
          name='title'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{ABOUT_FORM_TEXTS.title.label}</Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  variant={titleError && 'error'}
                  placeholder={ABOUT_FORM_TEXTS.title.placeholder}
                  maxLength={MAX_TITLE_LENGTH}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='bio'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{ABOUT_FORM_TEXTS.bio.label}</Form.Label>
              <Form.Control>
                <TextareaWithCounter
                  variant={bioError && 'error'}
                  placeholder={ABOUT_FORM_TEXTS.bio.placeholder}
                  maxLength={MAX_BIO_LENGTH}
                  className='min-h-60'
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <FormFooter.Root>
          {isFormValid && <FormFooter.ClearButton onClick={clearAbout} />}
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
