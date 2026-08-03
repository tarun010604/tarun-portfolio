import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button
      className="lg:hidden p-2 rounded-xl border border-white/10
      bg-white/5 backdrop-blur-md"
    >
      <Menu size={22} />
    </button>
  );
}