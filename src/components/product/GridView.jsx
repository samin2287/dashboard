import React from "react";
import { products } from "./DummyData";
import { FiMoreHorizontal as MoreHorizontal } from "react-icons/fi";

export default function GridView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
        >
          {/* Top Section */}
          <div className="flex gap-4 items-start">
            <img
              src={p.image}
              className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-[17px]">{p.name}</h3>
                <MoreHorizontal className="cursor-pointer text-gray-500" size={18} />
              </div>

              {/* Rating */}
              <div className="text-yellow-400 text-sm mt-1">★★★★★</div>

              {/* Price + SKU */}
              <div className="flex justify-between mt-2 text-[15px]">
                <span className="font-semibold">${p.price}</span>
                <span className="text-gray-500 font-medium">{p.sku}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            {p.longDescription || p.description || ""}
          </p>

          {/* Bottom Row */}
          <div className="mt-4 pt-4 border-t flex justify-between items-center">
            <span className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-gray-700">{p.status}</span>
            </span>

            <span className="font-semibold text-gray-800">{p.sales}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
