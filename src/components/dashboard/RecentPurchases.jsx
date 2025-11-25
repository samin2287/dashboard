import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const purchases = [
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2025",
    customer: "Bessie Cooper",
    avatar: "https://i.pravatar.cc/96?img=48",
    status: "Delivered",
    amount: "$400.00",
    accent: "from-indigo-400 to-sky-400",
  },
  {
    product: "iPhone 11 Pro",
    orderId: "#25413",
    date: "Aug 5th, 2025",
    customer: "Annette Black",
    avatar: "https://i.pravatar.cc/96?img=12",
    status: "Pending",
    amount: "$200.00",
    accent: "from-amber-300 to-orange-400",
  },
  {
    product: "Oppo A20",
    orderId: "#25413",
    date: "Aug 5th, 2025",
    customer: "Bessie Cooper",
    avatar: "https://i.pravatar.cc/96?img=48",
    status: "Delivered",
    amount: "$250.00",
    accent: "from-emerald-400 to-teal-400",
  },
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2025",
    customer: "Kristin Watson",
    avatar: "https://i.pravatar.cc/96?img=36",
    status: "Canceled",
    amount: "$400.00",
    accent: "from-fuchsia-400 to-purple-500",
  },
  {
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2025",
    customer: "Esther Howard",
    avatar: "https://i.pravatar.cc/96?img=32",
    status: "Delivered",
    amount: "$100.00",
    accent: "from-blue-400 to-cyan-400",
  },
  {
    product: "Samsung A50",
    orderId: "#25413",
    date: "Aug 5th, 2025",
    customer: "Jerome Bell",
    avatar: "https://i.pravatar.cc/96?img=11",
    status: "Pending",
    amount: "$150.00",
    accent: "from-amber-400 to-rose-400",
  },
  {
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2025",
    customer: "Brooklyn",
    avatar: "https://i.pravatar.cc/96?img=5",
    status: "Canceled",
    amount: "$150.00",
    accent: "from-sky-400 to-indigo-500",
  },
];

const statusStyles = {
  Delivered: { dot: "bg-emerald-500", text: "text-emerald-600" },
  Pending: { dot: "bg-amber-400", text: "text-amber-500" },
  Canceled: { dot: "bg-rose-500", text: "text-rose-500" },
};

const Avatar = ({ name, avatar, accent }) => {
  return (
    <div className="relative h-9 w-9">
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${accent} opacity-70`}
      />
      <img
        src={avatar}
        alt={name}
        className="relative h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
      />
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const style = statusStyles[status] || statusStyles.Pending;
  return (
    <div className={`flex items-center gap-2 text-sm font-semibold ${style.text}`}>
      <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
      <span>{status}</span>
    </div>
  );
};

const RecentPurchases = () => {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-base font-semibold text-gray-900">
          Recent Purchases
        </h3>
        <CiMenuKebab className="text-lg text-gray-400" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100 text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-5 py-3 font-semibold text-gray-500">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-3 py-3 font-semibold text-gray-500">Products</th>
              <th className="px-3 py-3 font-semibold text-gray-500">Order ID</th>
              <th className="px-3 py-3 font-semibold text-gray-500">Date</th>
              <th className="px-3 py-3 font-semibold text-gray-500">
                Customer name
              </th>
              <th className="px-3 py-3 font-semibold text-gray-500">Status</th>
              <th className="px-3 py-3 font-semibold text-gray-500">Amount</th>
              <th className="px-3 py-3 text-right font-semibold text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {purchases.map((item, idx) => (
              <tr key={`${item.product}-${idx}`} className="hover:bg-slate-50">
                <td className="px-5 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-3 py-3 text-gray-700">{item.product}</td>
                <td className="px-3 py-3 text-gray-500">{item.orderId}</td>
                <td className="px-3 py-3 text-gray-500">{item.date}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar
                      name={item.customer}
                      avatar={item.avatar}
                      accent={item.accent}
                    />
                    <span className="text-gray-700">{item.customer}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-3 py-3 font-semibold text-gray-800">
                  {item.amount}
                </td>
                <td className="px-3 py-3 text-right text-gray-400">
                  <CiMenuKebab />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPurchases;
