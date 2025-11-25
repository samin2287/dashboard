"use client";

import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const datasets = [
  {
    id: "completed",
    label: "Completed",
    values: [12, 20, 38, 24, 32, 56, 40, 52, 30, 36, 44, 46],
    gradientFrom: "#f87171",
    gradientTo: "#fb7185",
  },
  {
    id: "pending",
    label: "Pending",
    values: [10, 14, 26, 44, 34, 28, 22, 34, 24, 20, 22, 28],
    gradientFrom: "#f472b6",
    gradientTo: "#a855f7",
  },
  {
    id: "unpaid",
    label: "Unpaid",
    values: [8, 22, 14, 20, 26, 34, 54, 22, 26, 24, 20, 18],
    gradientFrom: "#60a5fa",
    gradientTo: "#22d3ee",
  },
  {
    id: "delivered",
    label: "Delivered",
    values: [14, 24, 32, 28, 34, 20, 32, 48, 40, 34, 30, 28],
    gradientFrom: "#a855f7",
    gradientTo: "#6366f1",
  },
];

const maxValue =
  Math.max(...datasets.flatMap((set) => set.values)) * 1.35; // extra headroom keeps shapes from filling the frame

const buildPath = (values) => {
  const step = 100 / (values.length - 1);
  const points = values
    .map((value, idx) => {
      const y = 100 - (value / maxValue) * 100;
      return `${idx * step},${y.toFixed(2)}`;
    })
    .join(" L");
  return `M0,100 L${points} L100,100 Z`;
};

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
    <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
    <span>{label}</span>
  </div>
);

export default function SalesPerformanceCard() {
  return (
    <div className="relative h-full rounded-3xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Sales Performance
          </h2>
          <p className="text-xs text-gray-400">
            Overview of the last 12 months
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <button className="rounded-lg px-3 py-1 transition hover:text-gray-700">
            Today&apos;s
          </button>
          <button className="rounded-lg bg-gray-100 px-3 py-1 font-semibold text-gray-700">
            Monthly
          </button>
          <CiMenuKebab className="text-lg text-gray-400" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-4">
        {datasets.map((item) => (
          <Legend key={item.id} color={item.gradientTo} label={item.label} />
        ))}
      </div>

      <div className="relative mt-4 h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 via-white to-white">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            {datasets.map((set) => (
              <linearGradient
                key={set.id}
                id={`${set.id}-gradient`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={set.gradientFrom}
                  stopOpacity="0.85"
                />
                <stop
                  offset="100%"
                  stopColor={set.gradientTo}
                  stopOpacity="0.55"
                />
              </linearGradient>
            ))}
          </defs>
          {datasets.map((set) => (
            <path
              key={set.id}
              d={buildPath(set.values)}
              fill={`url(#${set.id}-gradient)`}
              fillOpacity="0.75"
              stroke={set.gradientTo}
              strokeOpacity="0.85"
              strokeWidth="0.7"
              strokeLinejoin="round"
            />
          ))}
        </svg>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-y-0 left-0 right-0 grid grid-cols-12">
            {months.map((_, idx) => (
              <div
                key={idx}
                className="border-l border-dashed border-slate-100"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-1 pt-4 text-xs font-medium text-gray-400">
        {months.map((month) => (
          <span key={month} className="text-center">
            {month}
          </span>
        ))}
      </div>
    </div>
  );
}
