import React from 'react'


interface MultiStepProps {
    size: number
    currentStep?: number
    arrayText?: string[]
}

function Multistep({ size, currentStep = 1, arrayText }: MultiStepProps) {
    return (
        <div className='flex items-center justify-center gap-2'>
            {Array.from({ length: size }, (_, i) => i + 1).map(step => {
                return (
                    <div className='flex  items-center justify-center gap-2'>
                        <div>
                            <div
                                key={step}
                                className={`
                            ${currentStep === step
                                        ? 'border-primary-900 bg-primary-900'
                                        : 'border-primary-600'
                                    } 
                            ${currentStep > step && 'bg-primary-600'} 
                            flex h-10 w-10 items-center justify-center rounded-full border`}
                            >
                                {currentStep <= step && (
                                    <p
                                        className={`${currentStep === step
                                            ? 'text-neutral-50'
                                            : 'text-primary-600'
                                            }  m-4 text-center font-mono font-extrabold`}
                                    >
                                        {step}
                                    </p>
                                )}
                            </div>
                        </div>
                        {arrayText && arrayText[step - 1] && (
                            <p className='text-center font-mono text-primary-900 '>
                                {arrayText[step - 1]}
                            </p>
                        )}
                        {step !== size && (
                            <div className='w-8  border border-neutral-200' />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export { Multistep }
