import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

const linksWithPath = [
  { text: 'perfil', path: `/user/profile?show=profile` },
  { text: 'imagens', path: `/user/profile?show=images` },
  // { text: 'datas disponiveis', path: `/user/profile?show=dates` },
]

export function useSelectPage() {
  type LinkTexts = (typeof linksWithPath)[number]['text']

  const [params, setParams] = useState<LinkTexts>('perfil')
  const searchParams = useSearchParams()

  const handleSetParams = useCallback((state: LinkTexts) => {
    setParams(state)
  }, [])

  useEffect(() => {
    const showElement = searchParams.get('show')
    const updateParams = (element: string | null) => {
      if (element === 'images') {
        handleSetParams('imagens')
      } else if (element === 'dates') {
        handleSetParams('datas disponiveis')
      }
    }

    updateParams(showElement)
  }, [searchParams, handleSetParams])

  return { handleSetParams, params, linksWithPath }
}
