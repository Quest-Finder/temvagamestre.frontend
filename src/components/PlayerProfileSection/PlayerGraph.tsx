import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import {
  PlayerProfileData,
  filterOutItemWithoutData,
  reorderListInDescendingOrder,
} from './GraphLegend'

function getColor(description: string) {
  if (description === 'Matar, Pilhar e Destruir') {
    return '#16BFD6'
  }
  if (description === 'Interpretação') {
    return '#00D3CF'
  }
  if (description === 'Dungeon') {
    return '#CBFFFC'
  }
}

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

interface PlayerProfileGraphProps {
  GraphData: PlayerProfileData[]
}

export function PlayerGraph({ GraphData }: PlayerProfileGraphProps) {
  const filteredGraphData = reorderListInDescendingOrder(
    filterOutItemWithoutData(GraphData),
  )

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
          data={filteredGraphData}
          label={renderCustomizedLabel}
          labelLine={false}
          outerRadius='100'
        >
          {filteredGraphData.map(item => (
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
