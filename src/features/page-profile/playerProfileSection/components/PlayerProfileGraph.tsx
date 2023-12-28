import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts'
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent'
import {
  PlayerProfileDataProps,
  PlayerProfileData,
} from '../helpers/interfaces'
import { getColor } from '../helpers/getColor'

// interface CustomLabelProps {
//   cx: number
//   cy: number
//   midAngle: number
//   innerRadius: number
//   outerRadius: number
//   percent: number
// }

// const RADIAN = Math.PI / 180
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }: CustomLabelProps) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5
//   const x = cx + radius * Math.cos(-midAngle * RADIAN)
//   const y = cy + radius * Math.sin(-midAngle * RADIAN)

//   return (
//     percent !== 0 && (
//       <foreignObject
//         x={percent === 1 ? x + 30 : x - 15}
//         y={y - 10}
//         width={43}
//         height={28}
//         fontWeight={500}
//         fontSize={14}
//       >
//         <div className='bold box-shadow-tooltip h-full rounded-md bg-white px-2 py-1 text-center align-middle text-sm text-[#095658]'>{`${(
//           percent * 100
//         ).toFixed(0)}%`}</div>
//       </foreignObject>
//     )
//   )
// }

interface CustomToolTipProps extends TooltipProps<ValueType, NameType> {
  totalData: number
}

function CustomTooltip({ active, payload, totalData }: CustomToolTipProps) {
  if (active && payload && payload.length) {
    const data = payload?.[0].value?.toString()
    const dataNumber = parseFloat(data!)
    const dataPercent = (dataNumber * 100) / totalData
    return (
      <p className='box-shadow-tooltip rounded-md bg-neutral-50 px-2 py-1 text-sm font-medium text-[#095658]'>
        {`${dataPercent.toFixed(0)}%`}
      </p>
    )
  }
  return null
}

function totalPercentage(userData: PlayerProfileData[]) {
  const total = userData.reduce((soma, data) => soma + data.value, 0)
  return total
}

export function PlayerProfileGraph({ graphData }: PlayerProfileDataProps) {
  // console.log(graphData)
  return (
    <ResponsiveContainer
      width={200}
      height={200}
    >
      <PieChart
        width={200}
        height={200}
      >
        <Pie
          dataKey='value'
          data={graphData}
          // label={renderCustomizedLabel}
          labelLine={false}
          outerRadius='100'
        >
          {graphData.map(item => (
            <Cell
              key={`cell-${item.id}`}
              fill={getColor(item.description)}
              stroke='null'
            />
          ))}
        </Pie>
        <Tooltip
          content={<CustomTooltip totalData={totalPercentage(graphData)} />}
          offset={graphData.length === 1 ? 0 : -15}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
