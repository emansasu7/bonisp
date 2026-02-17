import React from "react";
import { goals, spendingSummary, trends } from "../data";
import type { TransactionCategory } from "../types";
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

  return {
    isLoading,
    error,
    spendingSummary,
    transactions: filteredTransactions,
    trends,
    goals,
    transactionCount: filteredTransactions.length,
    activePeriod,
    setActivePeriod,
    selectedCategory,
    setSelectedCategory,
  };
}

function getDateFromPeriod(period: string) {
  const days = parseInt(period);
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}
