import type { TransactionCategory } from "../../types";

interface FilterBarProps {
  activePeriod: string;
  selectedCategory: TransactionCategory | "All";
  onPeriodChange: (period: string) => void;
  onCategoryChange: (category: TransactionCategory | "All") => void;
}

const FilterBar = ({
  activePeriod,
  selectedCategory,
  onPeriodChange,
  onCategoryChange,
}: FilterBarProps) => {
  const periods = ["7d", "30d", "90d", "1y"];
  const categoryOptions: (TransactionCategory | "All")[] = [
    "All",
    "Groceries",
    "Entertainment",
    "Transportation",
    "Dining",
    "Shopping",
    "Utilities",
  ];
  return (
    <div>
      {/* Period Filter */}
      <div>
        <label>Period: </label>
        <select
          value={activePeriod}
          onChange={(e) => onPeriodChange(e.target.value)}
        >
          {periods.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <label>Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) =>
            onCategoryChange(e.target.value as TransactionCategory | "All")
          }
        >
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
