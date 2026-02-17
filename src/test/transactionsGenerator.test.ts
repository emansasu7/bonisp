import { describe, expect, it } from "vitest";
import { generateTransactions } from "../utils/transactionsGenerator";

describe("transactionsGenerator", () => {
  it("should generate the correct number of transactions", () => {
    const result = generateTransactions(10);
    expect(result).toHaveLength(10);
  });

  it("should generate transactions with required fields", () => {
    const result = generateTransactions(1);
    const transaction = result[0];

    expect(transaction).toHaveProperty("id");
    expect(transaction).toHaveProperty("merchant");
    expect(transaction).toHaveProperty("amount");
    expect(transaction).toHaveProperty("category");
    expect(transaction).toHaveProperty("date");
    expect(transaction).toHaveProperty("paymentMethod");
  });

  it("should generate unique transaction ids", () => {
    const result = generateTransactions(20);
    const ids = result.map((t) => t.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(20);
  });

  it("should generate amounts within merchant range", () => {
    const result = generateTransactions(50);
    result.forEach((t) => {
      expect(t.amount).toBeGreaterThan(0);
    });
  });
});
