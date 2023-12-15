import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Group A', value: 10 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 600 },
]

const COLORS = ['#16BFD6', '#00D3CF', '#CBFFFC']

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
    <foreignObject
      x={x - 10}
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
}

export function PlayerGraph() {
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
          data={data}
          label={renderCustomizedLabel}
          labelLine={false}
          outerRadius='100'
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry}`}
              fill={COLORS[index % COLORS.length]}
              stroke='null'
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
