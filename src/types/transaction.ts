import type { TransactionCategory } from "./category";
import type { Pagination } from "./pagination";

export type PaymentMethod = "Credit Card" | "Debit Order";

export interface Transaction {
  id: string;
  date: string; // ISO format date string
  merchant: string;
  category: TransactionCategory;
  amount: number;
  description: string;
  paymentMethod: PaymentMethod;
  icon: string; // URL to the merchant's icon
  categoryColor: string; // Hex color code for the category
}

export interface TransactionResponse {
  transactions: Transaction[];
  pagination: Pagination;
}
