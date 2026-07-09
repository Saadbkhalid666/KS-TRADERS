# KS Traders — Wholesale Water Ordering Platform

A full-stack wholesale e-commerce platform built with **Next.js** and **Redux Toolkit**, designed to streamline bulk ordering for a Nestlé Pure Life water distributor based in Lahore.

🔗 **Live Demo:** [kstraders.vercel.app](https://kstraders.vercel.app)

---

## 📖 About the Project

KS Traders is a personal project built to apply real-world frontend architecture patterns — global state management, dynamic tiered pricing, and a scalable product catalog — in the context of an actual business use case: wholesale water distribution.

The platform allows retailers, restaurants, offices, and other bulk buyers to browse a product catalog, view tiered wholesale pricing, add items to a cart, and request custom quotes.

---

## ✨ Features

- 🛒 **Wholesale Catalog** — Browse products (500ml, 1.5L, 5L water bottles) with case-based pricing
- 💰 **Dynamic Tiered Pricing** — Pricing scales based on order volume/business requirements
- 🧺 **Cart System** — Add to cart, update quantities, and review orders via Redux Toolkit-managed global state
- 📞 **Support & Custom Quotes** — Dedicated support page for business inquiries
- 📄 **Terms of Sale** page for legal transparency
- 📱 **Fully Responsive Design** — Optimized for mobile, tablet, and desktop
- 🔍 **SEO Optimized** — Structured metadata, Open Graph, and Twitter card support for discoverability
- 🎨 **Custom Design System** — Built on Tailwind CSS with custom design tokens (e.g., `text-display-lg`, `bg-surface-container-low`, `ambient-shadow`)

---

## 🛠️ Tech Stack

| Category         | Technology              |
|------------------|--------------------------|
| Framework        | Next.js (App Router)     |
| State Management | Redux Toolkit (RTK)      |
| Styling          | Tailwind CSS (custom design tokens) |
| Deployment       | Vercel                   |
| Language         | JavaScript / React       |

---

## 📂 Project Structure

```
kstraders/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── catalog/           # Wholesale catalog / store page
│   ├── cart/              # Cart page
│   ├── support/           # Support & custom quote page
│   └── terms/             # Terms of sale page
├── components/            # Reusable UI components
├── redux/
│   ├── store.js           # Redux store configuration
│   └── slices/            # RTK slices (cart, catalog, orders, etc.)
├── public/                 # Static assets & product images
├── styles/                 # Global styles & Tailwind config
└── README.md
```

> Note: Update this structure to match your actual repo layout if it differs.

---

## 🧠 State Management

Global state is managed using **Redux Toolkit**, including:
- `createSlice` for cart, catalog, and order state
- `createAsyncThunk` for async data operations
- Redux DevTools integration for debugging state changes in development

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/kstraders.git

# Navigate into the project
cd kstraders

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌱 Roadmap / Future Improvements

- [ ] User authentication for repeat wholesale clients
- [ ] Admin dashboard for managing products & pricing tiers
- [ ] Order history and invoice generation
- [ ] Payment gateway integration
- [ ] Real-time inventory tracking

---

## 👨‍💻 Author

**Saad Bin Khalid**
Full-Stack Developer — React/Next.js, Node.js, Python, MongoDB
🔗 [Portfolio](https://saadbinkhalid.vercel.app)

---

## 📄 License

This project is open for learning and demonstration purposes. Feel free to reach out if you'd like to use or adapt parts of it.
