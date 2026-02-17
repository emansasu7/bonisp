import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Menu,
  Target,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ArrowLeftRight, label: "Transactions", active: false },
  { icon: Target, label: "Goals", active: false },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-card bg-capitec-panel text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-40
        bg-capitec-panel flex flex-col
        transition-all duration-300
        ${isCollapsed ? "w-16" : "w-64"}
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo + Collapse button */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute top-0 right-0 w-5 h-5 bg-capitec-blue rounded-md" />
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-capitec-red rounded-md" />
            </div>
            {!isCollapsed && (
              <span className="text-white font-bold text-lg tracking-tight whitespace-nowrap">
                Capitec
              </span>
            )}
          </div>
          {/* Collapse toggle - desktop only */}
          <button
            className="hidden lg:flex items-center justify-center w-6 h-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 p-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`
                w-full flex items-center gap-3 px-3 py-3 rounded-card
                text-sm font-medium transition-all duration-200
                ${isCollapsed ? "justify-center" : ""}
                ${
                  item.active
                    ? "bg-capitec-blue text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }
              `}
              title={isCollapsed ? item.label : ""}
            >
              <item.icon size={18} className="flex-shrink-0" />
              {!isCollapsed && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* User info */}
        <div className="p-3 border-t border-white/10">
          <div
            className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}
          >
            <div className="w-8 h-8 rounded-full bg-capitec-blue flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">
              JD
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden">
                <div className="text-white text-sm font-medium whitespace-nowrap">
                  John Doe
                </div>
                <div className="text-white/50 text-xs">Premium Account</div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
