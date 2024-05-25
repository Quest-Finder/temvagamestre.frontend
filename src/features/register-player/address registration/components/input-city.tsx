'use client'

import Search from '@/components/icons/searchIcon'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import GetCityByEstate from '../service/get-city-by-estate'
import { useIsDisabled } from '../store/store'
import { addressRegistrationValidationT } from '../types/address-registration'
import { removeAccents } from '../utils/remove-accents'

export default function InputCity() {
  const form = useFormContext<addressRegistrationValidationT>()
  const uf = form.watch('state') as string
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [search, setSearch] = useState('')
  const { data } = GetCityByEstate({ uf })
  const { setIsDisabled } = useIsDisabled()
  const inputCityIsDisabled =
    form.watch('state') === '' || form.watch('liveInBrazil') === true
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  function handleChangeValue(state: string) {
    setSearch(() => state)
    form.setValue('city', state)
  }
  function handleChangeValueInForm(state: string) {
    setSearch(() => state)
    form.setValue('city', state)
    closeModal()
    setIsDisabled(false)
  }

  useEffect(() => {
    if (form.watch('state') === undefined) {
      setSearch('')
    }
  }, [form])

  const foundCity = data.filter(city =>
    removeAccents(city.nome.toLowerCase()).includes(search.toLowerCase()),
  )
  return (
    <div className='mt-3 grid w-full max-w-sm items-center gap-1.5'>
      <Label
        htmlFor='search-city'
        className={`${inputCityIsDisabled && 'text-neutral-300'}
                    ${form.formState.errors.city && 'text-red-500'}`}
      >
        Insira sua cidade
      </Label>
      <Input
        type='text'
        id='search-city'
        placeholder='Insira sua cidade'
        onFocus={openModal}
        value={search}
        onChange={e => handleChangeValue(e.target.value)}
        disabled={inputCityIsDisabled}
      />
      <div className='min-h-[50px] '>
        {isModalOpen && form.watch('liveInBrazil') === false && (
          <div className='w-full max-w-sm '>
            <div>
              <ul className='invisible-scrollbar relative   max-h-60 w-full max-w-sm overflow-y-auto  rounded-md border border-gray-200 bg-white'>
                <li className='h-10 pb-1.5 pl-3 pt-2 '>
                  <button
                    type='button'
                    onClick={() => handleChangeValueInForm(foundCity[0]?.nome)}
                    className='block w-full'
                  >
                    <p className='text-start font-notoSans text-sm text-neutral-500'>
                      {foundCity.length > 0 && search.length > 0
                        ? foundCity[0]?.nome
                        : 'Cidade não encontrada'}
                    </p>
                    <Search
                      className={`absolute right-3.5 top-3 ${
                        inputCityIsDisabled ? 'fill-[#E5E7EB]' : 'fill-black'
                      } bg-slate-50`}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
