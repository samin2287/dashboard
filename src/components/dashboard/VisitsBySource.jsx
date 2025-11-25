import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const sources = [
  { label: "Direct", color: "#6b4ded" },
  { label: "Social", color: "#f13f7c" },
  { label: "Email", color: "#10b981" },
  { label: "Other", color: "#facc15" },
];

const VisitsBySource = () => {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">
          Visits by Source
        </h3>
        <CiMenuKebab className="text-lg text-gray-400" />
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="relative h-40 w-40">
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "conic-gradient(#6b4ded 0% 52%, #f13f7c 52% 78%, #10b981 78% 90%, #facc15 90% 100%)",
            }}
          />
          <div className="absolute inset-5 flex items-center justify-center rounded-full bg-white">
            <span className="text-3xl font-semibold text-gray-800">52%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          {sources.map((source) => (
            <div key={source.label} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: source.color }}
              />
              <span className="text-gray-700">{source.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  );
};

export default VisitsBySource;
