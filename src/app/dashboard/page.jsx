import React from "react";
import { FiShoppingBag, FiShoppingCart, FiTrendingUp, FiDollarSign } from "react-icons/fi";
import DashHeader from "@/components/dashboard/DashHeader";
import DashCard from "@/components/dashboard/DashCard";
import Chart from "@/components/dashboard/Chart";
import BestSellerCard from "@/components/dashboard/BestSellerCard";
import RecentPurchases from "@/components/dashboard/RecentPurchases";
import MarketOverview from "@/components/dashboard/MarketOverview";
import VisitsBySource from "@/components/dashboard/VisitsBySource";
import TotalRevenue from "@/components/dashboard/TotalRevenue";

const stats = [
  {
    title: "Total sells",
    value: "$126.500",
    change: "34.7%",
    icon: <FiShoppingBag className="h-5 w-5" />,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    title: "Orders value",
    value: "$136.800",
    change: "22.8%",
    icon: <FiTrendingUp className="h-5 w-5" />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Daily orders",
    value: "$25.200",
    change: "17.8%",
    icon: <FiShoppingCart className="h-5 w-5" />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    title: "Daily Revenue",
    value: "$12.125",
    change: "23.9%",
    icon: <FiDollarSign className="h-5 w-5" />,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
  },
];

const page = () => {
  return (
    <div className="space-y-6">
      <DashHeader />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <DashCard key={item.title} {...item} />
        ))}
      </section>

      <section className="grid grid-cols-1 items-start gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <Chart />
        </div>
        <BestSellerCard />
      </section>

      <RecentPurchases />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <MarketOverview />
        <VisitsBySource />
        <TotalRevenue />
      </section>
    </div>
  );
};

export default page;
