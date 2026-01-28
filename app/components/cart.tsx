"use client"; // Client-side component

import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline"; // Correct import
import { useState } from "react";

export default function Cart() {
  const [cartCount, setCartCount] = useState(2); // Example initial count

  return (
    <div className="relative flex items-center">
      <Link href="/cart" className="relative flex items-center">
        <ShoppingBagIcon className="h-6 w-6 text-white" /> {/* Correct icon */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
}
