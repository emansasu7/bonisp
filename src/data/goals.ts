import type { Goal } from "../types";

// todo: just check the goals status and make sure they line up with what's on the response
export const goals: Goal[] = [
  {
    id: "goal_001",
    category: "Entertainment",
    monthlyBudget: 1000.0,
    currentSpent: 650.3,
    percentageUsed: 65.03,
    daysRemaining: 12,
    status: "on_track",
  },
  {
    id: "goal_002",
    category: "Groceries",
    monthlyBudget: 1500.0,
    currentSpent: 1450.8,
    percentageUsed: 96.72,
    daysRemaining: 12,
    status: "warning",
  },
  {
    // make sure the status is correct for this one, as it's over the budget
    id: "goal_003",
    category: "Utilities",
    monthlyBudget: 1000.0,
    currentSpent: 1250.8,
    percentageUsed: 96.72,
    daysRemaining: 12,
    status: "exceeded",
  },
];
