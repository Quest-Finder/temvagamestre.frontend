import { Card } from '../../components/card'
import InputLiveInBrazil from './input-checkbox-live-in-brazil'
import InputCity from './input-city'
import InputState from './input-state'

export function FormFields() {
  return (
    <>
      <Card>
        <InputState />
        <InputCity />
      </Card>
      <div className='mr-auto'>
        <InputLiveInBrazil />
      </div>
    </>
  )
}
