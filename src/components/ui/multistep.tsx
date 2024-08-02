import React from 'react'
import { CheckComponent } from '../icons/checkComponent'

interface MultiStepSkeletonProps {
  size: number
}
function MultistepSkeleton({ size }: MultiStepSkeletonProps) {
  return (
    <div className='flex min-h-[40px] items-center justify-center gap-2 '>
      {Array.from({ length: size }, (_, i) => i + 1).map(step => {
        return (
          <React.Fragment key={step}>
            <div className='mb-auto flex flex-wrap items-center justify-center gap-2 sm:w-[135px]'>
              <div className='mr-auto flex h-10 w-10 animate-pulse items-center justify-center rounded-full border bg-gray-200' />
              <div className='mt-2 h-4 w-20 animate-pulse bg-gray-200 text-center font-mono' />
            </div>
            <div className='flex h-[40px] items-center justify-center '>
              <div
                className={`mt-2 w-6 animate-pulse border border-gray-200 min-[450px]:w-8 ${
                  step !== size ? 'block' : 'hidden'
                }`}
              />
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

interface MultiStepProps {
  size: number
  currentStep?: number
  arrayText?: string[]
}

function Multistep({ size, currentStep = 1, arrayText }: MultiStepProps) {
  return (
    <div className='flex min-h-[40px] items-center justify-center  gap-2 overflow-auto max-[420px]:pl-[30%] '>
      {Array.from({ length: size }, (_, i) => i + 1).map(step => {
        return (
          <React.Fragment key={step}>
            <div className='mb-auto flex flex-wrap  items-center justify-center gap-2 max-[450px]:w-14'>
              <div
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
          </React.Fragment>
        )
      })}
    </div>
  )
}

export { Multistep, MultistepSkeleton }
