import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const DashCard = ({
  title,
  value,
  change,
  subtitle = "Compared to Jan 2022",
  icon,
  iconBg = "bg-emerald-100",
  iconColor = "text-emerald-500",
  trend = "up",
}) => {
  const trendIcon =
    trend === "down" ? (
      <FiTrendingDown className="h-4 w-4" />
    ) : (
      <FiTrendingUp className="h-4 w-4" />
    );

  const trendColor =
    trend === "down" ? "text-rose-500" : "text-emerald-500";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <CiMenuKebab className="cursor-pointer text-gray-400" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
          >
            {icon}
          </div>
          <span className="text-2xl font-semibold text-gray-900">
            {value}
          </span>
        </div>

        <div className={`flex items-center gap-1 text-sm font-semibold ${trendColor}`}>
          {trendIcon}
          <span>{change}</span>
        </div>
      </div>

      <p className="mt-2 text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};

export default DashCard;
