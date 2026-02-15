export type TransactionCategory =
  | "Groceries"
  | "Entertainment"
  | "Transportation"
  | "Dining"
  | "Shopping"
  | "Utilities";

export interface DateRange {
  startDate: string; // ISO format date string
  endDate: string; // ISO format date string
}

export interface Category {
  name: TransactionCategory;
  amount: number;
  percentage: number; // Percentage of total spending for the date range
  transactionCount: number;
  color: string; // Hex color code for the category
  icon: string; // Icon name or URL for the category
}
export interface CategoriesResponse {
  dateRange: DateRange;
  totalAmount: number;
  categories: Category[];
}
