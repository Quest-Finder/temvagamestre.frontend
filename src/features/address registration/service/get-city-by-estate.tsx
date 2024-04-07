import { useEffect, useState } from 'react'

export interface ICidade {
  nome: string
  codigo_ibge: string
}

interface GetCityByEstateProps {
  uf: string
}
export default function GetCityByEstate({ uf }: GetCityByEstateProps) {
  const path = `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`
  const [data, setData] = useState<ICidade[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
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
    }
    if (!uf) return

    fetchData()
  }, [uf, path])

  return { data, isLoading }
}
