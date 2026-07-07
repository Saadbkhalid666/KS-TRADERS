export default function Page(){

// data/products.js

export const products = [
  {
    id: 1,
    slug: "nestle-water-500ml",
    name: "Nestle Water 500ml",
    price: 50,
    image: "/500ml.png",
  },
  {
    id: 2,
    slug: "nestle-water-1-5l",
    name: "Nestle Water 1.5L",
    price: 120,
    image: "/1.5l.png",
  },
  {
    id: 3,
    slug: "nestle-water-5l",
    name: "Nestle Water 5L",
    price: 250,
    image: "/5l.png",
  },
];

  return <div>

<h1>Wholesale Catalog</h1>
<p>Premium hydration solutions at industrial scale. specialized pricing for retail chains, distributions, and logistics partners.</p>

  </div>
};
