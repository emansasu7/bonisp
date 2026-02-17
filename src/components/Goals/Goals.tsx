import { useGoals } from "../../hooks/useGoals";
import { categoryColor } from "../../types/category";

const statusConfig = {
  on_track: {
    label: "On Track",
    color: "text-feedback-success",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  warning: {
    label: "Warning",
    color: "text-feedback-warning",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  exceeded: {
    label: "Exceeded",
    color: "text-feedback-error",
    bg: "bg-red-50",
    border: "border-red-200",
  },
} as const;

const Goals = () => {
  const { goals } = useGoals();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Spending Goals</h2>
        <p className="text-sm text-gray-500 mt-1">
          Track your monthly budget targets
        </p>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => {
          const status = statusConfig[goal.status];
          const color = categoryColor[goal.category];

          return (
            <div
              key={goal.id}
              className="bg-white rounded-panel p-6 shadow-sm space-y-4"
            >
              {/* Category + Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-card flex items-center justify-center"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900">{goal.category}</h3>
                </div>
                <span
                  className={`
                  text-xs font-semibold px-3 py-1 rounded-btn border
                  ${status.color} ${status.bg} ${status.border}
                `}
                >
                  {status.label}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Spent</span>
                  <span className="font-semibold text-gray-900">
                    R{" "}
                    {goal.currentSpent.toLocaleString("en-ZA", {
                      minimumFractionDigits: 2,
                    })}
                    <span className="text-gray-400 font-normal">
                      {" "}
                      / R{" "}
                      {goal.monthlyBudget.toLocaleString("en-ZA", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(goal.percentageUsed, 100)}%`,
                      backgroundColor:
                        goal.percentageUsed >= 100
                          ? "#CC0000"
                          : goal.percentageUsed >= 80
                            ? "#F5A623"
                            : "#28A745",
                    }}
                  />
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>{goal.percentageUsed.toFixed(1)}% used</span>
                  <span>{goal.daysRemaining} days remaining</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
