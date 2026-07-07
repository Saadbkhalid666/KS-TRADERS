import Image from "next/image";
import { notFound } from "next/navigation";
import { Products } from "@/app/data/products";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = Products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          Home / Catalog /
          <span className="text-[#e63539] font-semibold">
            {" "}
            {product.name}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Product Image */}
          <div className="bg-gray-100 rounded-3xl p-10 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain hover:scale-105 transition duration-500"
            />
          </div>

          {/* Product Details */}
          <div>

            <span className="inline-block bg-[#e63539]/10 text-[#e63539] px-4 py-1 rounded-full font-medium">
              Wholesale Product
            </span>

            <h1 className="text-5xl font-bold text-black mt-4">
              {product.name}
            </h1>

            <p className="text-4xl font-bold text-[#e63539] mt-6">
              Rs. {product.price}
            </p>

            <div className="mt-5">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                In Stock
              </span>
            </div>

            <p className="text-gray-600 mt-8 leading-8">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="mt-10">

              <h3 className="font-semibold text-lg mb-4">
                Quantity
              </h3>

              <div className="flex items-center border w-fit rounded-xl overflow-hidden">

                <button className="px-5 py-3 text-2xl hover:bg-gray-100">
                  -
                </button>

                <span className="px-8 font-semibold">
                  1
                </span>

                <button className="px-5 py-3 text-2xl hover:bg-gray-100">
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">

              <button className="bg-[#e63539] hover:bg-red-700 transition text-white px-10 py-4 rounded-xl font-semibold">
                Add To Cart
              </button>

              <button className="border-2 border-black hover:bg-black hover:text-white transition px-10 py-4 rounded-xl font-semibold">
                Buy Now
              </button>

            </div>

            {/* Features */}
            <div className="mt-12 border-t pt-8">

              <h2 className="text-2xl font-bold mb-5">
                Product Features
              </h2>

              <ul className="space-y-4 text-gray-700">

                <li>✔ 100% Original Nestlé Pure Life Water</li>

                <li>✔ Wholesale Pricing Available</li>

                <li>✔ Fast Delivery Across Lahore</li>

                <li>✔ Secure Packaging</li>

                <li>✔ Bulk Orders Accepted</li>

              </ul>

            </div>

            {/* Delivery */}
            <div className="mt-12 bg-gray-100 rounded-2xl p-6">

              <h3 className="font-bold text-xl">
                Delivery Information
              </h3>

              <p className="text-gray-600 mt-2">
                We currently deliver only within Lahore.
                Same-day delivery is available for selected areas.
                Bulk orders may require additional processing time.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}