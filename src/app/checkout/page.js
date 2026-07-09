"use client";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Store,
  FileText,
  Truck,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slice";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isShown, setIsShown] = useState(false);
  const router = useRouter()
  
  const dispatch = useDispatch();

  const delivery = 200;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const total = subtotal + delivery;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    shop: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.location) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const order = cartItems
        .map(
          (item) => `
${item.name}
Quantity : ${item.quantity}
Price : Rs. ${item.price}
Total : Rs. ${item.price * item.quantity}
`,
        )
        .join("\n-----------------------------\n");

      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        location: form.location,
        shop: form.shop || "N/A",
        notes: form.notes || "No Notes",

        order,

        subtotal,
        delivery,
        total,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );


      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        shop: "",
        notes: "",
      });

      dispatch(clearCart());
      setTimeout(() => {
        setIsShown(true);

        setTimeout(() => {
          setIsShown(false);
          router.push("/")
        }, 4000); 
      }, 1000);
    } catch (error) {
      console.log(error);

      alert("Failed to send order.");
    } finally {
      setLoading(false);
    }
  };

  if (isShown) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-[90%] text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>

          <p className="mt-3 text-gray-600">
            Your order has been placed successfully.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            We will contact you shortly to confirm your order.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-black">Checkout</h1>

          <p className="text-gray-500 mt-2">
            Complete your order information below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT */}

          <form
            id="checkoutForm"
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold mb-8">Customer Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}

              <div>
                <label className="font-semibold mb-2 block">Full Name</label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Muhammad Ali"
                    className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none cursor-target focus:border-[#e63539]"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="font-semibold mb-2 block">Email</label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="email"
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none cursor-target focus:border-[#e63539]"
                  />
                </div>
              </div>

              {/* Phone */}

              <div>
                <label className="font-semibold mb-2 block">
                  Contact Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-4 text-gray-400 "
                  />

                  <input
                    type="text"
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03XXXXXXXXX"
                    className="w-full border rounded-xl pl-11 pr-4 cursor-target py-3 outline-none focus:border-[#e63539]"
                  />
                </div>
              </div>

              {/* Shop */}

              <div>
                <label className="font-semibold mb-2 block">
                  Shop Name (Optional)
                </label>

                <div className="relative">
                  <Store
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    name="shop"
                    value={form.shop}
                    onChange={handleChange}
                    placeholder="ABC Store"
                    className="w-full border rounded-xl pl-11 pr-4 py-3 cursor-target outline-none focus:border-[#e63539]"
                  />
                </div>
              </div>
            </div>

            {/* Address */}

            <div className="mt-6">
              <label className="font-semibold mb-2 block">
                Delivery Address
              </label>

              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <textarea
                  rows={5}
                  required
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Enter complete delivery address..."
                  className="w-full border rounded-xl pl-11 pr-4 py-3 resize-none cursor-target outline-none focus:border-[#e63539]"
                />
              </div>
            </div>

            {/* Notes */}

            <div className="mt-6">
              <label className="font-semibold mb-2 block">
                Order Notes (Optional)
              </label>

              <div className="relative">
                <FileText
                  size={18}
                  className="absolute left-4 top-4 text-gray-400 cursor-target"
                />

                <textarea
                  rows={4}
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Any instructions..."
                  className="w-full border rounded-xl pl-11 pr-4 py-3 resize-none outline-none focus:border-[#e63539]"
                />
              </div>
            </div>
          </form>

          {/* RIGHT */}

          <div>
            <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-28 cursor-target">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b pb-4"
                  >
                    <div>
                      <h3 className="font-semibold">{item.heading}</h3>

                      <p className="text-gray-500 text-sm">
                        Qty : {item.quantity}
                      </p>
                    </div>

                    <span className="font-semibold">
                      Rs. {item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>

                  <span>Rs. {subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>

                  <span>Rs. {delivery}</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-xl font-bold">
                  <span>Total</span>

                  <span className="text-[#e63539]">Rs. {total}</span>
                </div>
              </div>

              <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 font-semibold">
                  <Truck size={20} className="text-[#e63539]" />
                  Cash On Delivery
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  Delivery is currently available only in Lahore.
                </p>
              </div>

              {/* EmailJS submit button will be added in Part 2 */}

              <button
                type="submit"
                form="checkoutForm"
                disabled={loading}
                className="cursor-target mt-8 w-full cursor-target bg-[#e63539] hover:bg-red-700 disabled:bg-red-300 transition text-white py-4 rounded-xl font-semibold"
             
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
