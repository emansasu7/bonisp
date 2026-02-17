export type TransactionCategory =
  | "Groceries"
  | "Entertainment"
  | "Transportation"
  | "Dining"
  | "Shopping"
  | "Utilities";

// TODO: Should probably move these to a MORE APPROPRIATE PLACE, PROBABLY IN THE DATA ???
export const categoryColor: Record<TransactionCategory, string> = {
  Groceries: "#FF6B6B",
  Entertainment: "#4ECDC4",
  Transportation: "#45B7D1",
  Dining: "#F7DC6F",
  Shopping: "#BB8FCE",
  Utilities: "#85C1E9",
};

export const categoryIcon: Record<TransactionCategory, string> = {
  Groceries: "shopping-cart",
  Entertainment: "film",
  Transportation: "car",
  Dining: "utensils",
  Shopping: "shopping-bag",
  Utilities: "zap",
};
export interface DateRange {
  startDate: string; // ISO format date string
  endDate: string; // ISO format date string
}

export interface Category {
  name: TransactionCategory;
  amount: number;
  percentage: number; // Percentage of total spending for the date range
  transactionCount: number;
  color: (typeof categoryColor)[TransactionCategory];
  icon: string; // Icon name or URL for the category
}
export interface CategoriesResponse {
  dateRange: DateRange;
  totalAmount: number;
  categories: Category[];
}
