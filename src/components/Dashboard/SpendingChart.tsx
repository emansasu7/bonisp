import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Category } from "../../types";

interface SpendingChartProps {
  categories: Category[];
}

const SpendingChart = ({ categories }: SpendingChartProps) => {
  return (
    <div>
      <h3>Spending by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={categories}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            formatter={(value: number | undefined) =>
              value !== undefined
                ? `R ${value.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}`
                : ""
            }
          />
          <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
            {categories.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingChart;
