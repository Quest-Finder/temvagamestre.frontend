import { useEffect, useState } from 'react'

export interface SocialMedia {
  id: string
  name: string
  baseUri: string
}
export function FetchSocialNetworks() {
  const [data, setData] = useState<SocialMedia[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/social-media`)
      .then(res => res.json())
      .then(d => {
        setData(d)
        setLoading(false)
      })
  }, [])

  return { data, isLoading }
}
