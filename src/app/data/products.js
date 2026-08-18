import halflitre from "../assets/0.5lbgremove.png"
import oneAndHalfLitre from "../assets/1.5lbgremove.png"
import fiveLitre from "../assets/5lbgremove.png"
export  const Products = [
    {
      id: 1,
      heading: "500ml Everyday Case",
      slug: "500ml",
      about:
        "The standard for convenience. Perfect for guest rooms, retail counters, and corporate events.",
      unitsLabel: "24 Units / Case",
      oldPrice: 900,
      price: 700,
      badge: "Most Popular",
      badgeStyle: "bg-red-600 text-white",
      defaultQty: 1,
      img: halflitre,
    },
    {
      id: 2,
      heading: "1.5L High Capacity",
      slug: "1500ml",
      about:
        "Designed for active hydration. Ideal for gymnasiums, sports facilities, and site canteens.",
      unitsLabel: "12 Units / Case",
      oldPrice: 720,
      price: 560,
      badge: null,
      badgeStyle: "",
      defaultQty: 1,
      img: oneAndHalfLitre,
    },
    {
      id: 3,
      heading: "5L Bulk Jug",
      slug: "5000ml",
      about:
        "Maximum efficiency for bulk use. Best for hospitality kitchens and industrial water stations.",
      unitsLabel: "4 Units / Case",
      oldPrice: 480,
      price: 350,
      badge: "Best Value",
      badgeStyle: "bg-gray-900 text-white",
      defaultQty: 1,
      img: fiveLitre,
    },
  ];