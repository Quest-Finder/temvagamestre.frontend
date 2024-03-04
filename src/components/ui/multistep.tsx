import React from 'react'
import { CheckComponent } from '../icons/checkComponent'

interface MultiStepProps {
  size: number
  currentStep?: number
  arrayText?: string[]
}

function Multistep({ size, currentStep = 1, arrayText }: MultiStepProps) {
  return (
    <div className='flex min-h-[40px] items-center justify-center  gap-2 '>
      {Array.from({ length: size }, (_, i) => i + 1).map(step => {
        return (
          <>
            <div className='mb-auto flex flex-wrap  items-center justify-center gap-2 max-[450px]:w-14'>
              <div
                key={step}
                className={`
                            ${
                              currentStep === step
                                ? 'border-primary-900 bg-primary-900'
                                : 'border-primary-600'
                            } 
                            ${currentStep > step && 'bg-primary-600'} 
                            flex h-10 w-10 items-center justify-center rounded-full border`}
              >
                {currentStep <= step && (
                  <p
                    className={`${
                      currentStep === step
                        ? 'text-neutral-50'
                        : 'text-primary-600'
                    }  m-4 text-center font-mono font-extrabold`}
                  >
                    {step}
                  </p>
                )}
                {currentStep >= step && <CheckComponent />}
              </div>
              {arrayText && arrayText[step - 1] && (
                <p className='text-center font-mono text-primary-900 '>
                  {arrayText[step - 1]}
                </p>
              )}
            </div>
            <div
              className={`w-6 border  border-neutral-200 min-[450px]:w-8  ${
                step !== size ? 'block' : 'hidden'
              }`}
            />
          </>
        )
      })}
    </div>
  )
}

export { Multistep }
// Example
// ;<Multistep
//   size={6}
//   currentStep={3}
//   arrayText={[
//     'Dados do jogador',
//     'Links',
//     'Local',
//     'Perfil do jogador',
//     'Estilo de jogo',
//   ]}
// />
