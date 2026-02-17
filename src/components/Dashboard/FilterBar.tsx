import type { TransactionCategory } from "../../types";

interface FilterBarProps {
  activePeriod: string;
  selectedCategory: TransactionCategory | "All";
  onPeriodChange: (period: string) => void;
  onCategoryChange: (category: TransactionCategory | "All") => void;
}

const periods = [
  { label: "7 Days", value: "7d" },
  { label: "30 Days", value: "30d" },
  { label: "90 Days", value: "90d" },
  { label: "1 Year", value: "1y" },
];

const categoryOptions: (TransactionCategory | "All")[] = [
  "All",
  "Groceries",
  "Entertainment",
  "Transportation",
  "Dining",
  "Shopping",
  "Utilities",
];

const FilterBar = ({
  activePeriod,
  selectedCategory,
  onPeriodChange,
  onCategoryChange,
}: FilterBarProps) => {
  return (
    <div className="bg-white rounded-panel p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mr-1">
          Period
        </span>
        {periods.map((p) => (
          <button
            key={p.value}
            onClick={() => onPeriodChange(p.value)}
            className={`
              px-4 py-1.5 rounded-btn text-sm font-semibold
              border-2 transition-all duration-200
              ${
                activePeriod === p.value
                  ? "bg-capitec-blue text-white border-capitec-blue"
                  : "bg-white text-gray-500 border-gray-200 hover:border-capitec-blue hover:text-capitec-blue"
              }
            `}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mr-1">
          Category
        </span>
        {categoryOptions.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`
              px-4 py-1.5 rounded-btn text-sm font-semibold
              border-2 transition-all duration-200
              ${
                selectedCategory === cat
                  ? "bg-capitec-blue text-white border-capitec-blue"
                  : "bg-white text-gray-500 border-gray-200 hover:border-capitec-blue hover:text-capitec-blue"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
