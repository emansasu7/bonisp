import { useDashboard } from "../../hooks/useDashboard";
import type { TransactionCategory } from "../../types";
import FilterBar from "./FilterBar";
import SpendingChart from "./SpendingChart";
import SummaryCards from "./SummaryCards";
import TransactionList from "./TransactionList";
import TrendsChart from "./TrendsChart";

const Dashboard = () => {
  const {
    isLoading,
    error,
    spendingSummary,
    transactions,
    transactionCount,
    trends,
    categories,
    activePeriod,
    setActivePeriod,
    selectedCategory,
    setSelectedCategory,
  } = useDashboard();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-6">
      <FilterBar
        activePeriod={activePeriod}
        selectedCategory={selectedCategory}
        onPeriodChange={setActivePeriod}
        onCategoryChange={setSelectedCategory}
      />
      <SummaryCards
        summary={{
          ...spendingSummary,
          topCategory: spendingSummary.topCategory as TransactionCategory,
        }}
        transactionCount={transactionCount}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingChart categories={categories} />
        <TrendsChart trends={trends} />
      </div>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Dashboard;
