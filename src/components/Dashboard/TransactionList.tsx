import { type Transaction } from "../../types";
import { getIcon } from "../../utils/getIcons";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="bg-white rounded-panel shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900">Transactions</h3>
        <span className="text-sm text-gray-500">
          {transactions.length} transactions
        </span>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {transactions.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            No transactions found for this period
          </div>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
            >
              {/* Category color icon */}
              <div
                className="w-10 h-10 rounded-card flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: `${transaction.categoryColor}20` }}
              >
                <span style={{ color: transaction.categoryColor }}>
                  {getIcon(transaction.icon, 16)}
                </span>
              </div>

              {/* Merchant + category */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {transaction.merchant}
                </p>
                <p className="text-xs text-gray-500">
                  {transaction.category} · {transaction.paymentMethod}
                </p>
              </div>

              {/* Date */}
              <div className="text-xs text-gray-500 hidden sm:block">
                {new Date(transaction.date).toLocaleDateString("en-ZA", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>

              {/* Amount */}
              <div className="text-sm font-bold text-gray-900 text-right">
                R{" "}
                {transaction.amount.toLocaleString("en-ZA", {
                  minimumFractionDigits: 2,
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionList;
