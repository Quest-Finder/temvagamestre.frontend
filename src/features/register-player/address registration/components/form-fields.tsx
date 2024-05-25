import InputLiveInBrazil from './input-checkbox-live-in-brazil'
import InputCity from './input-city'
import InputState from './input-state'

export function FormFields() {
  return (
    <>
      <div className='w-full max-w-sm'>
        <InputState />
        <InputCity />
      </div>
      <div className='w-full max-w-sm'>
        <InputLiveInBrazil />
      </div>
    </>
  )
}
