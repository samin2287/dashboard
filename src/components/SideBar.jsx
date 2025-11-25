"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboardCustomize,
  MdProductionQuantityLimits,
  MdPayment,
} from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { FiMoon, FiSun, FiExternalLink } from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();

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
      href: "/products",
      icon: <MdProductionQuantityLimits size={18} />,
    },
    {
      id: "orders",
      label: "Orders",
      href: "/orders",
      icon: <CiDeliveryTruck size={18} />,
    },
    {
      id: "payments",
      label: "Payments",
      href: "/payments",
      icon: <MdPayment size={18} />,
    },
    {
      id: "transactions",
      label: "Transactions",
      href: "/transactions",
      icon: <GrTransaction size={18} />,
    },
    {
      id: "clients",
      label: "Clients",
      href: "/clients",
      icon: <IoPersonSharp size={18} />,
    },
  ];

  const categories = [
    { label: "Laptops", color: "bg-amber-300", count: 8 },
    { label: "Mobile phones", color: "bg-orange-400", count: 6 },
    { label: "Desktops", color: "bg-indigo-300", count: 0 },
    { label: "Accessories", color: "bg-pink-400", count: 5 },
    { label: "Portable storage", color: "bg-teal-400", count: 9 },
    { label: "Networking", color: "bg-slate-300", count: 0 },
  ];

  const sellers = [
    "https://i.pravatar.cc/80?img=1",
    "https://i.pravatar.cc/80?img=2",
    "https://i.pravatar.cc/80?img=3",
    "https://i.pravatar.cc/80?img=4",
    "https://i.pravatar.cc/80?img=5",
  ];

  const isActive = (href) => {
    if (href === "/dashboard") return pathname?.startsWith("/dashboard");
    return pathname === href;
  };

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[260px] flex-col justify-between border-r border-slate-100 bg-white px-5 py-6 shadow-sm">
      <div className="flex flex-1 flex-col gap-8 overflow-y-auto pr-1">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-lg font-bold text-white">
            F
          </div>
          <div>
            <p className="text-base font-semibold text-gray-800">Frox</p>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive(item.href)
                  ? "bg-[#6c63ff] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Categories */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-700">Categories</h2>

          <div className="space-y-2">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="flex items-center justify-between rounded-xl px-2 py-1 text-sm text-gray-700"
              >
                <span>{cat.label}</span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-semibold text-white ${cat.color}`}
                >
                  {cat.count}
                </span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-purple-200 text-lg">
              +
            </span>
            Add category
          </button>
        </div>

        {/* Top Sellers */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Top Sellers</h3>
          <div className="flex -space-x-3">
            {sellers.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Seller"
                className="h-9 w-9 rounded-full border border-white shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="rounded-3xl bg-gradient-to-b from-indigo-50 to-indigo-100 p-5 text-center shadow-inner">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
            <span className="text-2xl">💡</span>
          </div>
          <p className="text-sm font-semibold text-gray-800">
            Unlock more information now
          </p>
          <p className="mt-1 text-sm text-gray-500">
            by Upgrade to <span className="font-bold text-gray-800">PRO</span>
          </p>
          <button className="mt-4 w-full rounded-xl bg-[#6c63ff] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Footer controls */}
      <div className="mt-4 rounded-2xl bg-slate-100 px-3 py-2">
        <div className="flex items-center justify-between">
          <FiMoon className="text-gray-500" />
          <div className="flex h-6 w-12 items-center rounded-full bg-white p-1 shadow-inner">
            <div className="h-4 w-4 rounded-full bg-[#6c63ff]" />
          </div>
          <FiSun className="text-amber-500" />
          <FiExternalLink className="text-gray-500" />
        </div>
      </div>
    </aside>
  );
}
