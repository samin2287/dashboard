import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const datasets = [
  {
    id: "direct",
    label: "Direct",
    values: [20, 32, 18, 40, 28, 52, 34, 46, 30],
    gradientFrom: "#f87171",
    gradientTo: "#fb7185",
  },
  {
    id: "social",
    label: "Social",
    values: [12, 24, 30, 26, 34, 20, 28, 24, 32],
    gradientFrom: "#a855f7",
    gradientTo: "#6366f1",
  },
];

const buildPath = (values) => {
  const step = 100 / (values.length - 1);
  const points = values
    .map((value, idx) => `${idx * step},${100 - value}`)
    .join(" L");
  return `M0,100 L${points} L100,100 Z`;
};

const TotalRevenue = () => {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">Total Revenue</h3>
        <CiMenuKebab className="text-lg text-gray-400" />
      </div>

      <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 via-white to-white">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            {datasets.map((set) => (
              <linearGradient
                key={set.id}
                id={`${set.id}-mini`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={set.gradientFrom} stopOpacity="0.9" />
                <stop offset="100%" stopColor={set.gradientTo} stopOpacity="0.6" />
              </linearGradient>
            ))}
          </defs>
          {datasets.map((set) => (
            <path
              key={set.id}
              d={buildPath(set.values)}
              fill={`url(#${set.id}-mini)`}
              fillOpacity="0.9"
              stroke="none"
            />
          ))}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-gray-700">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span>Direct</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
          <span>Social</span>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
    </div>
  );
};

export default TotalRevenue;
