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
    <div className="bg-white rounded-panel p-6 shadow-sm">
      <h3 className="text-base font-bold text-gray-900 mb-6">
        Spending by Category
      </h3>
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={categories}
              barSize={40}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F2F5" />
              <XAxis
                dataKey="name"
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
                cursor={{ fill: "#F0F2F5" }}
                formatter={(value: number | undefined) =>
                  value !== undefined
                    ? [
                        `R ${value.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}`,
                        "Amount",
                      ]
                    : ["N/A", "Amount"]
                }
              />
              {/* TODO: Cell is deprecated in newer Recharts versions - 
    migrate to new API when upgrading recharts */}
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {categories.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;
