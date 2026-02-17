import { categoryColor, categoryIcon, type CategoriesResponse } from "../types";

export const categories: CategoriesResponse = {
  dateRange: {
    startDate: "2024-01-01",
    endDate: "2024-01-31",
  },
  totalAmount: 4250.75,
  categories: [
    {
      name: "Groceries",
      amount: 1250.3,
      percentage: 29.4,
      transactionCount: 15,
      color: categoryColor.Groceries,
      icon: categoryIcon.Groceries,
    },
    {
      name: "Entertainment",
      amount: 890.2,
      percentage: 20.9,
      transactionCount: 8,
      color: categoryColor.Entertainment,
      icon: categoryIcon.Entertainment,
    },
    {
      name: "Transportation",
      amount: 680.45,
      percentage: 16.0,
      transactionCount: 12,
      color: categoryColor.Transportation,
      icon: categoryIcon.Transportation,
    },
    {
      name: "Dining",
      amount: 520.3,
      percentage: 12.2,
      transactionCount: 9,
      color: categoryColor.Dining,
      icon: categoryIcon.Dining,
    },
    {
      name: "Shopping",
      amount: 450.8,
      percentage: 10.6,
      transactionCount: 6,
      color: categoryColor.Shopping,
      icon: categoryIcon.Shopping,
    },
    {
      name: "Utilities",
      amount: 458.7,
      percentage: 10.8,
      transactionCount: 3,
      color: categoryColor.Utilities,
      icon: categoryIcon.Utilities,
    },
  ],
};
