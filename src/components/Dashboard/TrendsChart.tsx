import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { MonthlyTrend } from "../../types";

interface TrendsChartProps {
  trends: MonthlyTrend[];
}

const TrendsChart = ({ trends }: TrendsChartProps) => {
  return (
    <div className="bg-white rounded-panel p-6 shadow-sm">
      <h3 className="text-base font-bold text-gray-900 mb-6">
        Monthly Spending Trends
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trends}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F0F2F5" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `R${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            formatter={(value: number | undefined) =>
              value !== undefined
                ? [
                    `R ${value.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}`,
                    "Spent",
                  ]
                : ["", "Spent"]
            }
          />
          <Line
            type="monotone"
            dataKey="totalSpent"
            stroke="#003DA5"
            strokeWidth={2.5}
            dot={{ fill: "#003DA5", r: 4 }}
            activeDot={{ r: 6, fill: "#003DA5" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendsChart;
