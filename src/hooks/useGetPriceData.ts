import { useEffect, useState } from 'react'

type ApiResponse = {
  updated_at: string
  data: {
      name: string
      symbol: string
      price: string
      price_BNB: string
  }
}

const api = 'https://pancake-info-api-kp56vvgcm-treenewbee.vercel.app/api/tokens/'

const useGetPriceData = (addr: string) => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const api_url = api + addr
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api_url)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData, api_url])

  return data
}

export default useGetPriceData
