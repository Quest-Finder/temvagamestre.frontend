'use client'

import Link from 'next/link'

import { useSelectPage } from './useSelectPage'

export function SelectPage() {
  const { handleSetParams, params, linksWithPath } = useSelectPage()
  return (
    <ul className='mx-auto flex min-h-[43px] w-full flex-wrap items-center justify-center gap-3 rounded-md bg-neutral-100 p-2'>
      {linksWithPath.map(({ path, text }) => {
        const bgBLink = params === text && 'bg-neutral-50'
        const bgText =
          params === text ? 'text-black font-extrabold' : 'text-neutral-400 '
        return (
          <li
            key={text}
            className={`flex items-center rounded-md px-4 py-2 font-notoSans ${bgBLink} w-[50px] min-w-[100px]`}
          >
            <Link
              href={path}
              className='flex w-full items-center justify-center'
              onClick={() => handleSetParams(text)}
            >
              <span className={`text-center text-xs capitalize ${bgText}`}>
                {text}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
