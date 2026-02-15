export interface Customer {
  customerId: string;
  name: string;
  email: string;
  joinDate: string;
  accountType: "standard" | "premium";
  totalSpent: number;
  currency: "ZAR"; // ideally this would be extended to support more currencies in the future, if needed
}
