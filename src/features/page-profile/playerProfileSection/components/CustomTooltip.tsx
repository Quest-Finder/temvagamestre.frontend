import { TooltipProps } from 'recharts'
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent'

interface CustomToolTipProps extends TooltipProps<ValueType, NameType> {
  totalData: number
}

export function CustomTooltip({
  active,
  payload,
  totalData,
}: CustomToolTipProps) {
  if (active && payload && payload.length) {
    const { value } = payload[0]
    const data = value?.toString() || '0'
    const dataNumber = parseFloat(data!)
    const dataPercent = (dataNumber * 100) / totalData
    return (
      <p className='box-shadow-tooltip text-primary-900 rounded-md bg-neutral-50 px-2 py-1 text-sm font-medium'>
        {`${dataPercent.toFixed(0)}%`}
      </p>
    )
  }
  return null
}
