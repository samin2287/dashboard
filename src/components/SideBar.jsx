"use client";

import { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import Link from "next/link";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menu = [
    {
      id: "dashboard",
      label: "Dashboard",
      href: "/dashboard",
      icon: <MdDashboardCustomize size={18} />,
    },
    {
      id: "products",
      label: "Products",
      href: "/products",        // ← FIXED
      icon: <MdProductionQuantityLimits size={18} />,
    },
    {
      id: "orders",
      label: "Orders",
      href: "/orders",          // ← FIXED
      icon: <CiDeliveryTruck size={18} />,
    },
    {
      id: "payments",
      label: "Payments",
      href: "/payments",        // ← FIXED
      icon: <MdPayment />,
    },
    {
      id: "transactions",
      label: "Transactions",
      href: "/transactions",    // ← FIXED
      icon: <GrTransaction />,
    },
    {
      id: "clients",
      label: "Clients",
      href: "/clients",         // ← FIXED
      icon: <IoPersonSharp />,
    },
  ];

  const categories = [
    { label: "Laptops", color: "bg-yellow-400" },
    { label: "Mobile Phones", color: "bg-orange-500" },
    { label: "Desktops", color: "bg-purple-500" },
    { label: "Accessories", color: "bg-pink-500" },
    { label: "Networking", color: "bg-blue-500" },
  ];

  return (
    <aside className="w-72 h-screen bg-white/70 backdrop-blur-xl shadow-sm p-5 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <img src="/favicon.png" className="w-8 h-8 object-contain" />
        <h1 className="font-semibold text-xl">Frox</h1>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition
              ${
                active === item.id
                  ? "bg-purple-200 text-purple-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Categories */}
      <div className="mt-8">
        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-3">
          Categories
        </h2>

        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.label} className="flex justify-between text-gray-700">
              {cat.label}
              <span
                className={`w-5 h-5 text-center flex items-center justify-center text-xs rounded-full ${cat.color}`}
              >
                5
              </span>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 text-purple-600 mt-3 text-sm hover:underline">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 1v14M1 8h14" />
          </svg>
          Add Category
        </button>
      </div>

      {/* Top Sellers */}
      <div className="mt-8">
        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-3">
          Top Sellers
        </h2>

        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <img
              key={i}
              src="/favicon.png"
              className="w-9 h-9 rounded-full border shadow-sm"
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
