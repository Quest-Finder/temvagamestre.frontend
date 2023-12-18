import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { PlayerProfileDataProps } from '@/helpers/playerProfileSection/interfaces'
import { getColor } from '@/helpers/playerProfileSection/getColor'

interface CustomLabelProps {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
}

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: CustomLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    percent !== 0 && (
      <foreignObject
        x={percent === 1 ? x + 30 : x - 15}
        y={y - 10}
        width={43}
        height={28}
        fontWeight={500}
        fontSize={14}
      >
        <div className='z-1000 bold rounded-md bg-white text-center shadow-md'>{`${(
          percent * 100
        ).toFixed(0)}%`}</div>
      </foreignObject>
    )
  )
}

export function PlayerGraph({ graphData }: PlayerProfileDataProps) {
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
          label={renderCustomizedLabel}
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
      </PieChart>
    </ResponsiveContainer>
  )
}
