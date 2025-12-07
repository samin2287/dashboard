import React from "react";
import { products } from "./DummyData";

export default function ListView() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      {products.map((p) => (
        <div
          key={p.id}
          className="grid grid-cols-12 items-center border-b last:border-none py-4"
        >
          <div className="col-span-1">
            <img src={p.image} className="w-14 h-14 rounded-lg object-cover" />
          </div>

          <div className="col-span-3">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-500 text-sm">{p.description}</p>
          </div>

          <div className="col-span-2">{p.sku}</div>
          <div className="col-span-1 font-semibold">${p.price}</div>

          <div className="col-span-1 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {p.status}
          </div>

          <div className="col-span-1">{p.qty}</div>
          <div className="col-span-1 text-yellow-400">★★★★★</div>
          <div className="col-span-1">{p.sales}</div>
        </div>
      ))}
    </div>
  );
}
