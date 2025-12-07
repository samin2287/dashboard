"use client";
import React, { useState } from "react";
import ListView from "./ListView";
import GridView from "./GridView";
import { FiList as List, FiGrid as Grid } from "react-icons/fi";

export default function ProductsPage() {
  const [view, setView] = useState("list");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All Products</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setView("list")}
            className={`px-3 py-2 rounded-lg flex items-center gap-1 border ${
              view === "list" ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            <List size={18} /> List
          </button>

          <button
            onClick={() => setView("grid")}
            className={`px-3 py-2 rounded-lg flex items-center gap-1 border ${
              view === "grid" ? "bg-blue-600 text-white" : "bg-white"
            }`}
          >
            <Grid size={18} /> Grid
          </button>
        </div>
      </div>

      {/* View Switch */}
      {view === "list" ? <ListView /> : <GridView />}

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-3">
        <button className="px-4 py-2 border rounded">1</button>
        <button className="px-4 py-2 border rounded">2</button>
        <button className="px-4 py-2 border rounded">Next →</button>
      </div>
    </div>
  );
}
