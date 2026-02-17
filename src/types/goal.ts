import type { TransactionCategory } from "./category";

export type GoalStatus = "on_track" | "warning" | "exceeded";

export interface Goal {
  id: string;
  category: TransactionCategory;
  monthlyBudget: number;
  currentSpent: number;
  percentageUsed: number; // Calculated as (currentSpent / monthlyBudget) * 100?
  daysRemaining: number;
  status: GoalStatus;
}
