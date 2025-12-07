export const products = new Array(12).fill(0).map((_, i) => ({
  id: i + 1,
  name: "Cubitt Smart Watch",
  description: "Lorem ipsum dolor sit amet.",
  longDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque ipsum, lacinia et tempor eget, hendrerit et orci. Phasellus at nisi non turpis accumsan feugiat vel non arcu.",
  price: 576.28,
  sku: "FROX-13563",
  qty: 556,
  rating: 5,
  sales: "186 / 2058",
  image: "/favicon.png",
  status: "Active",
}));
