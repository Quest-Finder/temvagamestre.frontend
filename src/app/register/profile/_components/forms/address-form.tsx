'use client'

import { Combobox } from '@/components/combobox'
import type { ComboboxOptions } from '@/components/combobox/combobox-context'
import { Form } from '@/components/form'
import { Checkbox } from '@/components/ui/checkbox'
import { STATES, type States } from '@/constants'
import cities from '@/constants/ibge/cities.json'

import { useAddressForm } from '../../_hooks'
import texts from '../../_locales/pt-BR.json'
import { FormFooter } from './form-footer'

export function AddressForm() {
  const ADDRESS_FORM_TEXTS = texts.Address.AddressForm
  const {
    form,
    selectedState,
    liveAbroad,
    isFormValid,
    reset,
    setValue,
    handleSubmit,
    saveAddress,
    clearAddress,
  } = useAddressForm()

  const stateOptions: ComboboxOptions[] = STATES.map(state => {
    return { value: state.name, label: state.name, keyword: state.uf }
  })

  const citiesByState: States = cities
  const cityOptions: ComboboxOptions[] = selectedState
    ? citiesByState[selectedState].map(city => {
        return { value: city.name, label: city.name }
      })
    : []

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex h-full w-80 flex-col items-center gap-8'
        onSubmit={handleSubmit(saveAddress)}
      >
        <Form.Field
          name='state'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label
                aria-disabled={liveAbroad}
                className='aria-disabled:opacity-25'
              >
                {ADDRESS_FORM_TEXTS.state.label}
              </Form.Label>
              <Form.Control>
                <Combobox.Root
                  options={stateOptions}
                  setValue={e => {
                    field.onChange(e)
                    setValue('city', '')
                  }}
                  placeholder={ADDRESS_FORM_TEXTS.state.placeholder}
                  className='disabled:opacity-25'
                  disabled={liveAbroad}
                  {...field}
                >
                  <Combobox.Content
                    searchPlaceholder={
                      ADDRESS_FORM_TEXTS.state.searchPlaceholder
                    }
                    emptyPlaceholder={ADDRESS_FORM_TEXTS.state.emptyPlaceholder}
                    className='w-80'
                  />
                </Combobox.Root>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='city'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label
                aria-disabled={!form.watch('state')}
                className='aria-disabled:opacity-25'
              >
                {ADDRESS_FORM_TEXTS.city.label}
              </Form.Label>
              <Form.Control>
                <Combobox.Root
                  options={cityOptions}
                  setValue={field.onChange}
                  placeholder={ADDRESS_FORM_TEXTS.city.placeholder}
                  className='disabled:opacity-25'
                  disabled={!form.watch('state')}
                  {...field}
                >
                  <Combobox.Content
                    searchPlaceholder={
                      ADDRESS_FORM_TEXTS.city.searchPlaceholder
                    }
                    emptyPlaceholder={ADDRESS_FORM_TEXTS.city.emptyPlaceholder}
                    className='w-80'
                  />
                </Combobox.Root>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='liveAbroad'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Checkbox.Wrapper>
                <Form.Control>
                  <Checkbox.Check
                    title={ADDRESS_FORM_TEXTS.liveAbroad.label}
                    checked={field.value}
                    onCheckedChange={() => {
                      reset({ state: '', city: '', liveAbroad: !liveAbroad })
                    }}
                  />
                </Form.Control>
                <Form.Label type='checkbox'>
                  {ADDRESS_FORM_TEXTS.liveAbroad.label}
                </Form.Label>
              </Checkbox.Wrapper>
              <Form.Message />
            </Form.Item>
          )}
        />

        <FormFooter.Root>
          {isFormValid && <FormFooter.ClearButton onClick={clearAddress} />}
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
