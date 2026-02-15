import type { TransactionCategory } from "./category";
import type { Period } from "./period";
import type { StatementComparison } from "./statementComparison";

export interface SpendingSummary {
  period: Period;
  totalSpent: number;
  transactionCount: number;
  averageTransaction: number;
  topCategory: TransactionCategory;
  comparedToPrevious: StatementComparison;
}
