'use client'

import React from 'react'

export default function ListCategorys({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {Array.from({ length: 2 }, (_, i) => i + 1).map(i => (
        <div
          key={i}
          className='flex w-full items-center justify-start gap-4 p-4'
        >
          <h3 className="mr-auto min-w-[90px] font-['Roboto'] text-base font-normal leading-[48px] text-neutral-700">
            Categoria #{i}
          </h3>
          {children}
        </div>
      ))}
    </>
  )
}