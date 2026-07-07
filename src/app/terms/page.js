
export const metadata = {
  title: "Terms of Sale | KS Traders",
  description: "Terms of Sale for KS Traders Wholesale Nestlé Water.",
};

export  default function TermsOfSale() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white shadow-lg">
        {/* Header */}
        <div className="rounded-t-2xl bg-[#e63539] px-8 py-10 text-white">
          <h1 className="text-4xl font-bold cursor-target">Terms of Sale</h1>
          <p className="mt-3 text-white/90">
            Please read these Terms of Sale carefully before placing an order
            with KS Traders.
          </p>

          <p className="mt-2 text-sm text-white/80">
            Effective Date: July 6, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 px-8 py-10 text-gray-700">

          {/* About */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              1. About KS Traders
            </h2>

            <p className="leading-8">
              KS Traders is a wholesale supplier of genuine Nestlé Pure Life
              bottled drinking water in Lahore, Pakistan. We supply offices,
              restaurants, schools, hospitals, retailers, supermarkets, and
              other commercial customers with high-quality bottled water at
              wholesale prices.
            </p>
          </section>

          {/* Delivery */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              2. Delivery Area
            </h2>

            <p className="leading-8">
              We currently deliver orders only within Lahore, Pakistan.
            </p>

            <p className="mt-3 leading-8">
              Orders placed outside Lahore cannot be processed through our
              website.
            </p>
          </section>

          {/* Products */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              3. Products
            </h2>

            <p className="mb-4 leading-8">
              We sell genuine Nestlé Pure Life bottled water in multiple sizes,
              including:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>0.5 Liter</li>
              <li>1.5 Liter</li>
              <li>5 Liter</li>
            </ul>

            <p className="mt-4 leading-8">
              Product availability may change without prior notice.
            </p>
          </section>

          {/* Wholesale */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              4. Wholesale Orders
            </h2>

            <p className="leading-8">
              Our prices are intended for wholesale customers. Minimum order
              quantities may apply depending on the selected products.
            </p>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              5. Pricing
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>All prices are shown in Pakistani Rupees (PKR).</li>
              <li>Prices may change without prior notice.</li>
              <li>Promotional prices are valid only during active promotions.</li>
              <li>The final checkout price is the price payable.</li>
            </ul>
          </section>

          {/* Order Confirmation */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              6. Order Confirmation
            </h2>

            <p className="leading-8">
              Placing an order does not automatically mean that it has been
              accepted.
            </p>

            <p className="mt-3 leading-8">
              Our team may contact you to confirm product availability, delivery
              location, and order details before dispatch.
            </p>
          </section>

          {/* Payment */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              7. Payment
            </h2>

            <p className="leading-8">
              Payment methods available during checkout will apply to your
              purchase.
            </p>

            <p className="mt-3 leading-8">
              Payment must be completed before or upon delivery depending on the
              selected payment method.
            </p>
          </section>

          {/* Delivery */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              8. Delivery
            </h2>

            <p className="leading-8">
              We aim to deliver all orders as quickly as possible within Lahore.
            </p>

            <p className="mt-3 leading-8">
              Delivery times are estimates and may vary because of traffic,
              weather, holidays, or other unforeseen circumstances.
            </p>
          </section>

          {/* Inspection */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              9. Inspection Upon Delivery
            </h2>

            <p className="leading-8">
              Please inspect your order immediately upon delivery.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Missing items</li>
              <li>Damaged products</li>
              <li>Incorrect products</li>
            </ul>

            <p className="mt-4 leading-8">
              Report any issues immediately to our delivery representative or
              contact us as soon as possible.
            </p>
          </section>

          {/* Returns */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              10. Returns & Replacements
            </h2>

            <p className="leading-8">
              Returns are accepted only if:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>The wrong product was delivered.</li>
              <li>The product arrived damaged.</li>
              <li>The product has a manufacturing defect.</li>
            </ul>

            <p className="mt-4 leading-8">
              Opened or used products cannot be returned unless required by
              applicable law.
            </p>
          </section>

          {/* Cancellation */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              11. Order Cancellation
            </h2>

            <p className="leading-8">
              Orders may be cancelled before dispatch. Once dispatched,
              cancellation may no longer be possible.
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              12. Customer Responsibilities
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Provide accurate delivery information.</li>
              <li>Provide a valid contact number.</li>
              <li>Be available to receive the order.</li>
              <li>Ensure safe access to the delivery location.</li>
            </ul>
          </section>

          {/* Liability */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              13. Limitation of Liability
            </h2>

            <p className="leading-8">
              KS Traders is not responsible for delivery delays caused by
              circumstances beyond our control, including severe weather,
              traffic, government restrictions, or other unforeseen events.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              14. Changes to These Terms
            </h2>

            <p className="leading-8">
              We reserve the right to update these Terms of Sale at any time.
              Any changes will become effective once published on this website.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-3 border-l-4 border-[#e63539] pl-4 text-2xl font-bold text-black">
              15. Contact Us
            </h2>

            <div className="rounded-xl border-l-4 border-[#e63539] bg-[#f5f5f5] p-6">
              <h3 className="text-xl font-semibold text-black">
                KS Traders
              </h3>

              <p className="mt-3">
                If you have any questions regarding these Terms of Sale, please
                contact us using the information available on our Contact page.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}