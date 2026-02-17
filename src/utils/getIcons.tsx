import {
  Car,
  Film,
  HelpCircle,
  ShoppingBag,
  ShoppingCart,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  "shopping-cart": ShoppingCart,
  film: Film,
  car: Car,
  utensils: UtensilsCrossed,
  "shopping-bag": ShoppingBag,
  zap: Zap,
};

export const getIcon = (name: string, size = 16) => {
  const Icon = iconMap[name] ?? HelpCircle;
  return <Icon size={size} />;
};
