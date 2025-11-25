"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiSearch,
  FiBell,
  FiMessageCircle,
  FiChevronDown,
  FiUser,
  FiHome,
  FiCreditCard,
  FiFileText,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const profileMenu = [
  { label: "Profile", icon: <FiUser />, active: true },
  { label: "Dashboard", icon: <FiHome /> },
  { label: "Payouts", icon: <FiCreditCard /> },
  { label: "Statement", icon: <FiFileText /> },
  { label: "Settings", icon: <FiSettings /> },
  { label: "Log out", icon: <FiLogOut />, danger: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="flex h-full w-full items-center justify-between border-b border-slate-100 bg-white px-4 py-3 shadow-sm sm:px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-2xl bg-gray-100 pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-purple-200"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" size={18} />
        </div>
        <button className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-slate-50 sm:flex">
          Browse
          <FiChevronDown className="text-gray-400" />
        </button>
      </div>

      <div className="flex items-center gap-5 pl-4">
        <button className="relative h-10 w-10 rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200">
          <FiMessageCircle className="mx-auto mt-2.5" size={22} />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-pink-500" />
        </button>
        <button className="relative h-10 w-10 rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200">
          <FiBell className="mx-auto mt-2.5" size={22} />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-pink-500" />
        </button>

        <div
          ref={dropdownRef}
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <Image
              src="/favicon.png"
              width={36}
              height={36}
              alt="Profile"
              className="rounded-full border-2 border-purple-400"
            />
            <div className="hidden leading-tight sm:block text-left">
              <p className="text-sm font-semibold text-gray-800">
                Brooklyn Simmons
              </p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
            <FiChevronDown className="text-gray-400" />
          </button>

          {open && (
            <div className="absolute right-0 z-30 mt-3 w-60 rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
              <ul className="space-y-1">
                {profileMenu.map((item, idx) => (
                  <li key={item.label}>
                    <button
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                        item.active
                          ? "bg-gray-100 text-gray-900"
                          : item.danger
                          ? "text-rose-500 hover:bg-rose-50"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                    {idx === profileMenu.length - 2 && (
                      <div className="mx-2 my-1 h-px bg-slate-100" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
