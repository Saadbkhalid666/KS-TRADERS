export default function Page(){

// data/products.js

 const products = [
  {
    id: 1,
    slug: "nestle-water-500ml",
    name: "Nestle Water 500ml",
    price: 700,
    image: "/500ml.png",
  },
  {
    id: 2,
    slug: "nestle-water-1-5l",
    name: "Nestle Water 1.5L",
    price: 560,
    image: "/1.5l.png",
  },
  {
    id: 3,
    slug: "nestle-water-5l",
    name: "Nestle Water 5L",
    price: 350,
    image: "/5l.png",
  },
];

  return <div className="mx-auto bg-gray-100 w-full h-max">

<p>Store / All Products</p>
<h1>Wholesale Catalog</h1>
<p>Premium hydration solutions at industrial scale. specialized pricing for retail chains, distributions, and logistics partners.</p>

  </div>
};
