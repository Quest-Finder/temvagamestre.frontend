import { Checkbox } from '@/components/ui/checkbox'
import { rpgStylesArray } from './services/rpgStylesMock'

export default function OnboardFormStepTwo() {
  return (
    <section className='grid place-content-center gap-8 font-semibold'>
      <h1 className='text-center text-2xl '>
        Escolha o estilo de jogo que mais se alinha com seus interesses.
      </h1>
      <div className='item-center flex flex-wrap justify-center gap-2 text-primary-800'>
        {rpgStylesArray.map(style => (
          <div className='flex items-center gap-[0.625rem] rounded-[5.5rem] bg-primary-50 px-4 py-3'>
            <label htmlFor={style}>{style}</label>
            <Checkbox id={style} />
          </div>
        ))}
      </div>
    </section>
  )
}
