'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const linksWithPath = [
  { text: 'perfil', path: `/user/profile?show=profile` },
  { text: 'imagens', path: `/user/profile?show=images` },
  { text: 'datas disponiveis', path: `/user/profile?show=dates` },
]
export function useSelectPage() {
  type LinkTexts = (typeof linksWithPath)[number]['text']

  const [params, setParams] = useState<LinkTexts>('perfil')
  const searchParams = useSearchParams()

  const handleSetParams = (state: LinkTexts) => {
    setParams(() => state)
  }

  let showElement = searchParams.get('show')
  useEffect(() => {
    if (showElement === 'images') {
      return handleSetParams('imagens')
    }
    if (showElement === 'dates') {
      return handleSetParams('datas disponiveis')
    }
  }, [])

  return {handleSetParams,params,linksWithPath}
}
