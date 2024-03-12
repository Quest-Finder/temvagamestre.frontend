'use client'

import Link from 'next/link'
import { useSelectPage } from './useSelectPage'

export function SelectPage() {
  const { handleSetParams, params, linksWithPath } = useSelectPage()
  return (
    <ul className='mx-auto my-3 flex min-h-[43px] w-full max-w-[450px] flex-wrap items-center justify-center gap-3 rounded-md bg-[#EFEFEF] p-2'>
      {linksWithPath.map(({ path, text }) => {
        const bgBLink = params === text && 'bg-[#FFFFFF]'
        const bgText =
          params === text ? 'text-black font-extrabold' : 'text-[#989898] '
        return (
          <li
            key={text}
            className={` flex items-center rounded-md px-4 py-2 ${bgBLink} w-[50px] min-w-[100px]`}
          >
            <Link
              href={path}
              className='flex w-full items-center justify-center'
              onClick={() => handleSetParams(text)}
            >
              <span className={`text-center text-xs capitalize  ${bgText}`}>
                {text}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
