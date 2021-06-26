import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { FLOKI } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData(FLOKI.address)

  const cakePriceUsd = priceData ? parseFloat(priceData.data.price) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `Floki${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
