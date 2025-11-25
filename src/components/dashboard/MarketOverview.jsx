import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const bars = [
  { label: "Mon", value: 50, color: "bg-slate-200" },
  { label: "Tue", value: 58, color: "bg-slate-200" },
  { label: "Wed", value: 65, color: "bg-slate-200" },
  { label: "Thu", value: 55, color: "bg-slate-200" },
  { label: "Fri", value: 72, color: "bg-slate-200" },
  { label: "Sat", value: 78, color: "bg-rose-300" },
  { label: "Sun", value: 70, color: "bg-rose-400" },
];

const MarketOverview = () => {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">
          Market Overview
        </h3>
        <CiMenuKebab className="text-lg text-gray-400" />
      </div>

      <div className="flex items-end justify-between gap-2">
        {bars.map((bar) => (
          <div key={bar.label} className="flex flex-col items-center gap-2">
            <div className="relative flex h-48 w-7 items-end rounded-2xl bg-slate-50 p-1">
              <div
                className={`w-full rounded-xl ${bar.color}`}
                style={{ height: `${bar.value}%` }}
              />
            </div>
            <span
              className={`text-xs font-medium ${
                bar.label === "Sat" || bar.label === "Sun"
                  ? "text-rose-500"
                  : "text-gray-500"
              }`}
            >
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;
