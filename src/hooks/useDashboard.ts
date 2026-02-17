import React from "react";
import { goals, spendingSummary, trends } from "../data";
import {
  categoryColor,
  categoryIcon,
  type TransactionCategory,
} from "../types";
import { sampleTransactions } from "../utils/transactionsGenerator";

export function useDashboard() {
  // Placeholder for any dashboard-specific logic or state management

  const [isLoading, setIsLoading] = React.useState(true);
  const [error, _setError] = React.useState<string | null>(null);
  const [activePeriod, setActivePeriod] = React.useState("30d");
  const [selectedCategory, setSelectedCategory] = React.useState<
    TransactionCategory | "All"
  >("All");

  React.useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredTransactions = sampleTransactions
    .filter(
      (t) => selectedCategory === "All" || t.category === selectedCategory,
    )
    .filter((t) => new Date(t.date) >= getDateFromPeriod(activePeriod));

  const totalSpent = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
  const averageTransaction =
    filteredTransactions.length > 0
      ? totalSpent / filteredTransactions.length
      : 0;
  const categoryTotals = filteredTransactions.reduce(
    (acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    },
    {} as Record<string, number>,
  );

  const topCategory =
    Object.entries(categoryTotals).sort(([, a], [, b]) => b - a)[0]?.[0] ??
    "None";
  const dynamicCategories = Object.entries(categoryTotals).map(
    ([name, amount]) => ({
      name: name as TransactionCategory,
      amount,
      percentage: totalSpent > 0 ? (amount / totalSpent) * 100 : 0,
      transactionCount: filteredTransactions.filter((t) => t.category === name)
        .length,
      color: categoryColor[name as TransactionCategory],
      icon: categoryIcon[name as TransactionCategory],
    }),
  );
  const dynamicSummary = {
    ...spendingSummary,
    totalSpent,
    averageTransaction,
    topCategory,
    transactionCount: filteredTransactions.length,
  };

  return {
    isLoading,
    error,
    spendingSummary: dynamicSummary,
    transactions: filteredTransactions,
    trends,
    goals,
    transactionCount: filteredTransactions.length,
    activePeriod,
    setActivePeriod,
    selectedCategory,
    setSelectedCategory,
    categories: dynamicCategories,
  };
}

function getDateFromPeriod(period: string) {
  const days = parseInt(period);
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}
