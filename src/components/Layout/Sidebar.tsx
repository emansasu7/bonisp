import { ArrowLeftRight, LayoutDashboard, Menu, Target, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ArrowLeftRight, label: "Transactions", active: false },
  { icon: Target, label: "Goals", active: false },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-card bg-capitec-panel text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
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
        w-64 bg-capitec-panel flex flex-col
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute top-0 right-0 w-5 h-5 bg-capitec-blue rounded-md" />
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-capitec-red rounded-md" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Capitec
            </span>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-card
                text-sm font-medium transition-all duration-200
                ${
                  item.active
                    ? "bg-capitec-blue text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User info at bottom */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-capitec-blue flex items-center justify-center text-white text-sm font-bold">
              JD
            </div>
            <div>
              <div className="text-white text-sm font-medium">John Doe</div>
              <div className="text-white/50 text-xs">Premium Account</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
