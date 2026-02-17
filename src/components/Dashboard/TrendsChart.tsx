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
    <div>
      <h3>Monthly Spending Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trends}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value: number | undefined) =>
              value !== undefined
                ? `R ${value.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}`
                : ""
            }
          />
          <Line
            type="monotone"
            dataKey="totalSpent"
            stroke="#003DA5"
            strokeWidth={2}
            dot={{ fill: "#003DA5" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendsChart;
