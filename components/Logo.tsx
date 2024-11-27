import { PiggyBank } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2  ">
      {/* Add circular image here */}
      <img
        src="/Logo.png" // Replace with your image path
        alt="Logo"
        className="h-16 w-16 rounded-full object-cover dark:shadow-teal shadow-none horizontal-rotate mr-4" // Conditional shadow for dark mode
      />
      <PiggyBank className="h-12 w-12 stroke-amber-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}

export default Logo;
