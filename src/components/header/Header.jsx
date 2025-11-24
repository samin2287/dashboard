"use client";
import Image from "next/image";
import { useState } from "react";
import { FiSearch, FiChevronDown, FiBell, FiMessageCircle } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-6">

        {/* Search Bar */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-xl bg-gray-100 pl-10 pr-4 py-2 text-sm outline-none"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Browse Dropdown */}
        <div
          className="flex items-center gap-1 cursor-pointer select-none"
          onClick={() => setOpen(!open)}
        >
          <span className="text-gray-600 font-medium">Browse</span>
          <FiChevronDown size={16} className="text-gray-500" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Chat Icon */}
        <div className="relative cursor-pointer">
          <FiMessageCircle size={24} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full"></span>
        </div>

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <FiBell size={24} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full"></span>
        </div>

        <Image
          src="/favicon.png"   
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full border-2 border-purple-400"
        />
      </div>
    </nav>
  );
}
