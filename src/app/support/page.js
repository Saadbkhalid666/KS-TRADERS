'use client';

import { useState } from 'react';
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google';

/**
 * KS Traders — Support Page
 * -----------------------------------------------------------------------
 * Update the CONTACT object below with your real phone number and email —
 * that's the only setup needed.
 * -----------------------------------------------------------------------
 */

const CONTACT = {
  phone: '+92 3244186212',
  phoneHref: 'tel:+923244186212',
  whatsappHref: 'https://wa.me/923244186212',
  email: 'khalidm2296@gmail.com',
};

const display = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

const CATEGORIES = [
  {
    id: 'orders',
    label: 'Orders & Delivery',
    faqs: [
      {
        q: "What's the minimum order quantity (MOQ)?",
        a: 'Standard MOQ is 5 cases per order for city deliveries. Distributors on a standing agreement have custom MOQs set at onboarding.',
      },
      {
        q: 'How do I place a bulk order?',
        a: 'Call or WhatsApp, or email khalidm2296@gmail.com with your business name, delivery address, and case quantity. Confirmed orders are dispatched within 24–48 hours or sometimes late.',
      },
      {
        q: 'Which areas do you deliver to?',
        a: 'We currently cover Lahore.',
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing & Payments',
    faqs: [
      {
        q: 'What payment methods do you accept?',
        a: 'Bank transfer, JazzCash/Easypaisa, and cash on delivery for standard accounts. Registered distributors can apply for 15 or 30-day credit terms.',
      },
      {
        q: 'Do you offer credit terms for regular distributors?',
        a: 'Yes, after your first three completed orders you can apply for credit terms through your account manager, subject to a short verification.',
      },
    ],
  },
  {
    id: 'damaged',
    label: 'Damaged or Missing Items',
    faqs: [
      {
        q: 'Bottles arrived damaged or leaking — what do I do?',
        a: 'Do not accept visibly damaged crates at delivery if possible. If damage is found after, photograph the crate and bottles and share them with your order number within 48 hours for a free replacement.',
      },
      {
        q: 'An item is missing from my shipment.',
        a: 'Report shortages within 24 hours of delivery with your order number. We will verify against the dispatch manifest and ship the balance within 2 business days.',
      },
      {
        q: "What's your replacement policy?",
        a: 'Verified damaged or missing stock is replaced free of charge on your next delivery, or refunded on request.',
      },
    ],
  },
  
];

function CaseIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="10" width="42" height="32" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M3 10L24 4L45 10" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="15" cy="26" r="5.5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="33" cy="26" r="5.5" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function ChannelCard({ title, value, hint, href, tone }) {
  return (
    <a
      href={href}
      className={`group relative flex flex-col justify-between rounded-sm border border-black/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#0d0d0d] ${
        tone === 'primary' ? 'ring-1 ring-[#e63539]/20' : ''
      }`}
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/40">
          {title}
        </p>
        <p className="mt-3 font-(family-name:--font-display) text-3xl tracking-wide text-black">
          {value}
        </p>
      </div>
      <p className="mt-6 text-sm text-black/50">{hint}</p>
      <span className="absolute right-5 top-5 text-lg text-[#e63539] transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState('orders');
  const [openFaq, setOpenFaq] = useState(null);
  const [trackingResult, setTrackingResult] = useState(null);

  const activeFaqs = CATEGORIES.find((c) => c.id === activeCategory)?.faqs ?? [];

  function handleTrack(e) {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    setTrackingResult({
      number: trackingNumber.trim(),
      status: 'Out for delivery',
      eta: 'Today, by 6:00 PM',
    });
  }

  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[#f6f5f3] font-(family-name:--font-body) text-black`}
    >
      

      {/* Hero */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#e63539]">
            Support center
          </p>
          <h1 className="mt-4 max-w-2xl font-(family-name:--font-display) cursor-target text-5xl leading-[0.95] tracking-wide sm:text-7xl">
            Every crate, on time, or we make it right.
          </h1>
          <p className="mt-5 max-w-xl text-base cursor-target text-black/60 sm:text-lg">
            Wholesale support for shops, distributors, and restaurants ordering Nestlé water by
            the case. Track a shipment, browse common questions, or reach a real person below.
          </p>
  
 
        </div>
      </section>

      {/* Support channels */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          <ChannelCard
            title="Call"
            value={CONTACT.phone}
            hint="Mon–Sat, 9am–7pm for order and billing queries."
            href={CONTACT.phoneHref}
            tone="primary"
          />
          <ChannelCard
            title="WhatsApp"
            value="Chat instantly"
            hint="Fastest for order status and delivery scheduling."
            href={CONTACT.whatsappHref}
          />
          <ChannelCard
            title="Email"
            value={CONTACT.email}
            hint="Best for invoices, damage reports, and applications."
            href={`mailto:${CONTACT.email}`}
          />
        </div>
      </section>

      {/* FAQ crate grid */}
      <section id="faqs" className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="font-(family-name:--font-display) text-4xl tracking-wide">
              The crate
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/40">
              6 categories
            </p>
          </div>
          <p className="mt-2 max-w-lg text-sm text-black/50">
            Pick a slot to open the questions we hear most in that area.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenFaq(null);
                  }}
                  className={`flex flex-col items-center gap-3 rounded-full border-2 px-4 py-8 text-center transition-all ${
                    isActive
                      ? 'border-[#e63539] bg-[#e63539] text-white shadow-[6px_6px_0_0_#0d0d0d]'
                      : 'border-black/15 bg-[#f6f5f3] text-black hover:border-black/40'
                  }`}
                >
                  <CaseIcon className="h-8 w-8" />
                  <span className="font-mono text-[11px] uppercase leading-tight tracking-[0.08em]">
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Accordion */}
          <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
            {activeFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-medium sm:text-lg">{faq.q}</span>
                    <span
                      className={`shrink-0 font-mono text-xl text-[#e63539] transition-transform ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 pr-10 text-sm leading-relaxed text-black/60">{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-black/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#e63539]">
            Still stuck?
          </p>
          <h2 className="mt-3 font-(family-name:--font-display) text-4xl tracking-wide text-white sm:text-5xl">
            Talk to a real person.
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/50">
            Call for anything urgent, or email with your order number for invoices, damage
            reports, and distributor applications.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-2xl">
            <a
              href={CONTACT.phoneHref}
              className="group flex items-center justify-between rounded-sm border border-white/10 bg-white/3 p-6 transition-colors hover:border-[#e63539]/40 hover:bg-white/6"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Phone
                </p>
                <p className="mt-2 font-mono text-xl tracking-wide text-white">
                  {CONTACT.phone}
                </p>
              </div>
              <span className="text-lg text-[#e63539] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center justify-between rounded-sm border border-white/10 bg-white/3 p-6 transition-colors hover:border-[#e63539]/40 hover:bg-white/6"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Email
                </p>
                <p className="mt-2 font-mono text-xl tracking-wide text-white">
                  {CONTACT.email}
                </p>
              </div>
              <span className="text-lg text-[#e63539] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="mt-10 space-y-1 font-mono text-xs uppercase tracking-[0.15em] text-white/30">
            <p>Lahore, Punjab, Pakistan</p>
            <p>Mon – Sat, 9:00 AM – 7:00 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0d0d0d] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-white/40 sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-[0.15em]">
            KS Traders — Wholesale water distribution
          </p>
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} KS Traders. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
