import Image from "next/image";

const sellers = [
  {
    id: 1,
    name: "Esther Howard",
    company: "Louis Vuitton",
    amount: "$778.35",
    sales: "1258 sales",
    avatar: "https://i.pravatar.cc/96?img=32",
    accent: "from-rose-400 to-orange-300",
  },
  {
    id: 2,
    name: "Wade Warren",
    company: "Binford Ltd.",
    amount: "$576.28",
    sales: "1028 sales",
    avatar: "https://i.pravatar.cc/96?img=56",
    accent: "from-amber-300 to-rose-400",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    company: "MasterCard",
    amount: "$446.61",
    sales: "985 sales",
    avatar: "https://i.pravatar.cc/96?img=15",
    accent: "from-blue-400 to-cyan-400",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    company: "Pizza Hut",
    amount: "$406.27",
    sales: "875 sales",
    avatar: "https://i.pravatar.cc/96?img=47",
    accent: "from-emerald-300 to-lime-400",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    company: "Apple",
    amount: "$396.84",
    sales: "630 sales",
    avatar: "https://i.pravatar.cc/96?img=21",
    accent: "from-indigo-300 to-purple-400",
  },
  {
    id: 6,
    name: "Kristin Watson",
    company: "Starbucks",
    amount: "$351.02",
    sales: "563 sales",
    avatar: "https://i.pravatar.cc/96?img=36",
    accent: "from-fuchsia-300 to-pink-400",
  },
];

const Avatar = ({ seller, highlight }) => (
  <div className="relative h-11 w-11">
    {highlight && (
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${seller.accent} blur`}
      />
    )}
    <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-gray-100">
      <Image
        src={seller.avatar}
        alt={seller.name}
        width={44}
        height={44}
        className="h-full w-full object-cover"
      />
    </div>
  </div>
);

export default function BestSellerCard() {
  return (
    <div className="w-full rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Best Sellers</h2>
        <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100">
          <div className="flex flex-col space-y-1">
            <span className="h-1 w-1 rounded-full bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-400" />
            <span className="h-1 w-1 rounded-full bg-gray-400" />
          </div>
        </div>
      </div>

      <ul className="space-y-4">
        {sellers.map((seller, index) => (
          <li
            key={seller.id}
            className="flex items-center justify-between rounded-xl p-1 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <Avatar seller={seller} highlight={index === 0} />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {seller.name}
                </p>
                <p className="text-xs text-gray-400">{seller.company}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                {seller.amount}
              </p>
              <p className="text-xs text-gray-400">{seller.sales}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
