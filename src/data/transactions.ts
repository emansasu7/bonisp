import type { Transaction } from "../types";

export const transactions: Transaction[] = [
  {
    id: "txn_123456",
    date: "2024-09-16T14:30:00Z",
    merchant: "Pick n Pay",
    category: "Groceries",
    amount: 245.8,
    description: "Weekly groceries",
    paymentMethod: "Credit Card",
    icon: "shopping-cart",
    categoryColor: "#FF6B6B",
  },
  {
    id: "txn_123457",
    date: "2024-09-15T10:15:00Z",
    merchant: "Netflix",
    category: "Entertainment",
    amount: 199.0,
    description: "Monthly subscription",
    paymentMethod: "Debit Order",
    icon: "film",
    categoryColor: "#4ECDC4",
  },
  {
    id: "txn_123458",
    date: "2024-09-14T08:45:00Z",
    merchant: "Uber",
    category: "Transportation",
    amount: 75.5,
    description: "Ride to work",
    paymentMethod: "Credit Card",
    icon: "car",
    categoryColor: "#556270",
  },
];
