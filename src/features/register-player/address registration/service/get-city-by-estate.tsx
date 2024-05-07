import { useCallback, useEffect, useState } from 'react'

export interface ICidade {
  id: string
  nome: string
}

interface GetCityByEstateProps {
  uf: string
}
export default function GetCityByEstate({ uf }: GetCityByEstateProps) {
  const [data, setData] = useState<ICidade[]>([])
  const [isLoading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    const path = `${process.env.NEXT_PUBLIC_API_CIDADES_URL}localidades/estados/${uf}/distritos`
    try {
      const res = await fetch(path)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const resJson: ICidade[] = await res.json()
      setData(resJson)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [uf])

  useEffect(() => {
    if (!uf) return
    fetchData()
  }, [uf, fetchData])

  const cityList = data.map(c => c.nome.toLowerCase())
  const isCityInList = (value: string) => {
    return !!cityList.includes(value.toLowerCase())
  }

  return { data, isLoading, isCityInList }
}
