import {
  ArrowLeftRight,
  ShoppingBag,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import type { SpendingSummary } from "../../types";

interface SummaryCardsProps {
  summary: SpendingSummary;
  transactionCount: number;
}

const SummaryCards = ({ summary, transactionCount }: SummaryCardsProps) => {
  const cards = [
    {
      label: "Total Spent",
      value: `R ${summary.totalSpent.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}`,
      change: summary.comparedToPrevious.spentChange,
      sub: "vs last period",
      icon: ShoppingBag,
    },
    {
      label: "Transactions",
      value: transactionCount,
      change: summary.comparedToPrevious.transactionChange,
      sub: "vs last period",
      icon: ArrowLeftRight,
    },
    {
      label: "Top Category",
      value: summary.topCategory,
      change: null,
      sub: "this period",
      icon: Target,
    },
    {
      label: "Avg Transaction",
      value: `R ${summary.averageTransaction.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}`,
      change: null,
      sub: "per transaction",
      icon: Target,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div key={card.label} className="bg-white rounded-panel p-6 shadow-md">
          {/* Icon + Label */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {card.label}
            </p>
            <div className="w-9 h-9 rounded-card bg-gray-100 flex items-center justify-center">
              <card.icon size={16} className="text-capitec-blue" />
            </div>
          </div>

          {/* Value */}
          <p className="text-2xl font-bold text-gray-900 mb-2">{card.value}</p>

          {/* Change indicator */}
          <div className="flex items-center gap-1">
            {card.change !== null ? (
              <>
                {card.change >= 0 ? (
                  <TrendingUp size={14} className="text-feedback-error" />
                ) : (
                  <TrendingDown size={14} className="text-feedback-success" />
                )}
                <p
                  className={`text-xs font-semibold ${card.change >= 0 ? "text-feedback-error" : "text-feedback-success"}`}
                >
                  {Math.abs(card.change)}%
                </p>
              </>
            ) : null}
            <p className="text-xs text-gray-500">{card.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
