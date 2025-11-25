import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

const DashHeader = () => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-800">Dashboard</h1>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <span>Home</span>
            <FaChevronRight />
            <span className="font-medium text-gray-700">Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 shadow-sm">
          <CiCalendarDate className="text-xl text-gray-500" />
          <span>Feb 15, 2022</span>
          <span className="text-gray-400">-</span>
          <span>Feb 21, 2022</span>
        </div>
      </div>
    </section>
  );
};

export default DashHeader;
