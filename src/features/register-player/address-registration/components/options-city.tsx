import { useFormContext } from 'react-hook-form'

import GetCityByEstate from '../service/get-city-by-estate'
import { addressRegistrationValidationT } from '../types/address-registration'
import { removeAccents } from '../utils/remove-accents'

export interface ICidade {
  nome: string
  codigo_ibge: string
}

interface OptionsCityProps {
  uf: string
  handleValueCity: (city: string) => void
  cityValue: string
}
export default function OptionsCity({
  uf,
  handleValueCity,
  cityValue,
}: OptionsCityProps) {
  const { data, isLoading } = GetCityByEstate({ uf })
  const form = useFormContext<addressRegistrationValidationT>()
  const fieldCityIsEmpty = cityValue.length !== 0
  const handleSelectCity = (city: string) => {
    form.setValue('city', city)
    handleValueCity(city)
  }
  if (isLoading)
    return (
      <div className='mx-auto mt-5 h-5 w-5 animate-spin rounded-full border-r-2 border-neutral-200' />
    )
  return (
    <ul className='invisible-scrollbar absolute top-20 z-10 max-h-60 w-full overflow-y-auto rounded-md border border-gray-200 bg-white'>
      {data
        .filter(city =>
          removeAccents(city.nome.toLowerCase()).includes(
            cityValue.toLowerCase(),
          ),
        )
        .slice(0, 1)
        .map(city => (
          <ul
            key={city.id}
            className='relative flex min-h-[40px] w-full cursor-pointer items-center px-4 py-2 hover:bg-gray-200'
          >
            <button
              type='button'
              className='w-full cursor-pointer px-4 py-2 text-left font-serif text-[0.625rem] font-medium hover:bg-gray-200'
              onClick={() => handleSelectCity(city.nome)}
            >
              <p className='text-base'>{fieldCityIsEmpty && city.nome}</p>
            </button>
          </ul>
        ))}
    </ul>
  )
}
