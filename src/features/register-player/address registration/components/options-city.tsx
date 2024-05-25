import Search from '@/components/icons/searchIcon'
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
  const disable = true
  const form = useFormContext<addressRegistrationValidationT>()
  const handleSelectCity = (city: string) => {
    console.log('ols')
    handleValueCity(city)
  }

  const foundCity = data.filter(city =>
    removeAccents(city.nome.toLowerCase()).includes(cityValue.toLowerCase()),
  )

  if (isLoading)
    return (
      <div className=' mx-auto mt-5 h-5 w-5 animate-spin rounded-full  border-r-2 border-neutral-200' />
    )
  return (
    <ul className='invisible-scrollbar relative   max-h-60 w-full max-w-sm overflow-y-auto  rounded-md border border-gray-200 bg-white'>
      <li className='h-10 pb-1.5 pl-3 pt-2 '>
        <button
          type='button'
          onClick={() => handleSelectCity(foundCity[0]?.nome)}
          className='block w-full'
        >
          <p className='text-start font-notoSans text-sm text-neutral-500'>
            {foundCity ? foundCity[0]?.nome : 'Cidade não encontrada'}
          </p>
          <Search
            className={`absolute right-3.5 top-3 ${
              disable ? 'fill-[#E5E7EB]' : 'fill-black'
            } bg-slate-50`}
          />
        </button>
      </li>
    </ul>
  )
}
