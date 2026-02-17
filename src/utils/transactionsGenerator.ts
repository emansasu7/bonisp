// TODO: Fill in at least merchants(as object) covering all 6 categories,
//   | "Groceries"
//   | "Entertainment"
//   | "Transportation"
//   | "Dining"
//   | "Shopping"
//   | "Utilities";

//   Groceries: "#FF6B6B",
//   Entertainment: "#4ECDC4",
//   Transportation: "#45B7D1",
//   Dining: "#F7DC6F",
//   Shopping: "#BB8FCE",
//   Utilities: "#85C1E9",

//   Groceries: "shopping-cart",
//   Entertainment: "film",
//   Transportation: "car",
//   Dining: "utensils",
//   Shopping: "shopping-bag",
//   Utilities: "zap",
import type { PaymentMethod, Transaction, TransactionCategory } from "../types";

// merchant object here
interface MerchantTemplate {
  name: string;
  category: TransactionCategory;
  minAmount: number;
  maxAmount: number;
  icon: string;
  categoryColor: string;
  paymentMethod: PaymentMethod;
}

const merchants: MerchantTemplate[] = [
  {
    name: "Pick n Pay",
    category: "Groceries",
    minAmount: 50,
    maxAmount: 800,
    icon: "shopping-cart",
    categoryColor: "#FF6B6B",
    paymentMethod: "Credit Card",
  },
  {
    name: "Netflix",
    category: "Entertainment",
    minAmount: 59,
    maxAmount: 299,
    icon: "film",
    categoryColor: "#4ECDC4",
    paymentMethod: "Debit Order",
  },
  {
    name: "Spotify",
    category: "Entertainment",
    minAmount: 59,
    maxAmount: 299,
    icon: "film",
    categoryColor: "#4ECDC4",
    paymentMethod: "Debit Order",
  },
  {
    name: "Uber",
    category: "Transportation",
    minAmount: 29,
    maxAmount: 499,
    icon: "car",
    categoryColor: "#45B7D1",
    paymentMethod: "Credit Card",
  },
  {
    name: "Takealot",
    category: "Shopping",
    minAmount: 99,
    maxAmount: 99999,
    icon: "shopping-bag",
    categoryColor: "#BB8FCE",
    paymentMethod: "Credit Card",
  },
  {
    name: "Eskom",
    category: "Utilities",
    minAmount: 10,
    maxAmount: 9999,
    icon: "zap",
    categoryColor: "#85C1E9",
    paymentMethod: "Credit Card",
  },
  {
    name: "Spur",
    category: "Dining",
    minAmount: 199,
    maxAmount: 999,
    icon: "utensils",
    categoryColor: "#F7DC6F",
    paymentMethod: "Credit Card",
  },
  {
    name: "Woolworths",
    category: "Groceries",
    minAmount: 150,
    maxAmount: 1200,
    icon: "shopping-cart",
    categoryColor: "#FF6B6B",
    paymentMethod: "Credit Card",
  },
  {
    name: "Checkers",
    category: "Groceries",
    minAmount: 80,
    maxAmount: 900,
    icon: "shopping-cart",
    categoryColor: "#FF6B6B",
    paymentMethod: "Credit Card",
  },
  {
    name: "DStv",
    category: "Entertainment",
    minAmount: 109,
    maxAmount: 829,
    icon: "film",
    categoryColor: "#4ECDC4",
    paymentMethod: "Debit Order",
  },
  {
    name: "Bolt",
    category: "Transportation",
    minAmount: 25,
    maxAmount: 350,
    icon: "car",
    categoryColor: "#45B7D1",
    paymentMethod: "Credit Card",
  },
  {
    name: "Nandos",
    category: "Dining",
    minAmount: 89,
    maxAmount: 450,
    icon: "utensils",
    categoryColor: "#F7DC6F",
    paymentMethod: "Credit Card",
  },
  {
    name: "Steers",
    category: "Dining",
    minAmount: 59,
    maxAmount: 250,
    icon: "utensils",
    categoryColor: "#F7DC6F",
    paymentMethod: "Credit Card",
  },
  {
    name: "Zara",
    category: "Shopping",
    minAmount: 299,
    maxAmount: 3000,
    icon: "shopping-bag",
    categoryColor: "#BB8FCE",
    paymentMethod: "Credit Card",
  },
  {
    name: "Amatola Municipality",
    category: "Utilities",
    minAmount: 500,
    maxAmount: 3500,
    icon: "zap",
    categoryColor: "#85C1E9",
    paymentMethod: "Debit Order",
  },
];

/**
 * Generates a random number between min and max (inclusive)
 */
const randomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Picks a random item from an array
 */
const randomFrom = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

/**
 * Generates a random date between two dates
 */
const randomDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - randomBetween(0, daysAgo));
  date.setHours(randomBetween(7, 22), randomBetween(0, 59), 0, 0);
  return date.toISOString();
};

export const generateTransactions = (
  count: number,
  daysAgo: number = 90,
): Transaction[] => {
  return Array.from({ length: count }, (_, i) => {
    const merchant = randomFrom(merchants);

    return {
      id: `txn_${String(i + 1).padStart(6, "0")}`,
      merchant: merchant.name,
      category: merchant.category,
      amount: parseFloat(
        (
          randomBetween(merchant.minAmount, merchant.maxAmount) + Math.random()
        ).toFixed(2),
      ),
      date: randomDate(daysAgo),
      icon: merchant.icon,
      description:
        merchant.category === "Groceries"
          ? "Weekly groceries"
          : merchant.category === "Entertainment"
            ? "Monthly subscription"
            : merchant.category === "Transportation"
              ? "Ride booking"
              : merchant.category === "Dining"
                ? "Restaurant visit"
                : merchant.category === "Shopping"
                  ? "Online purchase"
                  : "Monthly payment",
      paymentMethod: merchant.paymentMethod,
      categoryColor: merchant.categoryColor,
    };
  });
};

export const sampleTransactions = generateTransactions(20, 90);
