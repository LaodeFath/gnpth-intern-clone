"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Label,
} from "recharts"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

const data = [
  { name: "Dept. Code", value: 400 },
  { name: "Dept. Code", value: 300 },
  { name: "Dept. Code", value: 300 },
  { name: "Dept. Code", value: 200 },
  { name: "Dept. Code", value: 278 },
]

const COLORS = ["#7AA2E3", "#B6E2A1", "#F9F3A7", "#F7D59C", "#F8AFA6"]

export default function PieChartBox() {
  return (
    <Card className="w-full max-w-4xl bg-[#e1e6d8] rounded-xl px-6 pt-6 pb-4">
      <CardContent className="p-0">
        {/* Header Badge */}
        <div className="mb-3">
          <Badge className="rounded-full bg-[#4C686A] text-white text-xs px-2 py-1">
            By Department
          </Badge>
        </div>

        {/* Chart container */}
        <div className="bg-[#fefbf5] rounded-xl p-4">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                cx="40%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name }) => name}
                labelLine={true}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                formatter={() => (
                  <span className="text-sm text-[#4C686A]">Dept. Code &nbsp; n%</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
