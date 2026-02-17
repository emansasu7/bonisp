import type { Transaction } from "../../types";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center space-x-4 p-4 bg-white rounded-panel shadow-sm mb-2"
        >
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              {transaction.merchant}
            </p>
            <p className="text-sm text-gray-500">{transaction.category}</p>
            <p className="text-sm text-gray-500">
              {new Date(transaction.date).toLocaleDateString("en-ZA")}
            </p>
          </div>
          <p className="text-sm font-semibold text-gray-900">
            R{" "}
            {transaction.amount.toLocaleString("en-ZA", {
              minimumFractionDigits: 2,
            })}
          </p>
          <p className="text-sm font-semibold text-gray-900">
            {transaction.paymentMethod}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
