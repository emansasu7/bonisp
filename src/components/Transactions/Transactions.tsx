import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useDashboard } from "../../hooks/useDashboard";
import type { Pagination } from "../../types";
import { categoryColor } from "../../types/category";
import { getIcon } from "../../utils/getIcons";
import FilterBar from "../Dashboard/FilterBar";

type SortOption = "date_desc" | "date_asc" | "amount_desc" | "amount_asc";

const LIMIT = 10;

const Transactions = () => {
  const {
    transactions,
    activePeriod,
    setActivePeriod,
    selectedCategory,
    setSelectedCategory,
  } = useDashboard();

  const [sortBy, setSortBy] = useState<SortOption>("date_desc");
  const [offset, setOffset] = useState(0);

  const sorted = [...transactions].sort((a, b) => {
    switch (sortBy) {
      case "date_desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "date_asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "amount_desc":
        return b.amount - a.amount;
      case "amount_asc":
        return a.amount - b.amount;
      default:
        return 0;
    }
  });

  const pagination: Pagination = {
    total: sorted.length,
    limit: LIMIT,
    offset,
    hasMore: offset + LIMIT < sorted.length,
  };

  const paginated = sorted.slice(offset, offset + LIMIT);
  const currentPage = Math.floor(offset / LIMIT) + 1;
  const totalPages = Math.ceil(pagination.total / LIMIT);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Transactions</h2>
        <p className="text-sm text-gray-500 mt-1">
          {pagination.total} transactions found
        </p>
      </div>

      {/* Filters */}
      <FilterBar
        activePeriod={activePeriod}
        selectedCategory={selectedCategory}
        onPeriodChange={(p) => {
          setActivePeriod(p);
          setOffset(0);
        }}
        onCategoryChange={(c) => {
          setSelectedCategory(c);
          setOffset(0);
        }}
      />

      {/* Table */}
      <div className="bg-white rounded-panel shadow-sm">
        {/* Table Header */}
        <div className="px-6 py-3 border-b border-gray-100 grid grid-cols-12 gap-4">
          <div className="col-span-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Merchant
          </div>
          <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Category
          </div>
          <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Payment
          </div>
          <div
            className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1 cursor-pointer hover:text-capitec-blue"
            onClick={() => {
              setSortBy(sortBy === "date_desc" ? "date_asc" : "date_desc");
              setOffset(0);
            }}
          >
            Date <ArrowUpDown size={12} />
          </div>
          <div
            className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1 cursor-pointer hover:text-capitec-blue justify-end"
            onClick={() => {
              setSortBy(
                sortBy === "amount_desc" ? "amount_asc" : "amount_desc",
              );
              setOffset(0);
            }}
          >
            Amount <ArrowUpDown size={12} />
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-100">
          {paginated.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              No transactions found
            </div>
          ) : (
            paginated.map((t) => (
              <div
                key={t.id}
                className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors"
              >
                {/* Merchant */}
                <div className="col-span-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-card flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: `${t.categoryColor}20` }}
                  >
                    <span style={{ color: t.categoryColor }}>
                      {getIcon(t.icon, 16)}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 truncate">
                    {t.merchant}
                  </span>
                </div>

                {/* Category */}
                <div className="col-span-2">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-btn"
                    style={{
                      backgroundColor: `${categoryColor[t.category]}20`,
                      color: categoryColor[t.category],
                    }}
                  >
                    {t.category}
                  </span>
                </div>

                {/* Payment */}
                <div className="col-span-2 text-sm text-gray-500">
                  {t.paymentMethod}
                </div>

                {/* Date */}
                <div className="col-span-2 text-sm text-gray-500">
                  {new Date(t.date).toLocaleDateString("en-ZA", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>

                {/* Amount */}
                <div className="col-span-2 text-sm font-bold text-gray-900 text-right">
                  R{" "}
                  {t.amount.toLocaleString("en-ZA", {
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {offset + 1}–{Math.min(offset + LIMIT, pagination.total)} of{" "}
            {pagination.total}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOffset((o) => o - LIMIT)}
              disabled={offset === 0}
              className="p-2 rounded-card border border-gray-200 text-gray-500 hover:border-capitec-blue hover:text-capitec-blue disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm font-semibold text-gray-700">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setOffset((o) => o + LIMIT)}
              disabled={!pagination.hasMore}
              className="p-2 rounded-card border border-gray-200 text-gray-500 hover:border-capitec-blue hover:text-capitec-blue disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
